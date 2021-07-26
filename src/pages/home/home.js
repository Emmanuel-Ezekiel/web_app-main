import React from 'react'

import './home.css'
import explore from '../../img/tiptopp-explore.svg'
import provider from '../../img/tiptopp-provider.svg'
import Logo from '../../img/tiptopp_logo.svg'
import { COPY } from '../../static/copy'

export default function Home () {
  return (
    <div className="container">
      <section>
        <div className="shape"></div>
      </section>
      <section id="wrapper">
        <section className="content">
          <article id="header">
          <object type="image/svg+xml" data={Logo} className="logo" />
            <p className="bold">{COPY.mission_statement}</p>
          </article>
          <article id="description">
            <p>{COPY.vision_statement}</p>
          </article>
          <object type="image/svg+xml" data={provider} className="provider-page" />
          <article className="download bold">
            <p>Download TipTopp</p>
          </article>
          <object type="image/svg+xml" data={explore} className="explore-page" />
          <article id="value">
            <p className="values">Core Values</p>
              <ul className="text">
                <li id="innovation">
                  Innovation: Significant positive change and to endows resources with a new capacity to create wealth.</li>
                <li id="respect">
                Respect: We value our team that includes our partners, staff, customers and treat them with dignity and professionalism.
                </li>
                <li id="integrity">
                Integrity: We build trust through our actions with every relationships we encounter.
                </li>
                <li id="teamwork">
                Teamwork: We achieve more when we collaborate, cultivate and all work together.
                </li>
              </ul>
          </article>
        </section>
      </section>
    </div>
  )
}
