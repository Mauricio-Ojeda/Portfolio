import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import '../styles/responsive-menu.scss'

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
               Mauricio Ojeda
          </div>
          <div className="links-wrapper topnav" id="myTopnav">
            <button onClick={() => scrollTo("#work")}>Proyectos</button>
            <button onClick={() => scrollTo("#about")}>Acerca de mi</button>
            <button onClick={() => scrollTo("#contact")}>Contactame</button>
            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
