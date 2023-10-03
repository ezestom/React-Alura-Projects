import dog from "../assets/img/doguito404.svg";
import ".././assets/css/404.css";
import { Link } from "react-router-dom";

export function Error() {
	return (
		<main>
			<div className="container">
				<h2 className="title-page">Error 404</h2>
				<figure className="img-container">
					<img src={dog} className="dog-image" alt="Error 404" />
				</figure>
			</div>
			<section className="container flex flex--center">
				<article className="card">Página no encontrada</article>
			</section>
			<span className="btn-container">
				<Link to="/" className="btn btn--blue">
					Volver a la página principal
				</Link>
			</span>
		</main>
	);
}
