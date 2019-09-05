import React from "react"
import PropTypes from "prop-types"
import "./PageLayout.css"
import "../css/reset.css"
import "../css/loader.css"
import "../css/main.css"
import MediaQuery from "react-responsive"
// import SidebarMobile from "../components/SidebarMobile"
import NavBar from "../components/TopNavigationBar"
import "animate.css/animate.min.css"
import { Provider } from "react-redux"
import "../components/slick.css"
import "../components/slick-theme.css"
import Link from "gatsby-link"
// import { BeatLoader } from "react-spinners"
// import $ from "jquery"
import createStore from "../state/createStore"
const store = createStore()
const BeLogo = "https://bawamasalacompany.com/assets/images/BE(LOGO)footer200x200.png"
const LOGO = "http://www.strongkofee.com/img/front_img/logo.png"

export class PageLayout extends React.Component {
	constructor (args) {
		super(args)
		this.state = {
			isShowSidebar: false,
			isAboutActive: false,
			activeRouteName: "",
			isLoginModal: false,
			isModalOpen : false,
			isLoading: true
		}
	}
	render () {
		const { children, location } = this.props
		const { isShowSidebar, activeRouteName, isModalOpen, isLoading } = this.state
		const appChildren = process.env.NODE_ENV === "production" ? children({ location }) : children()
		let route = location.pathname.split("/")[1]
		let activeRoute = location.hash
		return (
			<Provider store={store}>
				<div className="body__overflow__none">
					<div className="page-layout__viewport">
						<div className="page-layout__viewport__header" style={route === "home" || route === "" ? { background: "transparent", height: "auto", color: "#000" } : { color: "#000" }}>
							<div className="menu__bar">
								<MediaQuery query="(min-width: 1224px)">
									<NavBar getActiveRoute={this.getActiveRoute} route={route} activeRouteName={activeRouteName} />
								</MediaQuery>
								<MediaQuery query="(max-width: 1223px)">
									<span>
										<span className="logo">
											<Link to="/"><img src={LOGO} alt="Alpex Logo" className="mobile__logo" /></Link>
										</span>
										<span className="hmb pull-right" onClick={this.toggleSidebar}>
											<i className="fa fa-bars" />
										</span>
										{/*<SidebarMobile show={isShowSidebar} onHide={this.toggleSidebar} activePathname={activeRoute} />*/}
									</span>
								</MediaQuery>
							</div>
						</div>
						<div className="page-layout__viewport__middle_content">
							{appChildren}
						</div>
						<div className="page-layout__viewport__footer_content">
							<div className="row">
								<div className="col-md-6 col-sm-6">
									<div className="left__content">
										© Strongkofee 2019. All Rights Reserved
									</div>
								</div>
								<div className="col-md-6 col-sm-6">
									<div className="right__content">
									Powered By<img src={BeLogo} style={{ width: "30px", marginLeft: "10px" }} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Provider>
		)
	}
}

PageLayout.propTypes = {
	children: PropTypes.func,
	location: PropTypes.object
}

export default PageLayout
