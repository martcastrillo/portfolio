import "../../styles/Project.scss";
import { Link } from "react-router-dom";

function RickandMorty() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Rick and Morty finder</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"> <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/234398211-c14057df-e901-42fc-b9c3-b621290a2188.png" alt="" /> </a>
      <a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"> <img className="project_imgmov" src="https://user-images.githubusercontent.com/112553001/236614066-448e0c06-44d1-4961-b01b-c3697ec08c4c.png" alt="" /> </a>
       <div className="project_detail">        
       <p>Es una web desarrollada con React en la cual se pueda buscar y filtrar personajes de la serie Rick y Morty por diferentes criterios,al hacer click sobre el personaje aparecerá enrutada una tarjeta con detalles del mismo.
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