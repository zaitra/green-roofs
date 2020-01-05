import React from "react"

interface ContainerProps {
  className?: String,
  children: Object
}

const Container: React.FC<ContainerProps> = (props) => {
  return <div className={`container ${props.className}`}> {props.children}</div>
}

export default Container
