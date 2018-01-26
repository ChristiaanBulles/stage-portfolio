import React, { Component } from 'react'
import Mainpage from './Components/Mainpage'
import Preloader from './Components/Preloader'
import Template from './Components/Template'
import Data from './Data'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
      {!this.state.loaded &&
        <Preloader />}
      
      {this.state.loaded &&
        <Mainpage />}
      
      {this.state.loaded &&
        Data.projects.map((project, i) => (
      	<Template
      		key={`project-${i}`}
      		title={project.title}
      		paragraph={project.paragraph}
      		image={project.image} />
      ))}
      
      </div>
    )
  }
}

export default App
