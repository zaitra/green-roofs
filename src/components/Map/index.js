import React from "react"
import { Map as LeafletMap, TileLayer } from "react-leaflet"

const center = [50.086385, 14.423693]

function App() {
  return (
    <LeafletMap zoom={15} center={center}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    </LeafletMap>
  )
}

export default App
