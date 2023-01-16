
import "../styles/App.scss";
import { Routes, Route, Link,  NavLink } from "react-router-dom";
import Dev from "./Dev";
import Graphic from "./Graphic";
import Video from "./Video";
import Contact from "./Contact";
import Main from "./Main";
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
			
			</Link>
			

			
			<Routes>
			<Route path="/" element={<Main />}></Route>
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
