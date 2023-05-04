import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

/* import projects from "../services/dataProjects.json"; */
import Dev from "./Dev";
import Graphic from "./Graphic";
import Video from "./Video";
import Contact from "./Contact";
import Main from "./Main";
import PlantDomus from "./projects/PlantDomus";
import GitBranchHeros from "./projects/GitBranchHeros";
import BreakingBad from "./projects/BreakingBad";
import MinionProfileCards from "./projects/MinionProfileCards";
import AwesomeProfileCards from "./projects/AwesomeProfileCards";
import RickandMorty from "./projects/RickandMorty";
import Horoscopo from "./projects/Horoscopo";
import ArcadePlace from "./projects/Arcade";
import Camera from "./projects/Camera";

function App() {
	const [active, setActive] = useState(false);
	const [burger, setBurger] = useState("burger");
	const [list, setList] = useState("list hidden");

	/* const [filterByTool, setFilterByTool] = useState("All");
	 */
	const handleBurger = (ev) => {
		ev.preventDefault();
		if (active === true) {
			setActive(false);
			setBurger("burger");
			setList("list hidden");
		}
		if (active === false) {
			setActive(true);
			setBurger("burger active");
			setList("list mob");
		}

	};
	return (
		<div className="App">
			<header>
				<nav className="navlist">
					<NavLink to="*" className="grid__item-link-name" id="contact-link">
						Marta Castrillo - Portfolio
					</NavLink>

					<span className="listed" onClick={handleBurger}>
					

<ul  className={list}>
							<li>
								<NavLink
									to="/Dev"
									className="grid__item-link"
									id="contact-link"
								>
									dev
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Video"
									className="grid__item-link"
									id="contact-link"
								>
									video
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Graphic"
									className="grid__item-link"
									id="contact-link"
								>
									graphic
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Contact"
									id="contact-link"
									className="grid__item-link"
								>
									contact
								</NavLink>
							</li>
						</ul>

					
						
						
						<div className={burger} >
							<span></span>
						</div>
					</span>
				</nav>
			</header>

			<Link to="*" className="link header"></Link>

			<Routes>
				<Route path="*" element={<Main />}></Route>
				<Route path="/Dev" element={<Dev />}></Route>
				<Route path="/Graphic" element={<Graphic />}></Route>
				<Route path="/Video" element={<Video />}></Route>
				<Route path="/Contact" element={<Contact />}></Route>
				<Route path="/Dev/PlantDomus" element={<PlantDomus />}></Route>
				<Route path="/Dev/GitBranchHeros" element={<GitBranchHeros />}></Route>
				<Route path="/Dev/BreakingBad" element={<BreakingBad />}></Route>
				<Route
					path="/Dev/MinionProfileCards"
					element={<MinionProfileCards />}
				></Route>
				<Route
					path="/Dev/AwesomeProfileCards"
					element={<AwesomeProfileCards />}
				></Route>
				<Route path="/Dev/RickandMorty" element={<RickandMorty />}></Route>
				<Route path="/Dev/Horoscopo" element={<Horoscopo />}></Route>
				<Route path="/Dev/ArcadePlace" element={<ArcadePlace />}></Route>
				<Route path="/Dev/CameraShop" element={<Camera />}></Route>
			</Routes>
			<footer className="page__footer">
				<p className="footer">&copy; Marta Castrillo 2023</p>
			</footer>
		</div>
	);
}

export default App;
