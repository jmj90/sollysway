import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

export default class HorseRacingEventPage extends Component {

  render() {
    return (
      <Parallax
        bgImage={"/assets/arlington_banner2.png"}
        strength={300}
        blur={8}>
        <div className="full-width-center">
          <img id="dayrace-2" src="/assets/dayraces_title.png" />
        </div>
      <div id="event-outing">
        <div className="rem-spacer" />
        <div className="rem-spacer" />
        <div className='ticketstub-container'>
          <img id="ticketstub" src="/assets/ticketstub2.png" />
          <button className="button button--rayen-3 button--border-thin button--text-thick button--text-upper button--size-l" data-text="PURCHASE TICKETS" onClick={() => window.location.href='https://www.eventbrite.com/e/sollys-way-foundation-day-at-the-races-tickets-60643816287'}><span>PURCHASE TICKETS</span></button>
        </div>
        <div className='ticket-info-container'>
          <div className="rem-spacer" />
          <div className="page-text">
            This year’s highly anticipated event will be held in the prestigious
            Governor’s Room at Arlington International Racecourse on Saturday,
            July 20th, 2019, beginning at 12:30 p.m. Solly’s Way “Day at the Races”
            will consist of an afternoon of cocktails and dining to celebrate the
            accomplishments of our scholarship recipients, and of our organization
            over the past 6 years. While enjoying the racetrack, guests will have
            the opportunity to participate in a raffle to win a dazzling necklace,
            which was generously donated by Long & Co. Jewelers in Barrington. At 1:00 p.m.,
            the open bar will begin and a selection of the chef’s favorite dishes will be
            served for lunch. The afternoon will culminate with our live auction
            presentation featuring a weekend in Park City, Utah, and a live,
            improvisational <i>Rat Pack</i> painting by Gino Savarino.
          </div>
          <div className="rem-spacer" />
          <button
            className="button button--rayen-black button--border-thin button--text-thick button--text-upper button--size-s"
            data-text="additional Event Information"
            onClick={() => window.location.href='/dayattheraceseventinformation'}>
            <span>additional Event Information</span>
          </button>
          <br/>
          * Please Note
          <br/>
          <b>Dress code:</b>  Persons in jeans, t-shirts, athletic shoes, or abbreviated attire will not be admitted to the Governor’s Room. We recommend following a Country Club dress code.

        </div>
      </div>
      </Parallax>
    )
  }
}
