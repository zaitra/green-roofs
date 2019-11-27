import React from "react"
import "./App.css"
import Map from "../../components/Map"
import allRoofs from "./bb_center_green_roofs.json"
import MapContainer from "../../components/MapContainer"
// Center of Prague
const center = [50.086385, 14.423693]

function App() {
  return (
    <MapContainer>
      <Map geojsonData={allRoofs} zoom="15" center={center} />
    </MapContainer>
  )
}

export default App
