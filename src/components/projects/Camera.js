import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function Camera() {
	return (
		<div class="project_div">
			<h2 className="project_title">Happy Shop</h2>
			<div className="div_project">
			<a href="https://happy-store-5d570.web.app">
					<img
						className="project_imgdes"
						src="https://github.com/martscastrillo/martscastrillo/assets/112553001/23f7bf03-28d4-4fe4-bbc7-26090057d5a5"
						alt=""
					/>
				</a>
				<a href="https://happy-store-5d570.web.app">
					<img
						className="project_imgmov"
						src="https://github.com/martscastrillo/martscastrillo/assets/112553001/790caf53-8ac2-4405-8aee-150e1e4ad1fe"
						alt=""
					/>
				</a>
				<div className="project_detail">
					<p>
						Desarrollo de los primeros pasos de un proyecto en angular. Mediante
						una API se pintan los distintos elementos del stock de la tienda
						virtual. En desarrollo.
					</p>
					<span> HTML · CSS · ANGULAR</span>
					<span className="detail_icons">
						<a href="https://github.com/martscastrillo/happy_shop">
							<i class="fa-solid fa-code prj_logo"></i>
						</a>
						<a href="https://happy-store-5d570.web.app">
							<i class="fa-regular fa-window-restore prj_logo"></i>
						</a>
					</span>
					<Link to="/Dev" className="link">
						<i className="fa-solid fa-chevron-left"></i>Return
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Camera;
