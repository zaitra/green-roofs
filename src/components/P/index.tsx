import React from "react"
import { IPProps } from "../../types"

const P: React.FC<IPProps> = (props) => {
  return <p className={`paragraph ${props.className}`}> {props.children}</p>
}

export default P 
