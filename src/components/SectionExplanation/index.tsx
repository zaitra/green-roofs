import React from "react"
import H2 from "../H2"
import P from "../P"
import Shine from "../Shine"
import Container from "../Container"
import { Trans, useTranslation } from "react-i18next"

const SectionExplanation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section text-center">
      <Container>
        <H2>
          <Trans i18nKey="sections.explanation.header">
            <Shine>.</Shine>
          </Trans>
        </H2>
        <P className="mt-5">
          <Trans i18nKey="sections.explanation.description">
            {/* each <0></0> tag from translation replace with shine component */}
            {/* See for details: https://react.i18next.com/latest/trans-component */}
            <Shine>.</Shine>
          </Trans>
        </P>
      </Container>
    </section>
  )
}

export default SectionExplanation
