import "../../styles/Project.scss";

/* import datadev from "../../services/data_pr.json"
 */
import { Link } from "react-router-dom";
function GitBranchHeros() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Git Branch Heros</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"> <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/214271596-f74c4f48-32bb-4a74-b9f8-b2d63ee27b87.png" alt="" /></a>
      <a href="https://martscastrillo.github.io/git-branch-heros-landing-page/"> <img className="project_imgmov" src="https://github.com/martscastrillo/git-branch-heros-landing-page/assets/112553001/23a01263-37c0-4cc7-980d-adaa480a11b5" alt="" /></a>
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