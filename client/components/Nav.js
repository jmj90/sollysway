import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Parallax as Plax } from 'react-scroll-parallax'

export default class Nav extends Component {

    constructor(props){
      super(props) ;
    }

    componentDidMount() {
      //run our location function once our component has mounted with the data
      let item = document.getElementById('hamburger-menu')
      let menu = document.getElementById('menu')

      if(window.innerWidth >= 600 ) {
          window.addEventListener('scroll', function(e) {
          let yPosition = window.scrollY;
          if (yPosition >= 145){
            document.getElementById('hamburger-menu').classList.add('active')
          } else {
            document.getElementById('hamburger-menu').classList.remove('active')
            item.classList.remove('is-active')
            menu.classList.remove('isactive')
          }
        })
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll')
    }

    hamburgerClick(e) {
      let item = document.getElementById('hamburger-menu')
      let menu = document.getElementById('menu')
      let list = item.classList
      list.toggle('is-active')
      menu.classList.toggle('isactive')
    }

    navClick(evt, data) {
      let path = evt.target.innerHTML.split(' ')
      path = path[0].toLowerCase()
      window.location.href = `/${path}`
    }

  render(){
    return (
      <div>
        <div id="header-lander-container">
          <img id="header-logo" src="/assets/sollysway5.png"/>
          <div id="header-nav">
            <div className="header-nav-item noselect" onClick={this.navClick} value="about">About</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">Events</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="donations">Donations</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="photos">Photos</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="contact">Contact</div>
          </div>
        </div>

        <div id="logo-menu-container">
          {
            window.innerWidth >= 800 ?
            <div>
              <div id="menu">
                <div className="menu-item noselect" onClick={this.navClick} value="about">About</div>
                <div className="menu-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
                <div className="menu-item noselect" onClick={this.navClick} value="events">Events</div>
                <div className="menu-item noselect" onClick={this.navClick} value="donations">Donations</div>
                <div className="menu-item noselect" onClick={this.navClick} value="photos">Photos</div>
                <div className="menu-item noselect" onClick={this.navClick} value="contact">Contact</div>
              </div>
              <div
                id="hamburger-menu"
                className="hamburger hamburger--collapse js-hamburger"
                onClick={()=> this.hamburgerClick()}>
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
            :
            <div/>
        }
        </div>
      </div>
    )
  }
}
