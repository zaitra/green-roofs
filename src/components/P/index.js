import React from "react"
import PropTypes from "prop-types"
import "./index.css"

function P({ children, className }) {
  return <p className={`paragraph ${className}`}> {children}</p>
}

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}

P.defaultProps = {
  className: ""
}

export default P
