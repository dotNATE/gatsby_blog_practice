import * as React from "react"

import Layout from '../components/layout'
import Seo from '../components/seo'

const paragraphStyles = {
  marginBottom: 48,
}

const AboutPage = () => {
  return (
    <Layout pageTitle='Nathaniel Payne'>
      <p style={paragraphStyles}>
        This, also, is just a test. Why are you still here and not at your desk?
      </p>
    </Layout>
  )
};

export const Head = () => <Seo title="About Nate" />

export default AboutPage