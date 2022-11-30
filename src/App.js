import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
function App() {
	const store = useContext(Context);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			store.checkAuth();
		}
	}, []);
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route exac path="/Home" element={<HomePage />} />
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/Register" element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default observer(App);
