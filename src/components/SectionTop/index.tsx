import React from "react"
import PropTypes from "prop-types"
import logo from "../../svg/green-roofs-logo.svg"
import { useTranslation } from "react-i18next";

const SectionTop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="text-vertical-center">
        <img src={logo} className="logo" alt="Green roofs" />
        <h2>{t('sections.top.header')}</h2>
        <p>{t('sections.top.description')}</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="arrows">
          <span /> <span />
        </a>
      </div>
    </div>
  )
}

SectionTop.propTypes = {
  // eslint-disable-next-line react/require-default-props
  t: PropTypes.func
}

export default SectionTop
