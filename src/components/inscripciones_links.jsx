export default function Inscripciones(props) {
	return (
		<ul>
			<li>
				<label>
					<h2>
						{props.subtitulo}
					</h2>
					<div>flecha abajo</div>
					<div>flecha arriba</div>
				</label>
				<p>
					{props.texto}
				</p>
			</li>
		</ul>
	)
}