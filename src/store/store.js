import { makeAutoObservable, makeObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
	constructor() {
		makeAutoObservable(this);
	}

	setAuth(bool) {
		this.isAuth = bool;
	}

	setUser(user) {
		this.user = user;
	}

	setLoading(bool) {
		this.isLoading = bool;
	}

	async login(email, password) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response);
			localStorage.setItem("token", response.data.token);
			this.setAuth(true);
			this.setUser(response.data.user);
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	async registration(username, email, password) {
		try {
			await AuthService.registration(username, email, password).then(() =>
				this.login(email, password)
			);
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth() {
		this.setLoading(true);
		try {
			const response = (await axios.get)(`${API_URL}/refresh`, {
				withCredentials: true,
			});

			console.log(response);
			localStorage.setItem("token", response.data.accessToken);
			this.setAuth(true);
			this.setUser(response.data.user);
		} catch (e) {
			console.log(e.response?.data?.message);
		} finally {
			this.setLoading(false);
		}
	}
}
