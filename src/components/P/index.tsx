import React from "react"

interface PProps {
  children: Object,
  className?: String
}
 
const P: React.FC<PProps> = (props) => {
  return <p className={`paragraph ${props.className}`}> {props.children}</p>
}

export default P 
