import React from "react"
import { IMapContainerProps } from "../../types"

const MapContainer: React.FC<IMapContainerProps> = ({children}) => {
  return <div className="map-container"> {children}</div>
}

export default MapContainer
