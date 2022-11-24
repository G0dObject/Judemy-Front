import Person from "../../assets/Person.png";
import Mail from "../../assets/Mail.png";
import Lock from "../../assets/Lock.png";
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
	return response; // parses JSON response into native JavaScript objects
}

function Register() {
	const username = useRef("name");
	const email = useRef("email");
	const password = useRef("password");

	function onClickHandler() {
		postData("https://localhost:5001/api/Login/Register", {
			userName: username.current.value,
			email: email.current.value,
			password: password.current.value,
		});
	}

	return (
		<div className="registerwrapper">
			<div className="registerlabel">Sing up to Judemy</div>
			<div className="registername">
				<img src={Person} alt="Person"></img>
				<input
					ref={username}
					className="registerinput"
					type="text"
					id="name"
					name="name"
					required
					minLength="4"
					maxLength="10"
					defaultValue={"Username"}
				></input>
			</div>

			<div className="registeremail">
				<img src={Mail} alt="Mail"></img>
				<input
					ref={email}
					className="registerinput"
					type="email"
					id="email"
					name="email"
					defaultValue={"Example@gmail.com"}
					required
					minLength="4"
					maxLength="25"
				></input>
			</div>
			<div className="registerpass">
				<img src={Lock} alt="lock"></img>
				<input
					ref={password}
					className="registerinput"
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

export default Register;
