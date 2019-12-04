import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

export default class SailAway extends Component {

  render() {
    return (
      <div>
      {
      window.innerWidth >= 800 ?
      <img style={{maxWidth: "100vw"}} src="/assets/landerimages/saswf.jpg" />
      :
      <img style={{maxWidth: "100vw"}} src="/assets/landerimages/saswf_mobile.jpg" />
      }
    </div>
    )
  }
}
