import { Route } from "react-router-dom";
import Content from "../components/Content";
import Header from "../components/Header";

function HomePage() {
	return (
		<div>
			<Header></Header>
			<Content></Content>
		</div>
	);
}

export default HomePage;
