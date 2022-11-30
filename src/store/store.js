import { makeAutoObservable, makeObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
	constructor() {
		makeAutoObservable(this);
	}
	user = {};
	isAuth = false;

	setAuth(bool) {
		this.isAuth = bool;
	}

	setUser(user) {
		this.user = user;
	}

	async login(email, password) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response);
			localStorage.setItem("token", response.data.token);
			this.setAuth(true);
			console.log(this.isAuth);
			this.setUser(response.data.username);
			console.log(response.data.username);
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
	async logout() {
		try {
			localStorage.removeItem("token");
			this.setAuth(false);
			this.setUser({});
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth() {
		this.setAuth(true);
	}
}
