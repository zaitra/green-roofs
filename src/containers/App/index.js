import React from "react"
import "./App.css"
import Map from "../../components/Map"
// JSONs
import allRoofs from "./data/bb_all_roofs.json"
import bb1Roofs from "./data/bb1_roofs.json"
import bb2Roofs from "./data/bb2_roofs.json"
import bb1Categ from "./data/bb1_roofs_categorized.json"
import bb2Categ from "./data/bb2_roofs_categorized.json"
// components
import MapContainer from "../../components/MapContainer"
import SectionTop from "../../components/SectionTop"
import SectionExplanation from "../../components/SectionExplanation"
import SectionMotivation from "../../components/SectionMotivation"
// Center of Prague
const center = [50.086385, 14.423693]
// first rectangle
const bbOneBounds = [
  [50.090759, 14.428063],
  [50.087322, 14.437146]
]
// second rectangle
const bbTwoBounds = [
  [50.086436, 14.424331],
  [50.0795, 14.432383]
]

function App() {
  return (
    <div>
      {/* Top of a page */}
      <SectionTop />
      {/* Section explanation */}
      <SectionExplanation />
      {/* Section motivation */}
      <SectionMotivation />
      {/* All roofs */}
      <MapContainer>
        <Map geojsonData={[allRoofs]} zoom="15" center={center} />
      </MapContainer>
      {/* Roofs only in bounding box 1&2 */}
      <MapContainer>
        <Map
          geojsonData={[bb1Roofs, bb2Roofs]}
          zoom="15"
          center={center}
          bounds={[bbOneBounds, bbTwoBounds]}
        />
      </MapContainer>
      {/* Roofs only in bounding box 1&2 categorized */}
      <MapContainer>
        <Map
          geojsonData={[bb1Categ, bb2Categ]}
          zoom="15"
          center={center}
          bounds={[bbOneBounds, bbTwoBounds]}
        />
      </MapContainer>
    </div>
  )
}

export default App
