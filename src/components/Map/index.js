import React from "react"
import PropTypes from "prop-types"
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet"

function App({ geojsonData, zoom, center }) {
  return (
    <LeafletMap zoom={zoom} center={center}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <GeoJSON data={geojsonData} />
    </LeafletMap>
  )
}

App.propTypes = {
  zoom: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  geojsonData: PropTypes.shape({
    type: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string
      })
    )
  })
}

App.defaultProps = {
  zoom: 15,
  center: [0, 0],
  geojsonData: {}
}

export default App
