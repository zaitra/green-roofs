import React from "react"

interface ShineProps {
  children: String
}

const Shine: React.FC<ShineProps> = (props) => {
  return <span className="shine"> {props.children}</span>
}

export default Shine
