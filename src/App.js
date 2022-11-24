import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
function App() {
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

export default App;
