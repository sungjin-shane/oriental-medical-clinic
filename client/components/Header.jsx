import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: false
    }
  }

  componentDidMount () {

  }

  render () {
    // let isLogined = this.state.login
    // let loginEmail = this.state.loginEmail

    return (
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1><a href="#body" className="scrollto">Shane<span>Park</span></a></h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#call-to-action">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

    )
  }
}

export default Header
