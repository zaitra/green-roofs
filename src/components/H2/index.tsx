import React from "react"
import { H2Props } from "../../types"

const H2: React.FC<H2Props> = (props) => {
  return <h2 className={`${props.className} h2`}> {props.children}</h2>
}

export default H2
