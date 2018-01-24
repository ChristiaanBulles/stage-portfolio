import React, { Component } from 'react'
import './index.css'

export default class Template extends Component {
	render() {
		const { title, paragraph, image } = this.props
		return (
			<div className="grid">

				<div className="Button-back">
					<button>- TERUG</button>
				</div>

				<div className="Heading-names">
					<h4>{title}</h4>
				</div>

				<div className="Paragraph">
					<p>{paragraph}</p>
				</div>

				<div className="YearTime">
					2017/2018
				</div>

				<div className="Photograph"> 
					{image}
				</div>
				</div>	
		)
	}
}