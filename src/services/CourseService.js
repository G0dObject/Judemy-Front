import $api from "../http";

export default class CourseService {
	static async getCouseByCategory(category) {
		return $api.post("/Course", { category });
	}
}
