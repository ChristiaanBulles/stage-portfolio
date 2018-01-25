import React, { Component } from 'react'
import './index.css'

export default class Template extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slide: 0
		}
	}

	prevSlide() {
		if (this.state.slide > 0) {
			this.setState({
				slide: this.state.slide - 1
			})
		}
	}

	nextSlide() {
		if (this.state.slide < (this.props.image.length - 1)) {
			this.setState({
				slide: this.state.slide + 1
			})
		}
	}

	render() {
		const { title, paragraph, image } = this.props
		return (
			<div className="Template">
				
				<div className="Heading-names">
					<h3>{title}</h3>
				</div>

				<div className="Paragraph">
					<p>{paragraph[this.state.slide]}</p>
				</div>

				<div className="YearTime">
					<h5>2017/2018</h5>
				</div>

				<div className="Photograph">
					<div className="slides">
					{
						image[this.state.slide] &&
						<div 
							className ="slide"
							style={{
								backgroundImage: `url(${image[this.state.slide]})`
							}}>

						</div>
					}
					</div>

					<div 
						className={`prev-slide slide-arrow ${this.state.slide === 0 ? 'deactive' : ''}`}
						onClick={() => this.prevSlide()}>prev</div>

					<div 
						className={`next-slide slide-arrow ${this.state.slide === (this.props.image.length - 1) ? 'deactive' : ''}`}
						onClick={() => this.nextSlide()}>next</div>

				</div>
				</div>	
		)
	}
}