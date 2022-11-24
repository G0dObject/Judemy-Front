import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
function Header() {
	return (
		<div className="header">
			<div className="container1">
				<a href="/">
					<div className="header__logo">
						<img src={Logo} alt="Pizza logo"></img>
					</div>
				</a>
				<div className="category">
					<div>
						<p>Category</p>
					</div>
				</div>

				<div className="rightside">
					<div className="rightsidewrapper">
						<a href="/login" className="login">
							<p>LogIn</p>
						</a>

						<a href="/register" type="button" className="singin">
							<p>SingIn</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
