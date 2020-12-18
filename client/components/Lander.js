import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Parallax as Plax } from 'react-scroll-parallax'
import Footer from './Footer'
import SailAway from './SailAway'
import Campus from './Campus'
import VideoFrame from './VideoFrame'
import DonationContainer from './DonationContainer'
import Nav from './Nav'

export default class Lander extends Component {


  render() {
    return (
      <div>
        <Nav />
        <Campus />
        <VideoFrame />
        <DonationContainer />
            <div className="breakpoint-container">
              <div className="text-center-medium">
                Learn More About Our Scholarships
              </div>
              <img className="breakpoint-image-banner" src="/assets/graduation.jpg" />
              <div className="breakpoint-text">
                The Solly’s Way Foundation recognizes the character and perseverance
                many young people exemplify in the face of adversity. Our foundation
                presents a scholarship program for college-bound high school seniors
                who experienced the loss of a parent or guardian.
              </div>
              <img className="breakpoint-icons" src="/assets/gradhat.png" />
              <div
                className="breakpoint-button"
                onClick={() => window.location.href='/scholarships'}> learn more </div>
            <div className="breakpoint-container-2">
              <div className="text-center-medium">
                Donations are always appreciated
              </div>
              <img className="breakpoint-image-banner" src="/assets/photos/braclets.jpg" />
            <div className="breakpoint-text">
              Your donations have and continue to assist a young student make
              their way to college. On behalf of our foundation and the students
              that have been granted a scholarship, we would like to thank you
              for any contribution you make to the Solly's Way Foundation.
            </div>
            <img className="breakpoint-icons" src="/assets/donateicon.png" />
              <div className="donate-button innershadow noselect"
                onClick={() => window.location.href='/donations'}>
                click here to donate
              </div>
            </div>
            </div>
            <Footer />
      </div>
    )
  }
}
