import React from "react"
import "./aboutView.css"

export class About extends React.Component {
	render () {
		return (
			<div className="section__content">
				<div className="about_wrapper">
					<div className="about_content">
						<h1 className="global__heading">Story</h1>
						<div className="text_section">
							<div className="subheading">
								We are a storytelling and strategy advisory. We believe that storytelling has the power to inspire, disrupt inertia, change narratives and create lasting impact.  We craft strategy and design purpose driven stories for companies, causes and communities that come to life through unique verbal and visual experiences.
							</div>
							<div className="subtext">
								“The enduring Power of a Story Well Told “is our credo /cornerstone.
							</div>
							<div className="subtext">
								We love stories. We love to tell stories. Stories that you love. Stories that we love. Stories that we will remember.
							</div>
							<div className="subtext">We are the storytellers. We are StrongKofee</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About
