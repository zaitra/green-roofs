import React from "react"
import "./index.css"

function Navbar() {
  return (
    <nav className="navbar navbar-light fixed-top justify-content-between">
      <a
        href="https://zaitra.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-brand"
      >
        <img src="/svg/zaitra-logo.svg" alt="Company zaitra logo" />
      </a>
      <div className="list">
        <button className="btn my-2 my-sm-0" type="button">
          EN
        </button>
        <button className="btn my-2 my-sm-0" type="button">
          CZ
        </button>
      </div>
    </nav>
  )
}

export default Navbar
