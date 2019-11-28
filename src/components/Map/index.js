import React from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import { Map as LeafletMap, TileLayer, GeoJSON, Rectangle } from "react-leaflet"

function App({ geojsonData, zoom, center, bounds }) {
  return (
    <LeafletMap zoom={zoom} center={center} scrollWheelZoom={false}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {geojsonData.map(geo => {
        return <GeoJSON data={geo} key={shortid.generate()} />
      })}
      {bounds.map(bound => {
        return (
          <Rectangle bounds={bound} color="blue" key={shortid.generate()} />
        )
      })}
    </LeafletMap>
  )
}

App.propTypes = {
  zoom: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  bounds: PropTypes.arrayOf(
    // arr of rectangles
    PropTypes.arrayOf(
      // arr bounds
      PropTypes.arrayOf(
        // bound group 1, 2
        PropTypes.number
      )
    )
  ),
  geojsonData: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string
        })
      )
    })
  )
}

App.defaultProps = {
  zoom: 15,
  center: [0, 0],
  geojsonData: {},
  bounds: [
    [
      [0, 0],
      [0, 0]
    ]
  ]
}

export default App
