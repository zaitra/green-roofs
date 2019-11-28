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
import Container from "../../components/Container"
import H2 from "../../components/H2"
import Shine from "../../components/Shine"
import P from "../../components/P"
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
      {/*
       * Top of a page
       */}
      <SectionTop />
      {/*
       * Explanation what is green roof
       */}
      <SectionExplanation />
      {/*
       * Motivation why we care about that
       */}
      <SectionMotivation />
      {/*
       * All roofs map with text
       */}
      <Container>
        <section className="section text-center">
          <H2>
            Open data <Shine>+</Shine> Satellite imagery <Shine>=</Shine>
          </H2>
          <img
            className="pb-5 pl-3"
            src="/svg/green-roofs-logo-leaf.svg"
            alt="Green roofs logo leaf"
          />
          <P>
            Na mape môžete vidieť <Shine>1050 budov</Shine> centre Prahy, ktoré
            je možné premeniť na green-roofs. Analýza ich rozdeľuje do{" "}
            <Shine>4 kategorí</Shine> podľa nasledovných kritérii - rozloha,
            vlastník, povrch, stúpanie..
          </P>
          <P>
            Na tejto mape sa nachádza <Shine>45 budov v kategórii 1</Shine>{" "}
            (teda najvhodnejšia strecha pre green-roof), ktoré splnili dané
            kritéria.{" "}
            <Shine>
              No sú to tie budovy, ktoré naozaj negatívne vplývajú na životné
              prostredie?
            </Shine>
          </P>
        </section>
      </Container>
      <MapContainer>
        <Map geojsonData={[allRoofs]} zoom="15" center={center} />
      </MapContainer>
      {/*
       * Roofs only in bounding box 1&2
       */}
      <Container>
        <section className="section text-center">
          <P>
            Na pomoc sme si zobrali teplotnú mapu zo satelitu Landsat 8, čo nám
            pomohlo{" "}
            <Shine>detekovať budovy v teplotne najhorších oblastiach</Shine>{" "}
            centra Prahy. Silno-červená farba indikuje vysokú teplotu v danej
            oblasti.
          </P>
        </section>
      </Container>
      <MapContainer>
        <Map
          geojsonData={[bb1Roofs, bb2Roofs]}
          zoom="15"
          center={center}
          bounds={[bbOneBounds, bbTwoBounds]}
        />
      </MapContainer>
      {/*
       * Roofs only in bounding box 1&2 categorized
       */}
      <Container>
        <section className="section text-center">
          <P>
            Ak by mesto nemalo dostatočné financie na premenu 92 striech na
            green roofs, dokážeme vyselektovať ešte užší výber striech - na
            nasledujúcej mape sú v danej oblasti <Shine>21 budov</Shine>, ktoré
            patria len do <Shine>kategórie 1</Shine> alebo{" "}
            <Shine>kategórie 2</Shine>.
          </P>
        </section>
      </Container>
      <MapContainer>
        <Map
          geojsonData={[bb1Categ, bb2Categ]}
          zoom="15"
          center={center}
          bounds={[bbOneBounds, bbTwoBounds]}
        />
      </MapContainer>
      <Container>
        <section className="section text-center">
          <P>
            Po premene týchto striech na green-roofs sme schopný detekovať či sa{" "}
            <Shine> v daných oblastiach teplotná mapa zlepšila </Shine> čo môže
            pozitívne ovplyvniť život ľudí v Prahe.
          </P>
        </section>
      </Container>
    </div>
  )
}

export default App
