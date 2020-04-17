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
        <center>
        <br />
        <div className="rem4-spacer"/>
          <h2>2020 Event information coming soon.</h2>
        <div className="rem4-spacer"/>
        <br />
        <br />
        <div className="sub-page-main">
          <div className="subpage-header-title-special" style={{maxWidth: "800px"}}> Past Events </div>
          <div style={{maxWidth: "800px"}}>
            <div className="recipients-year-title past-event-title"> A Day at the Races (2019)</div>
            <div>
              An afternoon at Arlington International Racecourse filled with cocktails,
              dining, fundraising and more all to celebrate  the accomplishments of
              our recipients and our foundation. While enjoying the fun of the racetrack,
              guests were also able to buy raffle tickets, bid on silent auction items,
              and engage in the live auction.
            </div>
            <br/>
            <button
              className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m"
              data-text="VIEW PHOTOS"
              target="blank"
              onClick={() => window.location.href='https://www.flickr.com/photos/182816796@N07/sets/72157709791069076/'}>
              <span>VIEW PHOTOS</span>
            </button>
            <br/>
            <br/>
            <div className="recipients-year-title past-event-title"> Sollys Way Golf Outing (2017, 2015, 2013)</div>
            <div>
              A morning with a shotgun to start off a round of golf leading into
              an evening event which featured live music, silent and live auctions,
              and raffle items. Guests enjoyed the day through friendly competition,
              donations, and dancing all to raise money for our foundation.
            </div>
            <br/>
              2017
              <button
                className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m"
                data-text="VIEW PHOTOS"
                target="blank"
                onClick={() => window.location.href='https://www.facebook.com/pg/sollysway/photos/?tab=album&album_id=1826717690689756&ref=page_internal'}>
                <span>VIEW PHOTOS</span>
              </button>
              <br/>
                2015
                <button
                  className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m"
                  data-text="VIEW PHOTOS"
                  target="blank"
                  onClick={() => window.location.href='https://quintessentialbarrington.com/pdf/so15-community-lee.pdf'}>
                  <span>VIEW PHOTOS</span>
                </button>
                <br/>
                  2013
                  <button
                    className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m"
                    data-text="VIEW PHOTOS"
                    target="blank"
                    onClick={() => window.location.href='https://www.flickr.com/photos/bybobandanne/sets/72157634703106754/ '}>
                    <span>VIEW PHOTOS</span>
                  </button>
                  <br/>
              <br/>
            <div className="recipients-year-title past-event-title"> Shakou Cares (2016) </div>
            <div>
              Shakou in Barrington rewarded Solly's Way Foundation for our marketing
              and fundraising efforts by letting us host an event at their restaurant
              on Giving Tuesday. The event was a hit with e and a percentage of all
              that was bought in the evening was donated back to Solly's Way.
            </div>
            <br/>
              <button
                className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m"
                data-text="VIEW PHOTOS"
                target="blank"
                onClick={() => window.location.href='https://www.facebook.com/pg/sollysway/photos/?tab=album&album_id=1516853505009511&ref=page_internal'}>
                <span>VIEW PHOTOS</span>
              </button>
              <br/>
              <br/>
          </div>
        </div>
        </center>
        {/* <HorseRacingEventPage /> */}
        <Footer />
      </div>
    )
  }
}
