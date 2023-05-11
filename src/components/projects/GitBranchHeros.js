import "../../styles/Project.scss";

/* import datadev from "../../services/data_pr.json"
 */
import { Link } from "react-router-dom";
function GitBranchHeros() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Git Branch Heros</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"> <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/8c416fc7-989e-4103-a182-3e13deb0269e" alt="" /></a>
      <a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"> <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/26696e08-07fa-41f1-9d00-cd31b8e6f58a" alt="" /></a>
        <div className="project_detail">
        <p>Desarrollo de una página sencilla en la que se encuentran distintos tipos de maquetación, trabajo en SCSS en grid, flex, empleo de hover, variables, para las distintas páginas y secciones. Incluye un formulario.
       </p>
       <span> HTML · CSS</span>   
          <span className="detail_icons">
            <a href="https://github.com/martscastrillo/git-branch-heros-landing-page"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            
          </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>

      </div></div>
  );
}

export default GitBranchHeros;