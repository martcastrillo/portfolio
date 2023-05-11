import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function BreakingBad() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Breaking Bad</h2>
      <div className="div_project">
        <a href="https://github.com/martscastrillo/breaking-bad-seeker">  <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/8ca3e223-0245-4694-adb8-f602b5f414b1" alt="" /></a>
        <a href="https://github.com/martscastrillo/breaking-bad-seeker">  <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/a70401a8-94fc-42a8-b7a6-7c975d320703" alt="" /></a>
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