import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Web Liaison</title>
        <meta property="og:title" content="Regional Web Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
