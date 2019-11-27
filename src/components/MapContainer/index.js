import React from "react"
import PropTypes from "prop-types"
import "./index.css"

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
