import React from "react"
import "./index.css"

function SectionTop() {
  return (
    <div className="header">
      <div className="text-vertical-center">
        <img
          src="/svg/green-roofs-logo.svg"
          className="logo"
          alt="Green roofs"
        />
        <h2>Prague</h2>
        <p>(Proof of concept)</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="arrows">
          <span /> <span />
        </a>
      </div>
    </div>
  )
}

export default SectionTop
