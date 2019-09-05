import React from "react"
import "./connectView.css"
import { Button } from "react-bootstrap"
import Select from "react-select"
// import swal from "sweetalert2"
// import axios from "axios"
import "animate.css/animate.min.css"

export class CONNECT extends React.Component {
	constructor (args) {
		super(args)
		this.state = {
		}
	}
	render () {
		// let fileName = "No File Choosen"
		return (
			<div className="section__content">
				<div className="connect_wrapper">
					<div className="connect_content">
						<h1 className="global__heading">CONNECT</h1>
						<div className="career__info">
							<div className="row">
								<div className="col-md-12 col-lg-6">
									<div className="left_section">
										<form >
											<div className="col-sm-6">
												<div className="form__info">
													<div className="title">Name *</div>
													<input type="text" name="name" className="form-control" id="" />
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form__info">
													<div className="title">Email *</div>
													<input type="text" name="email" className="form-control" id="" />
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form__info">
													<div className="title">Message *</div>
													<textarea name="Message" className="form-control" id="" cols="30" rows="2"></textarea>
												</div>
											</div>
											<div className="col-sm-12">
												<div style={{ marginTop: "20px" }} className="pull-right"><Button className="btn__sbt">Submit</Button></div>
											</div>
										</form>
									</div>
								</div>
								<div className="col-md-12 col-lg-6">
									<div className="right_secction">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CONNECT
