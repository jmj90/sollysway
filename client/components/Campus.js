import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

export default class Campus extends Component {

  render() {
    return (
      <div>
      {
      window.innerWidth >= 800 ?
      <img style={{maxWidth: "100vw"}} src="/assets/landerimages/campus.png" />
      :
      <img style={{maxWidth: "100vw"}} src="/assets/landerimages/campus.png" />
      }
    </div>
    )
  }
}
