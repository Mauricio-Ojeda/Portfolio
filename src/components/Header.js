import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"


const Header = () => {
  return (
    <div className="section " id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hola, Soy {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
            <div className="container">
              <Fade bottom>
                <p>{data.headerParagraph}</p>
              </Fade>
              <Fade bottom>
                <a
                  href={`mailto:${
                    data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
                  }`}
                  className="primary-btn"
                >
                  Contacta Conmigo
                </a>
              </Fade>
            </div>
        </div>
      </div>      
    </div>
  )
}

export default Header
