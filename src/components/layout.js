import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { title } from '../components/titleTest.module.css'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
      <div>
        <header style={headingStyles}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main style={pageStyles}>
          <h1 className={title}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  
export default Layout