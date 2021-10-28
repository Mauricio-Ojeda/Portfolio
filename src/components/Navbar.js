import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
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
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Proyectos</button>
            <button onClick={() => scrollTo("#about")}>Acerca de mi</button>
            <button onClick={() => scrollTo("#contact")}>Contactame</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
