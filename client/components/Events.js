import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Parallax, Background } from 'react-parallax';
import HorseRacingEventPage from './HorseRacingEventPage'


export default class Events extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
        <HorseRacingEventPage />
        <Footer />
      </div>
    )
  }
}
