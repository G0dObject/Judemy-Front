import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import React, { useContext, useEffect } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import FaqPage from "./pages/FaqPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
function App() {
	const store = useContext(Context);
	useEffect(() => {
		if (localStorage.getItem("token") != null) {
			store.checkAuth();
		}
	}, []);
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/Home" element={<HomePage />} />
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/Register" element={<RegisterPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/course/:category" element={<CoursesPage />} />
			</Routes>
		</>
	);
}

export default observer(App);
