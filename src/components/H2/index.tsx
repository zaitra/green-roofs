import React from "react"

interface H2Props {
  className?: String,
  children: Object
}

const H2: React.FC<H2Props> = (props) => {
  return <h2 className={`${props.className} h2`}> {props.children}</h2>
}

export default H2
