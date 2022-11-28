import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "./scss/app.scss";
import Store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { data } from "autoprefixer";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const Context = createContext();
export const store = new Store();

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Context.Provider value={store}>
				<App />
			</Context.Provider>
		</BrowserRouter>
	</React.StrictMode>
);
