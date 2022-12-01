import CourseService from "../services/CourseService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Courses from "../components/Courses/Courses";

function CoursesPage() {
	let { category } = useParams();
	const [Result, setResult] = useState();

	useEffect(() => {
		CourseService.getCouseByCategory(category).then((items) => {
			setResult(items.data);
		});
	}, []);
	if (Result == undefined) return;

	return (
		<>
			<Header></Header>
			<Courses courses={Result}></Courses>
		</>
	);
}

export default CoursesPage;
