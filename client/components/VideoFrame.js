import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';


export default class VideoFrame extends Component {


  render() {
    return (
      <div style={{display: "flex", justifyContent:"center", alignItems: "center", maxWidth: "100vw", backgroundImage: `url("/assets/landerimages/ivy.jpg")`}}>
        {
          window.innerWidth <= 760 ?
          <div />
            :
            <div className="video-frame" style={{margin:"3rem"}}>
              <iframe width="760" height="428.6" src="https://www.youtube.com/embed/O0c7ndj-Ltk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        }
      </div>
    )
  }
}
