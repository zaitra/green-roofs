import React from "react";
import { Trans, useTranslation } from "react-i18next";

// JSONs
import allRoofs from "./data/bb_all_roofs.json"
import bb1Roofs from "./data/bb1_roofs.json"
import bb2Roofs from "./data/bb2_roofs.json"
import bb1Categ from "./data/bb1_roofs_categorized.json"
import bb2Categ from "./data/bb2_roofs_categorized.json"

import { centerPrague, bbOneBounds, bbTwoBounds, heatBounds } from "./coordinates";
import logo from "../../svg/green-roofs-logo-leaf.svg";
// import components
import Map from "../../components/Map"
import Navbar from "../../components/Navbar";
import SectionTop from "../../components/SectionTop";
import SectionExplanation from "../../components/SectionExplanation";
import SectionMotivation from "../../components/SectionMotivation";
import Container from "../../components/Container";
import Shine from "../../components/Shine";
import H2 from "../../components/H2";
import P from "../../components/P";
import MapContainer from "../../components/MapContainer";
import Footer from "../../components/Footer";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      {/*
       * Nav
       */}
      <Navbar />
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
            <Trans i18nKey="sections.map-description.header">
                <Shine>.</Shine>
            </Trans>
          </H2>
          <img className="pb-5 pl-3" src={logo} alt="Green roofs logo leaf" />
          <P>
            <Trans i18nKey="sections.map-description.description1">
                <Shine>.</Shine>
            </Trans>
          </P>
          <P>
            <Trans i18nKey="sections.map-description.description2">
                <Shine>.</Shine>
            </Trans>
          </P>
        </section>
      </Container>
      {/*
       * All roofs
       */}
      <MapContainer>
        <Map geojsonData={[allRoofs]} zoom="15" center={centerPrague} />
      </MapContainer>
      {/*
       * Roofs only in bounding box 1&2 description + Map
       */}
      <Container>
        <section className="section text-center">
          <P>
            <Trans i18nKey="sections.map-description-bb.description">
              <Shine>.</Shine>
            </Trans>
          </P>
        </section>
      </Container>
      <MapContainer>
        <Map
          geojsonData={[bb1Roofs, bb2Roofs]}
          zoom="15"
          center={centerPrague}
          heatMapBounds={heatBounds}
          bounds={[bbOneBounds, bbTwoBounds]}
        />
      </MapContainer>
      {/*
       * Roofs only in bounding box 1&2 categorized Description + Map
       */}
      <Container>
        <section className="section text-center">
          <P>
          <Trans i18nKey="sections.map-description-bb-cat.description">
            <Shine>.</Shine>
          </Trans>
          </P>
        </section>
      </Container>
      <MapContainer>
        <Map geojsonData={[bb1Categ, bb2Categ]} zoom="15" center={centerPrague} />
      </MapContainer>
      {/*
       * Conclusion
       */}
      <Container>
        <section className="section text-center">
          <P>
            <Trans i18nKey="sections.conclusion">
              <Shine>.</Shine>
            </Trans>
          </P>
        </section>
      </Container>
      {/*
       * Footer
       */}
      <Footer />
    </div>
  );
};

export default App;
