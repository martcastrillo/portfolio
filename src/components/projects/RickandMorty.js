import "../../styles/Project.scss";
import { Link } from "react-router-dom";

function RickandMorty() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Rick and Morty finder</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"> <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/450a3f6d-c1a8-44c5-b0d5-aba689009d3e" alt="" /> </a>
      <a href="https://martscastrillo.github.io/rick-and-morty-character-finder/"> <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/3ba6f530-bb7b-46b5-8344-5b4a8d14e66b" alt="" /> </a>
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