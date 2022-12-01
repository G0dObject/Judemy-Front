import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useRef, useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import {
	MDBContainer,
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
	MDBBtn,
	MDBInput,
	MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function LoginTest({ isLogin }) {
	const [justifyActive, setJustifyActive] = useState(isLogin ? "tab1" : "tab2");

	const handleJustifyClick = (value) => {
		if (value === justifyActive) {
			return;
		}
		setJustifyActive(value);
	};
	const email = useRef();
	const username = useRef();
	const password = useRef();

	const lemail = useRef();
	const lpassword = useRef();

	const store = useContext(Context);

	return (
		<MDBContainer className="p-3 my-5 d-flex flex-column w-50 ">
			<MDBTabs
				pills
				justify
				className="mb-5 d-flex flex-row justify-content-between "
			>
				<MDBTabsItem>
					<MDBTabsLink
						className="btn-dark text-black"
						onClick={() => handleJustifyClick("tab1")}
						active={justifyActive === "tab1"}
					>
						Login
					</MDBTabsLink>
				</MDBTabsItem>
				<MDBTabsItem>
					<MDBTabsLink
						className="btn-dark text-black"
						onClick={() => handleJustifyClick("tab2")}
						active={justifyActive === "tab2"}
					>
						Register
					</MDBTabsLink>
				</MDBTabsItem>
			</MDBTabs>

			<MDBTabsContent>
				<MDBTabsPane show={justifyActive === "tab1"}>
					<MDBInput
						wrapperClass="mb-4"
						label="Email address"
						id="form1"
						required
						maxLength="80"
						type="email"
						inputRef={lemail}
					/>
					<MDBInput
						wrapperClass="mb-4 "
						label="Password"
						id="form2"
						required
						type="password"
						inputRef={lpassword}
					/>

					<div className="d-flex justify-content-between mx-4 mb-4">
						<MDBCheckbox
							name="flexCheck"
							value=""
							id="flexCheckDefault"
							label="Remember me"
						/>
						<a href="!#">Forgot password?</a>
					</div>

					<MDBBtn
						className="mb-4 w-100 bg-dark "
						onClick={() => {
							store.login(lemail.current.value, lpassword.current.value);
						}}
					>
						Sign in
					</MDBBtn>
					<p className="text-center">
						Not a member? <Link to="/register">Register</Link>
					</p>
				</MDBTabsPane>

				<MDBTabsPane show={justifyActive === "tab2"}>
					<MDBInput
						inputRef={username}
						wrapperClass="mb-4"
						label="Username"
						required
						id="form1"
						type="text"
					/>
					<MDBInput
						wrapperClass="mb-4"
						label="Email"
						inputRef={email}
						id="form1"
						type="email"
					/>
					<MDBInput
						inputRef={password}
						wrapperClass="mb-4"
						label="Password"
						required
						id="form1"
						type="password"
					/>

					<div className="d-flex justify-content-center mb-4">
						<MDBCheckbox
							name="flexCheck"
							id="flexCheckDefault"
							label="I have read and agree to the terms"
						/>
					</div>

					<MDBBtn
						className="mb-4 w-100 bg-dark"
						onClick={() => {
							store.registration(
								username.current.value,
								email.current.value,
								password.current.value
							);
						}}
					>
						Sign up
					</MDBBtn>
				</MDBTabsPane>
			</MDBTabsContent>
		</MDBContainer>
	);
}

export default observer(LoginTest);
