import React from "react"
import "./App.css"
import Map from "../../components/Map"
import allRoofs from "./bb_center_green_roofs.json"
// Center of Prague
const center = [50.086385, 14.423693]

function App() {
  return <Map geojsonData={allRoofs} zoom="15" center={center} />
}

export default App
