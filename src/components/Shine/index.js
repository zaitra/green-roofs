import React from "react"
import PropTypes from "prop-types"
import "./index.css"

function Shine({ children }) {
  return <span className="shine"> {children}</span>
}

Shine.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Shine
