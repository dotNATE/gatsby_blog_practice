import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'

const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        src="../images/image5.jpeg"
      />
      <p style={paragraphStyles}>
        This is just a test. Go back to your desk.
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
