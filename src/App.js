import React, { Component } from 'react'
import Mainpage from './Components/Mainpage'
import Preloader from './Components/Preloader'
import Template from './Components/Template'
import Data from './Data'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      {Data.projects.map((project, i) => (
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
