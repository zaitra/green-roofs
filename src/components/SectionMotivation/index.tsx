import React from "react"
import H2 from "../H2"
import P from "../P"
import Shine from "../Shine"
import Container from "../Container"
import { useTranslation, Trans } from "react-i18next"

const SectionMotivation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section motivation text-center">
      <Container>
        <H2 className="mt-4">
          <Shine>{t("sections.motivation.header")}</Shine>
        </H2>
        <P className="my-5 white">
          <Trans i18nKey="sections.motivation.par1">
            <Shine>.</Shine>
            <a href="https://golemio.cz/cs/node/1443" target="blank" className="shine"></a>
          </Trans>
        </P>
        <P className="mb-5 white">
          <Trans i18nKey="sections.motivation.par2">
              <Shine>.</Shine>
          </Trans>
        </P>
      </Container>
    </section>
  )
}

export default SectionMotivation
