import { makeAutoObservable, makeObservable } from "mobx";
import AuthService from "../services/AuthService";
import * as mobx from "mobx";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
export default class Store {
	constructor() {
		makeAutoObservable(this);
		this.load();
		this.autoSave(this, this.save.bind(this));
	}
	user = {};
	isAuth = false;

	setAuth(bool) {
		this.isAuth = bool;
	}
	setUser(user) {
		this.user = user;
	}

	load() {
		if (localStorage.getItem("store") != null) {
			const data = localStorage.getItem("store");
			Object.assign(this, JSON.parse(data));
		}
	}
	autoSave(store, save) {
		let firstRun = true;
		mobx.autorun(() => {
			const json = JSON.stringify(mobx.toJS(store));
			if (!firstRun) {
				save(json);
			}
			firstRun = false;
		});
	}

	save(json) {
		localStorage.setItem("store", json);
	}

	async login(email, password) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response);
			localStorage.setItem("token", response.data.token);
			this.setAuth(true);
			this.setUser(response.data.username);
			window.location.href = "/";
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
