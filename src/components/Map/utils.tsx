import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react'
import { Marker } from '../Marker';
import React from "react";

export const getStyleByFeatureCategoryNumber = (categoryNumber :number) => {
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

export const getCategoryNumberByProperties = (properties :any) :number => {
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
	
export const attachComponentToPopup = (feature: any, t: any) =>  {
	const bulgarianConstant = 0.00015;
	const {lat, lng} :any = getCenterFromDegrees(feature.geometry.coordinates[0][0])
	const center3d = {  
		lat: lat + bulgarianConstant,
		lng: lng,
	  };
	let labelContent = () => {
		return (
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
export const getCenterFromDegrees = (data :any) => {
    if (!(data.length > 0)){
        return false;
    } 

    let num_coords = data.length;

    let X = 0.0;
    let Y = 0.0;
    let Z = 0.0;

    for(let i = 0; i < data.length; i++){
        let lat = data[i][0] * Math.PI / 180;
        let lon = data[i][1] * Math.PI / 180;

        let a = Math.cos(lat) * Math.cos(lon);
        let b = Math.cos(lat) * Math.sin(lon);
        let c = Math.sin(lat);

        X += a;
        Y += b;
        Z += c;
    }

    X /= num_coords;
    Y /= num_coords;
    Z /= num_coords;

    let lon = Math.atan2(Y, X);
    let hyp = Math.sqrt(X * X + Y * Y);
    let lat = Math.atan2(Z, hyp);

    let newX = (lat * 180 / Math.PI);
    let newY = (lon * 180 / Math.PI);

    return {
		lng: newX,
		lat: newY
	};
}