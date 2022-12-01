import Course from "./Course";

function Courses({ courses }) {
	return (
		<>
			<div className="CoursesWrapper">
				{courses.map((obj) => (
					<Course key={obj.id} {...obj}></Course>
				))}
			</div>
		</>
	);
}

export default Courses;
