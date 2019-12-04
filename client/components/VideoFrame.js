import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';


export default class VideoFrame extends Component {


  render() {
    return (
      <div style={{display: "flex", justifyContent:"center", alignItems: "center", maxWidth: "100vw", backgroundImage: `url("/assets/landerimages/ivy.jpg")`}}>
        {
          window.innerWidth <= 800 ?
          <div className="video-frame" style={{margin:"3rem"}}>
            <iframe src="https://player.vimeo.com/video/373448456" width="500" height="220" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            :
            <div className="video-frame" style={{margin:"3rem"}}>
              <iframe src="https://player.vimeo.com/video/373448456" width="840" height="560" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        }
      </div>
    )
  }
}
