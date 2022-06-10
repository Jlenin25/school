import { Link } from 'react-router-dom'
import colombia from '../assets/img/colombia.png'

export default function Plans(props) {
	return (
		<article>
			<h3 className="titulo">
				Plan {props.titulo}
			</h3>
			<span className="subtitulo">
				{props.pago}
			</span>
			<hr />
			<img src={colombia} alt="" />
			<div className="cops-first">
				<h3>COP$ {props.precio}</h3><span>/mes</span>
			</div>
			<div className="precio">
				{props.precio_regular}
			</div>
			<div className="ahorro">
				{props.ahorro}
			</div>
			<div className="container-info-planes">
				<h3>
					{props.titulo_info}
				</h3>
				<ul>
					<li>
						{props.li_1}<span>{props.nav_pequeño}</span>
					</li>
					<li>
						{props.li_2}
					</li>
					<li>
						{props.li_3}
					</li>
				</ul>
				<div className="span-valor-paga">
					{props.valor_pagar}
				</div>
			</div>
			<Link to="contactar-asesor">Contacta a tu asesor</Link>
		</article>
	)
}