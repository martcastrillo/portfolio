import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function Camera() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Arcade Place</h2>
      <div className="div_project">
        <img className="project_img" src="https://user-images.githubusercontent.com/112553001/234218945-c1851d6c-95ff-4c5f-a930-74effa35b000.png" alt="" />
       <div className="project_detail">          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum facilis nam sunt quo itaque autem sit eligendi illum, asperiores inventore nostrum tempore expedita voluptatem quis consequuntur! Optio, atque alias!
          </p>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/my_store_angular"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="my-store-angular-d90e9.web.app"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default Camera;