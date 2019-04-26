import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import Header from './Header'
import Footer from './Footer';

export default class HorseRacingInformation extends Component {

  render() {
    return (
      <div>
        <Header />

      <Parallax
        bgImage={"/assets/arlington_banner2.png"}
        strength={300}
        blur={8}>
        <div className="centered">
          <br /><br />
          <img className="map" src="/assets/2019_Directions_Dress_Code_1.png" />
          <br /><br />
          <img className="map" src="/assets/2019_Directions_Dress_Code_2.png" />
          <br /><br />
            <button
              className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-s"
              data-text="BACK TO EVENTS"
              onClick={() => window.location.href='/events'}>
              <span>BACK TO EVENTS</span>
            </button>
            <br /><br />
        </div>
      </Parallax>
      <Footer />
      </div>
    )
  }
}
