import React from "react"
import { IShineProps } from "../../types"

const Shine: React.FC<IShineProps> = (props) => {
  return <span className="shine"> {props.children}</span>
}

export default Shine
