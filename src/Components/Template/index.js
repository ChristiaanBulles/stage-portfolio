import React, { Component } from 'react'
import './index.css'

export default class Template extends Component {
	render() {
		const { title, paragraph, image } = this.props
		return (
			<div className="Template">
				
				<div className="Heading-names">
					<h3>{title}</h3>
				</div>

				<div className="Paragraph">
					<p>{paragraph}</p>
				</div>

				<div className="YearTime">
					<h5>2017/2018</h5>
				</div>

				<div className="Photograph"> 
					<img src={image} />
				</div>
				</div>	
		)
	}
}