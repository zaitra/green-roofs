import React from "react"
import "./index.css"
import P from "../P"
import logo from "../../svg/zaitra-logo.svg"

function Footer() {
  return (
    <footer>
      <P className="white">
        Copyright ©
        <img src={logo} alt="zaitra logo" />
        <a href="https://zaitra.io/" _target="blank">
          Zaitra s.r.o
        </a>
        <span> 2019</span>
      </P>
    </footer>
  )
}

export default Footer
