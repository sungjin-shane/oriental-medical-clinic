import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Mainbody from './Mainbody'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Header}/>
          <Route exact path='/' component={Mainbody} />
          {/* <Switch>
          </Switch> */}
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
