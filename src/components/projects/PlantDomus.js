import "../../styles/Project.scss";
import pantalla5 from "../../images/pantallas_Capa-5.png";
import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function PlantDomus() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Plant Domus</h2>
      <div className="div_project">
        <img className="project_img" src={pantalla5} alt="" />
       <div className="project_detail">        
       <p>El proyecto es una web funciona básicamente con html y css. Es una web con una única página preparada para su uso responsive.



 
       </p>
       <span> HTML · CSS</span>
          <span className="detail_icons">
            <a href="https://github.com/martscastrillo/plant-domus-landing-page"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/plant-domus-landing-page/"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default PlantDomus;