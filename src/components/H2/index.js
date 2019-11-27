import React from "react"
import PropTypes from "prop-types"
import "./index.css"

function H2({ children, green }) {
  console.log("children", children)
  const name = green ? "green h2" : "default h2"
  return <h2 className={name}> {children}</h2>
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  green: PropTypes.bool
}

H2.defaultProps = {
  green: false
}

export default H2
