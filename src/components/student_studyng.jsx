export default function Studentstudyng(props) {
	return (
		<article>
			<img src={props.imagen} alt="" />
			<h2>
				{props.titulo}
			</h2>
			<p>
				{props.descripcion}
			</p>
		</article>
	)
}