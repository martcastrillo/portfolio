import landing from "../images/landing.png";
import { Routes, Route, NavLink } from "react-router-dom";
import Dev from "./Dev";
import Graphic from "./Graphic";
import Video from "./Video";

import "../styles/Index.scss";
function Main() {
	return (
		<div>
			<body className="body">
				<div className="menu-landing">
					<div className="landing-text-box">
						<h1 className="main_landingtext">Marta Castrillo</h1>
						<h2 className="landingtext">Porfolio</h2>
						<div className="landing_offices">
							<NavLink to="/Dev">
								<p className="mini_link">web developer</p>
							</NavLink>
							<NavLink to="/Video">
								<p className="mini_link">video editor</p>
							</NavLink>
					{/* 		<NavLink to="/Graphic"> 
								<p className="mini_link">graphic design</p>
						</NavLink> */}
						</div>
					</div>
					<img className="landing-image" src={landing} alt="" />
				</div>
			</body>
			<Routes>
				<Route path="/Dev" element={<Dev />}></Route>
				<Route path="/Graphic" element={<Graphic />}></Route>
				<Route path="/Video" element={<Video />}></Route>{" "}
			</Routes>
		</div>
	);
}

export default Main;
