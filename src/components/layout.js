/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import NavbarMenu from "./NavbarMenu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <main>{children}</main>
    </>
  )
}
export default Layout
