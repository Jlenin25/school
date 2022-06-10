import { Link } from "react-router-dom";

export default function Bloglinks(props) {
	return (
		<article>
			<div className="container-image-section-nine">
				<label>Institucional</label>
				<img src={props.imagen} alt="" />
			</div>
			<label>
				{props.titulo}
			</label>
			<p>
				{props.texto}
			</p>
			<Link to='' >Leer más --</Link>
			<footer>
				{props.fecha}
			</footer>
		</article>
	)
}