import Person from "../assets/Person.png";
import Lock from "../assets/Lock.png";
import { useRef } from "react";

async function postData(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	return response;
}

function Login() {
	const username = useRef("name");
	const password = useRef("password");

	if (localStorage.getItem("token") === null) {
		localStorage.setItem("token", "ff");
		postData("https://localhost:5001/api/Login/Login");
	}

	function onClickHandler() {
		let response = postData("https://localhost:5001/api/Login/Login", {
			userName: username.current.value,
			password: password.current.value,
		});
		response.then((response) => {
			response.text().then(function (text) {
				console.log(JSON.parse(text).token);
			});
		});
	}
	return (
		<div className="loginwrapper">
			<div className="loginlabel">Sing up to Judemy</div>
			<div className="loginname">
				<img src={Person} alt="Person"></img>
				<input
					ref={username}
					className="logininput"
					type="text"
					id="name"
					name="name"
					required
					minLength="4"
					maxLength="10"
					defaultValue={"Username"}
				></input>
			</div>

			<div className="loginpass">
				<img src={Lock} alt="lock"></img>
				<input
					ref={password}
					className="logininput"
					type="password"
					id="password"
					name="password"
					defaultValue={"password"}
					required
					minLength="6"
					maxLength="16"
				></input>
			</div>
			<button
				onClick={() => {
					onClickHandler();
				}}
				className="registerbutton"
			>
				<div>Sumbit</div>
			</button>
		</div>
	);
}

export default Login;
