import React from "react"
import PropTypes from "prop-types"
import "./index.css"

function H2({ children, className }) {
  return <h2 className={`${className} h2`}> {children}</h2>
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}

H2.defaultProps = {
  className: ""
}

export default H2
