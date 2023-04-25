import "../../styles/Project.scss";
import pantalla4 from "../../images/pantallas_Capa-4.png";
import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function BreakingBad() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Breaking Bad</h2>
      <div className="div_project">
        <img className="project_img" src={pantalla4} alt="" />
       <div className="project_detail">       
       <p>Desarrollo con JavaScript de un buscador de personajes de una famosa serie, trae los datos de una API, y mediante del filtrado se pueden encontrar los personajes. También se pueden indicar los personajes favoritos. 
       </p>
       <span> HTML · CSS · JS</span>       
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/breaking-bad-seeker"><i class="fa-solid fa-code prj_logo"></i></a>
          <a href="https://martscastrillo.github.io/breaking-bad-seeker/  "><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default BreakingBad;