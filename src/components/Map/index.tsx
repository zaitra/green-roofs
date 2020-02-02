import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import shortid from "shortid"
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON,
  Rectangle,
  ImageOverlay
} from "react-leaflet"
import { LatLngBoundsExpression, popup } from 'leaflet'
import { useTranslation } from "react-i18next"
import GoogleMapReact from 'google-map-react'
import { IMapProps } from "../../types"
import { Marker } from '../Marker';
import Control from '../MapControl';
import MapLegend from '../MapLegend';

const defaultGeo = {
  fillOpacity: 0.7,
  weight: 2,
  opacity: 1,
  color: "#009548"
}

const boundsColor = "#bfbf04"

const Map: React.FC <IMapProps> = ({ 
  geojsonData = [],
  zoom = 0, center = [0,0], 
  bounds = [],
  heatMapBounds = [],
  geoStyle = defaultGeo,
  addFeatures = true,
  legend = true,
  popups = true,
  heatMapImg = '',
}) => {
	const { t } = useTranslation();
	const onEachFeature = (feature: any, layer: any) => {
		const featureCategoryNumber = getCategoryNumberByProperties(feature.properties);
		const featureStyle = getStyleByFeatureCategoryNumber(featureCategoryNumber)
		layer.setStyle(featureStyle)
		const {lat, lng} :any = GetCenterFromDegrees(feature.geometry.coordinates[0][0])
		layer.on('click', (e :any) => {
			// http://maps.google.com/maps?&z=18&mrt=all&t=h&q=40+12
			const zoom = 20
			const typeSearch = 'yp'//INSERT_TYPE_OF_SEARCH
			const mapType = 'm' // TYPE_OF_MAP
			const lati = lat // INSERT_MAP_LAT_COORDINATES
			const lngd = lng //INSERT_MAP_LONG_COORDINATES
			const url = `http://maps.google.com/maps?&z=${zoom}&mrt=${typeSearch}&t=${mapType}&q=${lati}+${lngd}`
			const win = window.open(url, '_blank');
			if (win != null) {
			  win.focus();
			}		  
		});

		if (!popups) return;

		layer.bindPopup('',  {
			className: feature.properties.objectid,
			keepInView: true
		});
	
		layer.on('mouseout', (e :any) => {
			layer.closePopup()
		});
	
		layer.on('mouseover', (e :any) => {
			layer.openPopup()
			attachComponentToPopup(feature, t)
		});
	}

  return (
    <LeafletMap zoom={zoom} center={center} scrollWheelZoom={false}>
      {/* GENERATE map background */}
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

      {/*
        * GENERATE rectangle/s 
        *
      */}
      {bounds.map((bound: LatLngBoundsExpression) => {
        return (
          <Rectangle
            bounds={bound}
            color={boundsColor}
            opacity={0.8}
            fillOpacity={0}
            key={shortid.generate()}
          />
        )
      })}
      {/* 
        * GENERATE layer/s of geojson 
        *
      */}
      {geojsonData.map((geojsonData: GeoJSON.GeoJsonObject) => {
		return <GeoJSON data={geojsonData} 
			key={shortid.generate()}
			style={geoStyle}
			onEachFeature={addFeatures ? onEachFeature : undefined} 
			/>
      })}

      {/* 
        * GENERATE Image overlay 
        * 
      */}
      {heatMapBounds.length > 0 ? (
        <ImageOverlay url={heatMapImg} bounds={heatMapBounds} opacity={0.80} />
      ) : null}
      {/* 
        * GENERATE legend for map
        * 
      */}
	  	{ legend
		 	?  <Control position="bottomright">
					<MapLegend legendList={["1", "2", "3/4"]} showPopupsInfoMessage={popups}/>
				</Control>
			: null 
		}
    </LeafletMap>
  )
}


