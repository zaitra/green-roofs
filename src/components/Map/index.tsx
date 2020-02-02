import React from 'react'
import shortid from "shortid"
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON,
  Rectangle,
  ImageOverlay
} from "react-leaflet"
import { LatLngBoundsExpression } from 'leaflet'
import { useTranslation } from "react-i18next"
import { IMapProps } from "../../types"
import Control from '../MapControl';
import MapLegend from '../MapLegend';
import { getStyleByFeatureCategoryNumber, getCenterFromDegrees, getCategoryNumberByProperties, attachComponentToPopup } from './utils'

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
		const {lat, lng} :any = getCenterFromDegrees(feature.geometry.coordinates[0][0])
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

export default Map