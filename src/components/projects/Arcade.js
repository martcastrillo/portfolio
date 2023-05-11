import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function ArcadePlace() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Arcade Place</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/arcade_place"> <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/234314554-a1aa9f1d-ff87-46f5-af91-609ce20e440e.png" alt="" /> </a> 
   <a href="https://martscastrillo.github.io/arcade_place"> <img className="project_imgmov" src="https://user-images.githubusercontent.com/112553001/234314581-aa164b1b-30a1-4b85-a9b8-a184fa13f90e.png" alt="" /> </a>    
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