const getStyleByFeatureCategoryNumber = (categoryNumber :number) => {
	switch (categoryNumber) {
		case 1:
			return {
				color: "#7f00ff" // purple
			}
		case 2:
			return {
				color: "#4990E2" // blue
			}
		case 3:
		case 4:
			return {
				color: "#009548" // default green
			}
		default:
			console.error("categoryNumber", categoryNumber)
			throw new Error("Something is wrong with getStyleByFeatureCategoryNumber method!")
	}
}

const getCategoryNumberByProperties = (properties :any) :number => {
	const {
		"Kategorie I": cat1,
		"Kategorie II": cat2,
		"Kategorie III": cat3,
		"Kategorie IV": cat4
	} = properties
	// Category 1
	if (cat1 && cat2 && cat3 && cat4) {
		return 1;
	}
	// Category 2
	else if (!cat1 && cat2 && cat3 && cat4) {
		return 2;
	}
	// Category 3
	else if (!cat1 && !cat2 && cat3 && cat4) {
		return 3;
	}
	// Category 4
	return 4;
	
}
	
const attachComponentToPopup = (feature: any, t: any) =>  {
	const bulgarianConstant = 0.00015;
	const {lat, lng} :any = GetCenterFromDegrees(feature.geometry.coordinates[0][0])
	const center3d = {  
		lat: lat + bulgarianConstant,
		lng: lng,
	  };
	let labelContent = () => {
		return(
			<div>
				<div style={{ height: '200px', width: '100%', padding: '0 0 25px' }} className="google-map">
					<GoogleMapReact 
						bootstrapURLKeys={{ key: "AIzaSyA_7d7iWDbFsq50av6Py5zqhJAaSkfwGn4" }}
						defaultCenter={center3d}
						defaultZoom={18}					
						options = {{
							disableDefaultUI: true,
							mapTypeId: "hybrid",
							rotateControl: false
						}}
					>
						<Marker lat={center3d.lat} lng={center3d.lng} />

					</GoogleMapReact>
				</div>
				<span><strong>{t('map.popup.owner')}:</strong> {feature.properties.vlastnictvi}</span><br/>
				<span><strong>{t('map.popup.used-for')}:</strong> {feature.properties.vyuziti_uzemi}</span><br/>
				<span><strong>{t('map.popup.area')}:</strong> {feature.properties.shape_area.toFixed(2)} m2</span><br/><br/>
			</div>
		)
	}
	let el = document.getElementsByClassName(feature.properties.objectid)[0];
	
	if (el) {
		ReactDOM.render(
			labelContent(),
			el
		);
	}
}

export default Map

/**
 * Get a center latitude,longitude from an array of like geopoints
 *
 * @param array data 2 dimensional array of latitudes and longitudes
 * For Example:
 * $data = array
 * (
 *   0 = > array(45.849382, 76.322333),
 *   1 = > array(45.843543, 75.324143),
 *   2 = > array(45.765744, 76.543223),
 *   3 = > array(45.784234, 74.542335)
 * );
*/
function GetCenterFromDegrees(data :any) {
    if (!(data.length > 0)){
        return false;
    } 

    var num_coords = data.length;

    var X = 0.0;
    var Y = 0.0;
    var Z = 0.0;

    for(let i = 0; i < data.length; i++){
        var lat = data[i][0] * Math.PI / 180;
        var lon = data[i][1] * Math.PI / 180;

        var a = Math.cos(lat) * Math.cos(lon);
        var b = Math.cos(lat) * Math.sin(lon);
        var c = Math.sin(lat);

        X += a;
        Y += b;
        Z += c;
    }

    X /= num_coords;
    Y /= num_coords;
    Z /= num_coords;

    var lon = Math.atan2(Y, X);
    var hyp = Math.sqrt(X * X + Y * Y);
    var lat = Math.atan2(Z, hyp);

    var newX = (lat * 180 / Math.PI);
    var newY = (lon * 180 / Math.PI);

    return {
		lng: newX,
		lat: newY
	};
}