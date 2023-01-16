import landing from "../images/landing.png";
import "../styles/App.scss";
import { Routes, Route, Link,  NavLink } from "react-router-dom";
import Dev from "./Dev";
import Graphic from "./Graphic";
import Video from "./Video";
import Contact from "./Contact";
function App() {
	return (
		<div className="App">
			<header>
		
		<ul className="navlist">
			<li>
				<NavLink to="/Dev" className="grid__item-link" id="contact-link">
					dev
				</NavLink>
			</li>
			<li>
				<NavLink to="/Video" className="grid__item-link" id="contact-link">
					video
				</NavLink>
			</li>
			<li>
				<NavLink to="/Graphic" className="grid__item-link" id="contact-link">
					graphic
				</NavLink>
			</li>
			<li>
				<NavLink to="/Contact"	className="grid__item-link"	id="contact-link"			>
					contact
				</NavLink>
			</li>
		</ul>

</header>
			<Link to="/" className="link header">
			<body className="body">
				<div className="landing-text">
					<h3 className="landingtext">dev</h3>
					<h3 className="landingtext">video</h3>
					<h3 className="landingtext">graphic</h3>
				</div>
				<img className="landing-image" src={landing} alt="" />
			</body>
			</Link>
			

			
			<Routes>
			
				<Route path="/Dev" element={<Dev />}></Route>
				<Route path="/Graphic" element={<Graphic />}></Route>
				<Route path="/Video" element={<Video />}></Route>
				<Route path="/Contact" element={<Contact />}></Route>
			</Routes>
			<footer className="page__footer">
				<p className="footer">&copy; Marta Castrillo 2023</p>
			</footer>
		</div>
	);
}

export default App;
