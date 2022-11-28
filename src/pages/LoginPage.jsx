import Header from "../components/Header";
import Login from "../components/Login/Login";

function LoginPage() {
	return (
		<>
			<Header></Header>
			<Login isLogin={true}></Login>
		</>
	);
}

export default LoginPage;
