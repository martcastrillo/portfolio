
import "../styles/App.scss";
import { Routes, Route, Link,  NavLink } from "react-router-dom";
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
function App() {
	return (
		<div className="App">
		<header>
{/* 		<div className="burguermenu"></div>	 */}
		<ul className="navlist">
			
		<li>
				<NavLink to="/" className="grid__item-link" id="contact-link">
					home
				</NavLink>
			</li>
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
		{/* 	<li>
				<NavLink to="/Graphic" className="grid__item-link" id="contact-link">
					graphic
				</NavLink>
			</li> */}
			<li>
				<NavLink to="/Contact"	id="contact-link"  className="grid__item-link"				>
					contact
				</NavLink>
			</li>
			<li className="grid__item-link-name"	>Marta Castrillo - Portfolio</li>
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
				<Route path="/Dev/PlantDomus" element={<PlantDomus/>}></Route>
				<Route path="/Dev/GitBranchHeros" element={<GitBranchHeros/>}></Route>
				<Route path="/Dev/BreakingBad" element={<BreakingBad/>}></Route>
				<Route path="/Dev/MinionProfileCards" element={<MinionProfileCards/>}></Route>
				<Route path="/Dev/AwesomeProfileCards" element={<AwesomeProfileCards/>}></Route>
			<Route path="/Dev/RickandMorty" element={<RickandMorty/>}></Route>
			<Route path="/Dev/Horoscopo" element={<Horoscopo/>}></Route> 
			</Routes>
			<footer className="page__footer">
				<p className="footer">&copy; Marta Castrillo 2023</p>
			</footer>
		</div>
	);
}

export default App;
