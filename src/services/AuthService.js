import $api from "../http";

export default class AuthService {
	static async login(email, password) {
		return $api.post("/login/login", { email, password });
	}
	static async registration(username, email, password) {
		return $api.post("/login/register", { username, email, password });
	}
}
