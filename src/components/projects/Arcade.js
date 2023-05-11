import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function ArcadePlace() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Arcade Place</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/arcade_place"> <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/91e8b6e7-4c94-40cf-b957-9c14f6d46e33" alt="" /> </a> 
   <a href="https://martscastrillo.github.io/arcade_place"> <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/dddf23e7-9013-48bf-837c-9ca7005170e9" alt="" /> </a>    
       <div className="project_detail">         
        <p>Desarrollo de una página que engloba varios mini proyectos preparados en JavaScript Vainilla.</p>
        <span> HTML · CSS · JS</span>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/arcade_place"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/arcade_place"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default ArcadePlace;