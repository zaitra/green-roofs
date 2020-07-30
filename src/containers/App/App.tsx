import React from "react";
import { Trans, useTranslation } from "react-i18next";

// JSONs
import allRoofs from "./data/bb_all_roofs.json"
import bb1Roofs from "./data/bb1_roofs.json"
import bb2Roofs from "./data/bb2_roofs.json"
import bb1Categ from "./data/bb1_roofs_categorized.json"
import bb2Categ from "./data/bb2_roofs_categorized.json"

import { centerPrague, centerHlavni , bbOneBounds, bbTwoBounds, heatBounds } from "./coordinates";
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
import heatmapImg from "../../img/heatmap.jpg";
import heatmapImgAfter from "../../img/heatmap-after.jpg";
import greenSurface from "../../img/green-surface.png";
import normalSurface from "../../img/normal-surface.png";

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
          <P>
            <Trans i18nKey="sections.map-description.description3">
                <Shine>.</Shine>
            </Trans>
          </P>
        </section>
      </Container>
      {/*
       * All roofs
       */}
      <MapContainer>
        <Map geojsonData={[allRoofs]} zoom="15" center={centerPrague} popups={false} />
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
		  heatMapImg={heatmapImg}
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
        <Map geojsonData={[bb1Categ, bb2Categ]} bounds={[bbOneBounds, bbTwoBounds]}zoom="15" center={centerPrague} />
      </MapContainer>
	  <Container>
        <section className="section">
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <H2>
                        Interesting research data
                    </H2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <div style={{background: '#45B549', padding: '25px', color: 'white',}} className="my-3">
                        <blockquote cite="http://www.worldwildlife.org/who/index.html">        
                            „Considering the role of an extensive green roof in a heat transfer interface, it can be regarded as a passive temperature regulator. 
                            During the day, it can <strong>reduce the increase of the outdoor temperature by approximately 42%</strong> and the increase of the indoor temperature by 8%. 
                            During the night, it can maintain 17% of the temperature in the outdoor environment, stabilizing the temperature change. 
                            The cooling effectiveness in the outdoor environment was the highest at noontime, which corresponds to the highest surface warming period.“
                        </blockquote>
                        <div className="col-8 offset-2">
                            <span style={{ color: 'white', fontSize: '12px'}}>
                                <strong>
                                    <em>
                                        <a 
                                            href="https://reader.elsevier.com/reader/sd/pii/S0360132313001376?token=7B5B70BBEE568AA7FE3A84BD7257A1F0EC042C180AC7CB2F68956C5D2C78939DACE4C4CA17A80E4A72B8905C052EBED4"
                                            style={{color: 'white'}}
                                            target="_blank"
                                        >
                                            (Impact of climatic conditions on the thermal effectiveness of anextensive green roof,<br/> Bau-Show LinChin-Chung YuAi-Tsen SuYann-Jou Lin, 2013)
                                        </a>
                                    </em>
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <div style={{background: '#45B549', padding: '25px', color: 'white'}} className="my-3">
                        <blockquote cite="http://www.worldwildlife.org/who/index.html">        
                            „The first phase of the study performed during the June–September period of 2016 showed that the average surface temperatures of green roofs were 25.7–26.9 ◦C, whereas it was 32.6 ◦C“
                        </blockquote>
                        <div className="col-8 offset-2">
                            <span style={{ color: 'white', fontSize: '12px'}}>
                                <strong>
                                    <em>
                                        <a 
                                            href="https://www.researchgate.net/publication/332737035_Changes_in_Temperature_and_Moisture_Content_of_an_Extensive-Type_Green_Roof"
                                            style={{color: 'white'}}
                                            target="_blank"
                                        >
                                            (Changes in Temperature and Moisture Content of an Extensive-Type Green Roof, Anna Baryła, Tomasz Gnatowski, Agnieszka Karczmarczyk and Jan Szatyłowicz, 2019)
                                        </a>
                                    </em>
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center mt-4">
                <div className="col-md-6">
                    <img style={{maxWidth: '100%'}} src={greenSurface} alt=""/>
                    <div className="row text-center mt-3">
                        <div className="col-md-12">
                            <P>Thermal image of the green roof model.</P>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{maxWidth: '100%'}} src={normalSurface} alt=""/>
                    <div className="row text-center mt-3">
                        <div className="col-md-12">
                            <P>Thermal image of the conventional roof model.</P>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
	  <section className="container-fluid">
        <div className="row mb-4">
            <div className="col-12 text-center">
                <H2>
                    Our simulation
                </H2>
            </div>
        </div>
        <div className="row text-center my-4">
            <div className="col-md-12">
                <P>
                    <Trans i18nKey="sections.conclusion">
                        <Shine>.</Shine>
                    </Trans>
                </P>
            </div>
        </div>
		<div className="row section-difference mb-5">
			<div className="col-6">				
				<MapContainer>
					<Map 
						bounds={[bbOneBounds, bbTwoBounds]}
						zoom="15" 
						center={centerHlavni} 
						heatMapBounds={heatBounds}
						heatMapImg={heatmapImg}
						legend={false}
					/>
				</MapContainer>
                <div className="row text-center mt-3">
					<div className="col-md-12">
						<P>{t("sections.difference.before")}.</P>
					</div>
				</div>
			</div>
			<div className="col-6">
				<MapContainer>
					<Map 
						bounds={[bbOneBounds, bbTwoBounds]}
						zoom="15" 
						center={centerHlavni} 
						heatMapBounds={heatBounds}
						heatMapImg={heatmapImgAfter}
						legend={false}
					/>
				</MapContainer>
                <div className="row text-center mt-3">
					<div className="col-md-12">
						<P>{t("sections.difference.after")}.</P>
					</div>
				</div>
			</div>
		</div>
	  </section>
      {/*
       * Footer
       */}
      <Footer />
    </div>
  );
};

export default App;
