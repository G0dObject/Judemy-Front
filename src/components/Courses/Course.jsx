import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBBtn,
	MDBNavbarLink,
	MDBIcon,
} from "mdb-react-ui-kit";
function Course({
	imageUrl,
	description,
	name,
	adress,
	uploader,
	rating,
	price,
}) {
	let _price = price == 0 ? "Free" : (price += "₽");

	return (
		<>
			<div className="courseBlock">
				<div className="course">
					<img src={imageUrl} alt="..." />
					<div className="text">
						<div className="label">{name}</div>
						<div className="description">{description}</div>
						<div className="uploader">{uploader}</div>{" "}
						<div className="price">{_price}</div>{" "}
					</div>
					{_price == "Free" ? (
						<MDBBtn className="download" color="dark" href={adress}>
							<MDBIcon fas icon="cloud-download-alt" fixed size="3x" />
						</MDBBtn>
					) : (
						<MDBBtn className="download" color="dark" href={"/"}>
							<MDBIcon fas icon="cart-arrow-down" fixed size="3x" />
						</MDBBtn>
					)}
				</div>
			</div>
		</>
	);
}

export default Course;
