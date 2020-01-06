import React from "react"
import { IContainerProps } from "../../types"

const Container: React.FC<IContainerProps> = (props) => {
  return <div className={`container ${props.className}`}> {props.children}</div>
}

export default Container
