import React from "react"
import H2 from "../H2"
import P from "../P"
import Shine from "../Shine"
import Container from "../Container"
import "./index.css"

function SectionMotivation() {
  return (
    <section className="section motivation text-center">
      <Container>
        <H2 className="mt-4">
          <Shine>Motivation</Shine>
        </H2>
        <P className="my-5 white">
          Náš proof of concept o zelených strechách v Prahe sme založili na
          základe dát a analýzy, ktorú spracoval{" "}
          <Shine>Operátor ICT Data Platform.</Shine> <br /> Pre viac info
          kliknite <Shine>tu.</Shine>
        </P>
        <P className="mb-5 white">
          In general, the statistic data shows that under ideal conditions, up
          to <Shine>1,659 ha of green roofs</Shine> could be installed in
          Prague, Czech Republic.
        </P>
      </Container>
    </section>
  )
}

export default SectionMotivation
