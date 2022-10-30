import * as React from "react"
import { Link } from 'gatsby'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }
  const headingAccentStyles = {
    color: "#663399",
  }
  const paragraphStyles = {
    marginBottom: 48,
  }

const AboutPage = () => {
    return (
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Nathaniel {' '}
          <span style={headingAccentStyles}>Payne</span>
        </h1>
        <Link to={'/'}>Home</Link>
        <p style={paragraphStyles}>
          This, also, is just a test. Why are you still here and not at your desk?
        </p>
      </main>
    )
  };

export const Head = () => <title>About Nate</title>

export default AboutPage