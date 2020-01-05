import React from "react"
import P from "../P"
import logo from "../../svg/zaitra-logo.svg"

const Footer: React.FC = () => {
  return (
    <footer>
      <P className="white">
        Copyright ©
        <img src={logo} alt="zaitra logo" />
        <a href="https://zaitra.io/" target="blank">
          Zaitra s.r.o
        </a>
        <span> 2019</span>
      </P>
    </footer>
  )
}

export default Footer
