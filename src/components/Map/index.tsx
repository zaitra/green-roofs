import React from "react"
import shortid from "shortid"
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON,
  Rectangle,
  ImageOverlay
} from "react-leaflet"
import { LatLngBoundsExpression } from 'leaflet'
import heatmapImg from "../../img/heatmap.jpg"

interface IMapProps {
  zoom?: any,
  geojsonData: any,
  center?: any,
  bounds?: any,
  heatMapBounds?: any,
  geoStyle?: any
}

const defaultGeo = {
  fillOpacity: 0.7,
  weight: 2,
  opacity: 1,
  color: "#009548"
}

const Map: React.FC <IMapProps> = ({ geojsonData = [], zoom = 0, center = [0,0], bounds = [] , heatMapBounds = [], geoStyle = defaultGeo }) => {
  return (
    <LeafletMap zoom={zoom} center={center} scrollWheelZoom={false}>
      {/* GENERATE map background */}
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

      {/* 
        * GENERATE layer/s of geojson 
        *
      */}
      {geojsonData.map((geojsonData: GeoJSON.GeoJsonObject) => {
        return <GeoJSON data={geojsonData} key={shortid.generate()} style={geoStyle} />
      })}

      {/*
        * GENERATE rectangle/s 
        *
      */}
      {bounds.map((bound: LatLngBoundsExpression) => {
        return (
          <Rectangle
            bounds={bound}
            color="#009548"
            opacity={0.8}
            fillOpacity={0}
            key={shortid.generate()}
          />
        )
      })}

      {/* 
        * GENERATE Image overlay 
        * 
      */}
      {heatMapBounds.length > 0 ? (
        <ImageOverlay url={heatmapImg} bounds={heatMapBounds} opacity={0.80} />
      ) : null}
      
    </LeafletMap>
  )
}

export default Map
