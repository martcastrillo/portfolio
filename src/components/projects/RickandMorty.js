import "../../styles/Project.scss";
import { Link } from "react-router-dom";

function RickandMorty() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Rick and Morty finder</h2>
      <div className="div_project">
        <img className="project_img" src="https://user-images.githubusercontent.com/112553001/234398211-c14057df-e901-42fc-b9c3-b621290a2188.png" alt="" />
       <div className="project_detail">        
       <p>Es un buscador de personajes de la serie Rick y Morty, preparado para buscar y filtrar,
        después de haber filtrado el personaje que buscas puedes hacer click sobre él aparecerá enrutada una tarjeta de detalle del personaje en concreto.
       </p>
       <span> HTML · CSS · REACT</span>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/rick-and-morty-character-finder"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default RickandMorty;