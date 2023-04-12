import { Link } from "react-router-dom";
/* import pantalla1 from "../images/pantallas_Capa-1.png";
import pantalla2 from "../images/pantallas_Capa-2.png";
import pantalla3 from "../images/pantallas_Capa-3.png";
import pantalla4 from "../images/pantallas_Capa-4.png";
import pantalla5 from "../images/pantallas_Capa-5.png";
import pantalla6 from "../images/pantallas_Capa-6.png";
import pantalla7 from "../images/pantallas_Capa-7.png"; */
import datadev from "../services/data_pr.json"
import "../styles/Dev.scss";

function Dev() {
	const htmlData = datadev.map((project) => {

		return (
			<div className='proyect_div'>
				<Link to={project.link} className="link header">
					<img className="dev_img" src={project.img} alt="" /></Link>
				<span>
					<a href={project.url_code}><i className="fa-solid fa-code dev_logo"></i></a>
					<a href={project.url_page}><i className="fa-regular fa-window-restore dev_logo"></i></a>
				</span>
			</div>
		)
	});
	console.log(htmlData);


	return (
		<div className="dev_div">
			<h1 className="dev_title">dev</h1>
			{/* 		<div className='dev_filter'><h2 className='dev_filter_option'>html - css</h2>
			<h2 className='dev_filter_option'>java script</h2>
			<h2 className='dev_filter_option'>react</h2>
			<h2 className='dev_filter_option'>node js - express</h2>
			</div>  */}
			<div className='line_project'>	{htmlData}</div>

			{/* 	<div className='line_project'> 
				<div className='proyect_div'>
					<Link to="/Dev/PlantDomus" className="link header">


						<img className="dev_img" src={pantalla5} alt="" /></Link>
					<span>

						<a href="https://github.com/martscastrillo/plant-domus-landing-page"><i className="fa-solid fa-code dev_logo"></i>
						</a>
						<a href="https://martscastrillo.github.io/plant-domus-landing-page/"><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>

				</div>
				<div className='proyect_div'>
					<Link to="/Dev/GitBranchHeros" className="link header">
						<img className="dev_img" src={pantalla7} alt="" /></Link>
					<span>
						<a href="https://github.com/martscastrillo/git-branch-heros-landing-page"><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>

				</div>
				<div className='proyect_div'>
					<Link to="/Dev/BreakingBad" className="link header">
						<img className="dev_img" src={pantalla4} alt="" /></Link>

					<span>
						<a href="https://github.com/martscastrillo/breaking-bad-seeker"><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/breaking-bad-seeker/"><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>

				</div>
			</div>
			<div className='line_project'>
				<div className='proyect_div'>

					<Link to="/Dev/MinionProfileCards" className="link header">
						<img className="dev_img" src={pantalla3} alt="" /></Link>
					<span>
						<a href="https://github.com/martscastrillo/minions-profile-cards"><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/minions-profile-cards/"><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>


				</div>
				<div className='proyect_div'>
					<Link to="/Dev/AwesomeProfileCards" className="link header">
						<img className="dev_img" src={pantalla2} alt="" />
					</Link>
					<span>
						<a href="https://github.com/martscastrillo/awesome-profile-cards"><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/awesome-profile-cards/ "><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>
				</div>
				<div className='proyect_div'>
					<Link to="/Dev/RickandMorty" className="link header">
						<img className="dev_img" src={pantalla1} alt="" />	</Link>

					<span>
						<a href="https://github.com/martscastrillo/rick-and-morty-character-finder"><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>
				</div>
				<div className='proyect_div'>

					<Link to="/Dev/Horoscopo" className="link header">
						<img className="dev_img" src={pantalla6} alt="" /></Link>
					<span>
						<a href="https://github.com/martscastrillo/horoscope "><i className="fa-solid fa-code dev_logo"></i></a>
						<a href="https://martscastrillo.github.io/horoscope/ "><i className="fa-regular fa-window-restore dev_logo"></i></a>
					</span>
				</div>

			</div> */}


		</div>
	);
}

export default Dev;
