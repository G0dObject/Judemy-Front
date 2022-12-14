import axios from "axios";

export const API_URL = "https://176.213.142.58:443/api";

let $api = axios.create({
	baseUrl: API_URL,
	headers: "application/json",
});

$api.defaults.baseURL = API_URL;

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

export default $api;
