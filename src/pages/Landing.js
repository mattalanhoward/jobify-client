import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby lo-fi knausgaard cray cloud bread taxidermy. Beard tattooed
						messenger bag humblebrag retro pork belly Brooklyn pok pok art party
						+1 trust fund shoreditch tilde praxis. Chambray four dollar toast
						sartorial cloud bread, you probably haven't heard of them meggings
						cronut lyft locavore shabby chic.
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
