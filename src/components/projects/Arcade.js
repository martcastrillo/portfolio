import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function ArcadePlace() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Arcade Place</h2>
      <div className="div_project">
        <img className="project_img" src="https://user-images.githubusercontent.com/112553001/231568489-67b5c75c-eeca-451b-a86a-164ac5e5f497.png" alt="" />
       <div className="project_detail">          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum facilis nam sunt quo itaque autem sit eligendi illum, asperiores inventore nostrum tempore expedita voluptatem quis consequuntur! Optio, atque alias!
          </p>
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