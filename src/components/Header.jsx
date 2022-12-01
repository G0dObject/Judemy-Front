import { Link } from "react-router-dom";
import { store } from "..";
import Logo from "../assets/Logo.svg";
import { useEffect } from "react";
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBBtn,
	MDBNavbarLink,
} from "mdb-react-ui-kit";

function Guest() {
	return (
		<div className="header">
			<div className="container1">
				<Link to="/">
					<div className="header__logo">
						<img
							style={{ marginBottom: "10px" }}
							src={Logo}
							alt="Pizza logo"
						></img>
					</div>
				</Link>

				<div className="rightside">
					<div className="rightsidewrapper">
						<Link to="/login" className="login">
							<p>LogIn</p>
						</Link>

						<Link to="/register" type="button" className="singin">
							<p>SignUp</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
function User() {
	return (
		<div className="header">
			<div className="container1">
				<Link to="/">
					<div className="header__logo">
						<img
							style={{ marginBottom: "10px" }}
							src={Logo}
							alt="Pizza logo"
						></img>
					</div>
				</Link>
				<MDBDropdown>
					<MDBDropdownToggle
						className="btn-dark"
						style={{ borderRadius: "0px" }}
					>
						Category
					</MDBDropdownToggle>
					<MDBDropdownMenu
						dark
						style={{
							borderRadius: "unset",
						}}
					>
						<MDBDropdownItem link href="/course/development">
							Development
						</MDBDropdownItem>
						<MDBDropdownItem link href="/course/design">
							Design
						</MDBDropdownItem>
						<MDBDropdownItem link href="/course/Other">
							Other
						</MDBDropdownItem>
					</MDBDropdownMenu>
				</MDBDropdown>

				<div className="rightside">
					<div className="rightsidewrapper" style={{ marginLeft: "-121px" }}>
						<Link to={"/Home"} style={{ borderStyle: "none" }}>
							<MDBBtn
								onClickCapture={() => store.logout()}
								color="dark"
								style={{ borderRadius: "0px" }}
								className="logout"
							>
								<p style={{ color: "white" }}>LogOut</p>
							</MDBBtn>
						</Link>

						<Link
							to={"/Faq"}
							style={{ marginLeft: "10px", borderStyle: "none" }}
						>
							<MDBBtn
								color="dark"
								style={{ borderRadius: "0px" }}
								className="faq"
							>
								<p style={{ color: "white" }}>Faq</p>
							</MDBBtn>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Header() {
	if (store.isAuth) {
		return User();
	} else if (!store.isAuth) {
		return Guest();
	}
}

export default Header;
