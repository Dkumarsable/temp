import React from "react"
// import "../css/homepage.css"
// import Wrapper from "./wrapper"
import PropTypes from "prop-types"
import About from "../components/about"
import Connect from "../components/connect"

export class HomeView extends React.Component {
	reveal = (title, t) => {
		// console.log("title", title, t)
	}
	render () {
		// const { location } = this.props
		return (
			<div className="global__wrapper">
				<div className="home_wrapper">
					<div className="tab_section">
						<div id="about" className="content__wrapper">
							<About />
						</div>
						<div id="connect" className="content__wrapper">
							<Connect />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

HomeView.propTypes = {
	location: PropTypes.object
}

export default HomeView
