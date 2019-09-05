import React from "react"
import PropTypes from "prop-types"
import "./navbar.css"
import Routes from "../Routes"
import Link from "gatsby-link"
import { connect } from "react-redux"
// import whyAlpexContent from "../../constant/whyAlpexContent.js"
const Logo = "http://www.strongkofee.com/img/front_img/logo.png"

const RouteComponent = ({ route, activeNav, activeSubTab, handleActiveNav, handleActiveCategory }) => {
	return (route.dropdown
		? <span key={route.id} className="dropdown">
			<Link onClick={() => handleActiveNav(route.identifier)} to={route.onHomepage ? `/#${route.identifier}` : `/${route.identifier}`} className={`${route.identifier === activeNav.toLowerCase() ? "active" : ""}`}>{route.title}</Link>
			<div className="dropdown-content">
				{route.dropdown.map((item) => {
					return <Link key={item.id}
						onClick={() => !route.onHomepage ? handleActiveCategory(null) : handleActiveCategory(item.title, route.identifier)}
						to={route.onHomepage ? `/#${route.identifier}` : `/${route.identifier}#${item.identifier}`} className={route.onHomepage ? `${item.title === activeSubTab ? "active" : ""}` : ""}>
						{item.title}
					</Link>
				})}
			</div>
		</span>
		: <span key={route.id}><Link onClick={() => route.onHomepage ? handleActiveNav(route.identifier) : handleActiveCategory(null)} to={route.onHomepage ? `/#${route.identifier}` : `/${route.identifier}`} className={`${route.identifier === activeNav.toLowerCase() ? "active" : ""}`}>{route.title}</Link></span>)
}

RouteComponent.propTypes = {
	route: PropTypes.object,
	activeNav: PropTypes.string,
	activeSubTab: PropTypes.string,
	handleActiveNav: PropTypes.func,
	handleActiveCategory: PropTypes.func
}

export class NavBar extends React.Component {
	constructor (args) {
		super(args)
		this.state = {
			// activeNav: "home",
			visible: true,
			prevScrollpos: window.pageYOffset,
		}
		this.diffNavBar = ["connect", "about", "projects"]
	}
	componentWillUnmount () {
		window.removeEventListener("scroll", this.handleScroll, true)
	}
	componentDidMount = () => {
		window.addEventListener("scroll", this.handleScroll, true)
		this.setState({
			activeNav: this.props.route
		})
	}
	handleActiveNav = (identifier) => {
		const { getActiveRoute } = this.props
		getActiveRoute(identifier)
	}
	handleScroll = (event) => {
		// // console.log("Scroolsadsadsd", event)
		const { prevScrollpos } = this.state
		let currentScrollPos = window.scrollY
		// let itemTranslate = Math.min(0, currentScrollPos / 3)
		// // console.log("prevScrollpos", window.scrollY)
		const visible = currentScrollPos === 0 && (currentScrollPos - 1 < (prevScrollpos))
		this.setState({
			prevScrollpos: currentScrollPos,
			visible
		})
	}
	handleActiveCategory = (activeSubTab, identifier) => {
		const { handleSubTab } = this.props
		handleSubTab(activeSubTab, identifier)
		// console.log("activeSubTab", activeSubTab, identifier)
		this.setState({
			activeSubTab
		})
	}
	render () {
		const { route } = this.props
		const { visible, activeSubTab } = this.state
		let activeNav = route
		// // console.log("location", activeNav)
		let isDiffNavBar = (this.diffNavBar.indexOf(route) >= 0)
		return (<div id="navBar" className={`nav__bar ${!visible ? "ease" : ""} ${isDiffNavBar ? "__diff__nav__bar" : ""}`}>
			<div id="left__to__logo" className="left__to__logo">
				{Routes.slice(0, 3).map((route) => {
					return <RouteComponent route={route}
						handleActiveCategory={this.handleActiveCategory}
						handleActiveNav={this.handleActiveNav}
						activeNav={activeNav}
						activeSubTab={activeSubTab}
					/>
				})}
			</div>
			<div className="logo"><div className=""><Link to={`/#top`} onClick={() => this.handleActiveNav(route.identifier)} className=""><img src={Logo} alt="alpex logo" /></Link></div></div>
			<div className="right__to__logo">
				{Routes.slice(3).map((route) => {
					return <RouteComponent route={route}
						handleActiveCategory={this.handleActiveCategory}
						handleActiveNav={this.handleActiveNav}
						activeNav={activeNav}
						activeSubTab={activeSubTab}
					/>
				})}
			</div>
		</div>
		)
	}
}

NavBar.propTypes = {
	getActiveRoute: PropTypes.func,
	handleSubTab: PropTypes.func,
	route: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubTab: (activeSubTab, identifier) => dispatch({ type: `CATEGORY_CLICKED`, info: { activeSubTab: activeSubTab, identifier:identifier } }),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)
// export default NavBar
