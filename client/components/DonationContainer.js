import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

export default class DonationContainer extends Component {

  render() {
    return (
      <Parallax
        bgImage={"/assets/scholarshipfund.png"}
        strength={10}>
        <div className='donation-container'>
          <div className='sub-container-left' />
          <div className='sub-container-right'>
            <div className="large-text split-right">
              <div className="subtitle-text-right">
                DONATIONS
              </div>
                If you can't make one of our fundraisers, that's ok! Donations are always appreciated.
                <br/><br/>
                  Donations are being accepted online via PayPal,
                  <br/>
                  or physically by mail.
                  <br/>
                  <br/>
                  Thank you for your support!
                  <br/>
                  <br/>
                  <button className="button button--rayen-2 button--border-thin button--text-thick button--text-upper button--size-m" data-text="DONATE" onClick={() => window.location.href='/donations'}><span>DONATE</span></button>
            </div>
          </div>

          </div>
        </Parallax>
    )
  }
}
