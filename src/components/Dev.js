import { Link } from "react-router-dom";
import {  useState } from 'react';
import datadev from "../services/data_pr.json";
import "../styles/Dev.scss";

function Dev() {
	const [tech, setTech] = useState('todas');
	const htmlData = datadev
	.filter((filterTech) => {
		let result = '';
		
		if (tech === 'todas') {
  /* 		console.log('todas'); */
		  result = true;
		  return result;
		}
		else if (filterTech.technologies === tech) {
          console.log(filterTech.technologies );
		  result = true;
		  return result;
		  
		}
		return result;
	  })
	.map((project, index) => {
		return (
			<div className="proyect_div" key={index} id={project.prj_id}>
				<Link to={project.link} className="link header">
					<img className="dev_img" src={project.img} alt="" />
				</Link>
				<span>
					<a href={project.url_code}>
						<i className="fa-solid fa-code dev_logo"></i>
					</a>
					<a href={project.url_page}>
						<i className="fa-regular fa-window-restore dev_logo"></i>
					</a>
				</span>
			</div>
		);
	});
	const handleClick = (ev) => {
		setTech(ev.target.id);
	};

	return (
		<div className="dev_div">
			<h1 className="dev_title">dev</h1>
			<div className="dev_filter">
			<h2 className="dev_filter_option" onClick={handleClick} id="todas">
					todas
				</h2>
				<h2 className="dev_filter_option" onClick={handleClick} id="html">
					html - css
				</h2>
				<h2 className="dev_filter_option" onClick={handleClick} id="javascript">
					javascript
				</h2>
				<h2 className="dev_filter_option" onClick={handleClick} id="react">
					react
				</h2>
				<h2 className="dev_filter_option" onClick={handleClick} id="node">
					node js - express
				</h2>
				<h2 className="dev_filter_option" onClick={handleClick} id="angular">
					angular
				</h2>
			</div>
			<div className="line_project"> {htmlData}</div>
		</div>
	);
}

export default Dev;
