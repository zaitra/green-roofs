import React from "react"
import "./index.css"
import PropTypes from "prop-types"

function MapContainer({ children }) {
  return <div className="map-container"> {children}</div>
}

MapContainer.propTypes = {
  children: PropTypes.shape()
}

MapContainer.defaultProps = {
  children: {}
}

export default MapContainer
