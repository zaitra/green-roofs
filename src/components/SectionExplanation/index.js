import React from "react"
import H2 from "../H2"
import P from "../P"
import Shine from "../Shine"
import Container from "../Container"

function SectionExplanation() {
  return (
    <Container className="section text-center">
      <H2>
        What is a <Shine>Green roof?</Shine>
      </H2>
      <P className="mt-5">
        A <Shine>green roof</Shine> or living roof is a roof of a building that
        is partially or completely covered with vegetation and a growing medium,
        planted over a waterproofing membrane. Green roofs serve several
        purposes for a building, such as{" "}
        <Shine>absorbing rainwater, providing insulation</Shine>, creating a
        habitat for wildlife, increasing benevolence and
        <Shine>decreasing stress</Shine> of the people around the roof by
        providing a more aesthetically pleasing landscape, and{" "}
        <Shine>helping to lower urban air temperatures</Shine> and mitigate the
        heat island effect. <br />
        <Shine>- wikipedia</Shine>
      </P>
    </Container>
  )
}

export default SectionExplanation
