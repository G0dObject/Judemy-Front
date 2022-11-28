import Header from "../components/Header";
import Login from "../components/Login/Login";

function RegisterPages() {
	return (
		<>
			<Header></Header>
			<Login isLogin={false}></Login>
		</>
	);
}

export default RegisterPages;
