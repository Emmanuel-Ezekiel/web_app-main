import React from 'react'
import Logo from '../img/tiptopp_logo.svg'
import './Newhome.css'
function Newhome () {
  return (
    <div className="container">
      <section>
        <div className="shape">
          <div className="star-1 stars"></div>
          <div className="star-2 stars"></div>
          <div className="star-3 stars"></div>
          <div className="star-4 stars"></div>
          <div className="star-5 stars"></div>
          <div className="star-6 stars"></div>
          <div className="star-7 stars"></div>
          <div className="star-8 stars"></div>
          <div className="star-9 stars"></div>
          <div className="star-10 stars"></div>
        </div>
        <article className="home-info">
            <object type="image/svg+xml" data={Logo} className="logo" />
            <h1 id="para">
            Professionals <br />
            at your fingertips
          </h1>
        </article>
      </section>
    </div>
  )
}

export default Newhome
