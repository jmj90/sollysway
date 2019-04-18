import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

export default class HorseRacing extends Component {

  render() {
    return (
      <Parallax
        bgImage={"/assets/arlington.jpg"}
        strength={900}
        blur={8}>
      <div id="event-outing">
        <div className="text-center-medium">
          <center>
            <br />
            <br />
            <br />
              <div className="cursive">Day at the Races!</div>
              <div className="bannerText">
                SATURDAY JULY 20, 2019
                <br />
                <br />
              </div>
              <div className="red-divider" />
              <div className="bannerText-2"> ARLINGTON INTERNATIONAL RACECOURSE </div>
              <div className="red-divider" />
              <div className="bannerText-2"> GOVERNOR'S ROOM </div>
              <div className="small-white-text"> Please join us for a fun day at Arlington Race Course this summer for
                the Solly's Way Foundation "Day at the Races" fundraiser!
              </div>
              <br />
              <button className="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="VIEW EVENT DETAILS"><span>VIEW EVENT DETAILS</span></button>
              <br/>
          </center>
        </div>
      </div>
      </Parallax>
    )
  }
}
