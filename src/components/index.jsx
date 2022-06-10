// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import Bloglinks from './blog_links'
import Inscripciones from './inscripciones_links'
import Plans from './plans_links'
import Studentstudyng from './student_studyng'
import logo from '../assets/img/logo_udiscover.png'

export default function Home() {
	var currentTime = new Date();
	var year = currentTime.getFullYear()
	
	return (
		<div className="container-home-page">
			{/* Nav Links */}
			<nav>
				<div className="container-nav">
					<div className="logo-school">
						<NavLink to='/'>
							<img src={logo} alt="Colegio Virtual" />
						</NavLink>
					</div>
					<ul>
						<li>
							<h2>
								Experiencia uDiscover
							</h2>
							<ul>
								<li>
									<h3>
										Metodología educativa
									</h3>
									<ul>
										<li>
										<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
											<h4>
												Emprendimiento
											</h4>
										</NavLink>
										</li>
									</ul>
								</li>
								<li>
									<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
										<h3>
											Enfoque pedagógico
										</h3>
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
								<h2>
									Blog
								</h2>
							</NavLink>
						</li>
						<li>
							<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
								<h2>
									Admisiones
								</h2>
							</NavLink>
						</li>
						<li>
							<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
								<h2>
									Plataforma uDiscover
								</h2>
							</NavLink>
						</li>
						<li>
							<NavLink to='' className={({isActive}) => isActive ? 'active' : ''}>
								<h2 className="contactanos">
									Contáctanos
								</h2>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			{/* Front Page */}
			{/* <div className="front-page">
				<div className="container-front-page">
					<div className="container-image-back">
						<img src="" alt="" />
					</div>
					<div className="container-info-front">
						<div className="text-title">
							<h2>
								Descubre el legado que dejarás al mundo
							</h2>
							<p>
								Desde un entorno virtual, guiamos virtudes, habilidades, intereses y afinidades para una proyección integral y sólida del individuo.
							</p>
							<button>Inscripciones abiertas</button>
						</div>
						<div className="studen-front-page">
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</div> */}
			{/* Sections */}
			<section className="section-container">
				<div className="container-section-one">
					<div className="left-side">
						<h2>
							Por una educación <div className="span"><div className="plus">+</div>humana</div>
						</h2>
					</div>
					<div className="right-side">
						<h3>
							uDiscover es un Colegio Virtual bilingüe Americano, con enfoque en Tecnología, Emprendimiento e Innovación.
						</h3>
						<p>
							Ofrecemos la modalidad: Académica bilingüe (español–inglés). Contamos con 3 niveles: <label>Elementary School (básica primaria) , Middle School (básica secundaria) y  High School (educación media)</label> de carácter mixto, Calendarios A (Inicio clases Febrero) y B (Inicio clases Agosto).
						</p>
					</div>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-two">
					<div className="left-side-form">
						<div className="icon-arrows">
							<FontAwesomeIcon icon={faAnglesRight} />
						</div>
						<h2>
							Inscríbete ahora
						</h2>
						<p>
							Nuestra asesora pedagógica se pondrá en contacto para iniciar el proceso de inscripción de tu hijo.
						</p>
						<hr/>
						<label>
							¿Ya te inscribiste? <Link to=''>Ingresa aquí para conocer el proceso de admisión.</Link>
						</label>
					</div>
					<form>
						<label>Nombres</label>
						<input type="text" />
						<label>Apellidos</label>
						<input type="text" />
						<label>Correo electrónico</label>
						<input type="text" />
						<label>Teléfono celular</label>
						<div className="telefono-pais">
							<select>
								<option value="" key="">
									Perú (Perú)
								</option>
							</select>
							<input type="text" />
						</div>
						<label>Edad del estudiante</label>
						<select>
							<option value="" key="">Seleccionar</option>
							<option value="" key="">5 a 7 años</option>
							<option value="" key="">8 a 10 años</option>
							<option value="" key="">11 a 13 años</option>
							<option value="" key="">14 a 16 años</option>
							<option value="" key="">17 a 18 años</option>
						</select>
						<label>País</label>
						<select>
							<option value="" key="">Seleccionar</option>
						</select>
						<label>¿Cuál es el motivo para buscar un colegio virtual?</label>
						<select>
							<option value="" key="">
							</option>
						</select>
						<div className="aceptar-terminos">
							<input type="checkbox" />
							<Link to=''>He leído y acepto la política de privacidad</Link>
						</div>
						<button>Enviar</button>
					</form>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-three">
					<div className="icon-section-three">
						<FontAwesomeIcon icon={faGraduationCap} />
					</div>
					<div className="title-section-three">
						<h3>
							Al ser parte de uDiscover, nuestros estudiantes obtienen la titulación High School Diploma.
						</h3>
					</div>
					<div className="second-title-section-three">
						<h4>
							Aprovecha nuestros precios especiales con descuento
						</h4>
					</div>
					<div className="planes">
						<Plans
							titulo = 'anual'
							pago = '1 pago'
							precio = '741.000'
							precio_regular = 'Precio regular COP$ 870.000'
							ahorro = 'Ahorras COP$ 129.000'
							titulo_info = "1 pago de COP$ 8'894.000."
							li_1 = '*En este valor incluye el pago de la matricula, los recursos digitales y 10 mensualidades.'
						/>
						<Plans
							titulo = 'mensual anticipado'
							pago = '12 pago'
							precio = '769.000'
							precio_regular = 'Precio regular COP$ 870.000'
							ahorro = 'Ahorras COP$ 101.000'
							titulo_info = "12 pagos distribuidos en:"
							li_1 = '1er pago: Matrícula COP$719.000'
							nav_pequeño = '/hasta el 30 abril.'
							li_2 = '2do pago: Recursos digitales COP$869.000.'
							li_3 = '3er a 12vo pago: Mensualidades COP$769.000*'
							valor_pagar = '*Valor a pagar hasta el 5 de cada mes.'
						/>
						<Plans
							titulo = 'mensual'
							pago = '12 pagos'
							precio = '869.000'
							ahorro = 'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'
							titulo_info = "12 pagos distribuidos en:"
							li_1 = '1er pago: Matrícula COP$719.000'
							nav_pequeño = '/hasta el 30 abril.'
							li_2 = '2do pago: Recursos digitales COP$869.000.'
							li_3 = '3er a 12vo pago: Mensualidades COP$869.000'
						/>
					</div>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-four">
					<div className="left-section-four">
						<img src="" alt="" />
					</div>
					<div className="right-section-four">
						<h2>
							Conoce a los finalistas de nuestro Demo Day 2021
						</h2>
						<Link to="ingresar">Ingresa aquí</Link>
					</div>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-five">
					<h2>
						¿Por qué tu hijo debe estudiar en uDiscover?
					</h2>
					<h3>
						Tu hijo merece tener una educación de calidad y a la vez, tiempo para desarrollar diferentes actividades. Estudiar en uDiscover les permitirá eso y mucho más:
					</h3>
					<Studentstudyng
						titulo = 'Acompañamiento continúo'
						descripcion = 'Tu hijo nunca estará solo. El 100% de las clases son guiadas y acompañadas por profesores en tiempo real'
					/>
					<Studentstudyng
						titulo = 'Educación internacional'
						descripcion = 'Curriculum Internacional, enfocado en tecnología, emprendimiento e innovación.'
					/>
					<Studentstudyng
						titulo = 'Bilingüismo'
						descripcion = 'Aprendizaje y perfeccionamiento del Inglés a través de experiencias. Contamos con profesores nativos. Nuestros estudiantes se gradúan con High School Diploma con el que pueden ingresar a la universidad latinoamericana de su elección. '
					/>
					<Studentstudyng
						titulo = 'Apoyamos las ideas'
						descripcion = 'Con nuestra incubadora de proyectos basados en modelos disruptivos e innovadores tu hijo llevará sus ideas a otro nivel.'
					/>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-six">
					<img src="" alt="" />
					<article>
						<ul>
							<li>
								S<span>aberes y</span>
							</li>
							<li>
								E<span>xperiencias para</span>
							</li>
							<li>
								R<span>econocerse</span>
							</li>
						</ul>
						<h2>
							Educación para la vida
						</h2>
						<p>
							Más que la mera transmisión de información, el conocimiento es una herramienta para descubrir por sí mismos el rol dentro de una sociedad, las virtudes y las pasiones. Con una mentalidad de libertad e interminable curiosidad, aquí lo importante, más que las respuestas, son las preguntas.
						</p>
						<Link to="" >Conoce nuestra metodología</Link>
					</article>
				</div>
			</section>
			{/* Carrusel */}
			<div className="section-container">
				<div className="container-slider">
					<article>
						<p>
							“Además de la facilidad de las clases virtuales, la propuesta educativa innovadora de uDiscover nos ofrece una oportunidad única como docentes de compartir aula con estudiantes en diferentes lugares del continente. En una clase regular de uDiscover, se respira la diversidad cultural, no solo de nuestro país sino de Latinoamérica.” 
						</p>
						<label>VANESSA PÉREZ PINZÓN</label>
						<b>DOCENTE CIENCIAS NATURALES</b>
					</article>
					<article>
						<img src="" alt="" />
						<img src="" alt="" />
					</article>
				</div>
			</div>
			<hr />
			<section className="section-container">
				<div className="container-section-seven">
					<h3>ALIADOS</h3>
					Slider
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-eight">
					<Inscripciones
						subtitulo = '¿Es de calidad la educación en uDiscover?'
						texto = 'Si, nuestro método está  comprobado con base en la experiencia de trabajos en programas a distancia digitales. Contamos con docentes altamente capacitados, con contenidos educativos desarrollados por expertos y herramientas tecnológicas idóneas. Nuestro método requiere acompañamiento constante de un docente y el estudiante tiene momentos autonomos para desarrollo de actividades, siempre bajo nuestra guia.'
					/>
					<Inscripciones
						subtitulo = '¿Necesito acompañar a mi hijo durante las clases online en uDiscover?'
						texto = 'No, no necesita acompañar a su hijo durante las clases. Desarrollamos la autonomia de nuestros estudiantes, bajo nuestra guia, método y herramientas tecnológicas permiten la educación desde casa sin necesidad de un adulto tutor.'
					/>
					<Inscripciones
						subtitulo = '¿Es costosa la educación en uDiscover?'
						texto = 'No, nuestra oferta cuenta con servicios como bilingüismo, plataforma tecnológica de última generación, red de apoyo al emprendedor y clases semipersonalizadas; todo esto a un costo asequible y desde la comodidad y protección de tu casa. Sin sobrecostos en uniformes, textos escolares, transporte, tiempo en desplazamiento, onces escolares, entre otros.Nuestra propósito es democratizar el acceso a la educación de calidad.'
					/>
					<Inscripciones
						subtitulo = '¿Debo comprar textos escolares?'
						texto = 'No, no debes preocuparte por comprar textos escolares. Todo el material de estudio ha sido elaborado por nuestro equipo especialista en educación, el cual se encuentra disponible en nuestra plataforma tecnológica.'
					/>
					<Inscripciones
						subtitulo = '¿Si mi hijo no habla inglés, puede ingresar a uDiscover?'
						texto = 'Por supuesto, durante el proceso de admisión realizamos un diagnóstico del nivel y dispositivos del aspirante para la adquisición del inglés como segunda lengua. A partir de este diagnostico estructuramos planes de acción específicos para cada estudiante con compromisos casa-colegio que comprenden: manejo diferenciado en las clases, pautas para la exposición al inglés, asignación de grupos académico por niveles de proficiencia, y cursos de nivelación extracurriculares.'
					/>
					<Inscripciones
						subtitulo = '¿El colegio uDiscover tiene los permisos de operación de las entidades regulatorias?'
						texto = 'Somos un colegio virtual, bilingüe y privado, del estado de la Florida, Estados Unidos, registrado bajo el código 5943. Con título homologable en cualquier país de latinoamérica y el mundo. Para saber más de como verificar nuestro registro ante el departamento de educación del estado de la Florida'>
							<Link to='' >Ingresa Aquí</Link>
						</Inscripciones>
					<div className="contianer-right-section-eight">
						<b>INSCRIPCIONES ABIERTAS</b>
						<label>PRIMARY, MIDDLE Y HIGH SCHOOL</label>
						<Link to="" >Inscríbete ahora</Link>
					</div>
				</div>
			</section>
			<section className="section-container">
				<div className="container-section-nine">
					<h2>
						<Link to='' >Blog</Link>
					</h2>
					<Bloglinks
						imagen = ''
						titulo = '¿Qué es la “flexibilidad cognitiva”? ¿Por qué es clave para uDiscover Virtual School el aprendizaje y la creatividad dentro de su modelo académico de colegio virtual?'
						texto = 'Algunas personas permanecen rígidas y se apegan al plan original, a pesar del retraso. Las personas más flexibles se adaptan al evento inesperado y resuelven problemas para encontrar una solución. La flexibilidad cognitiva puede haber afectado la forma en que las personas se enfrentaron a los bloqueos pandémicos, que produjeron nuevos desafíos en torno al trabajo (ejm. home ofice) y la educación (ejm. colegio virtual). A algunos nos resultó más fácil que a otros adaptar nuestras rutinas para realizar muchas actividades desde casa. Es posible que personas tan flexibles también hayan cambiado estas rutinas de vez en cuando, tratando de encontrar formas mejores y más variadas de realizar su día. Otros, sin embargo, tuvieron problemas y finalmente se volvieron más rígidos en su pensamiento. Se apegaron a las mismas actividades de rutina, con poca flexibilidad o cambios.'
						fecha = 'julio 17, 2021'
					/>
					<Bloglinks
						imagen = ''
						titulo = 'Emprendimiento innovación y tecnología tendencias de la nueva forma de educación'
						texto = 'Dada la actual situación que enfrenta el mundo, la educación ha afrontado nuevos retos que los han llevado a resurgir y reinventar modelos educativos y fortalecer los colegios virtuales en Colombia y Latino América. Por ello, uDiscover Virtual School, ha tomado lo mejor del mundo global y se basó en la innovación, tecnología y el emprendimiento.'
						fecha = 'julio 10, 2021'
					/>
					<Bloglinks
						imagen = ''
						titulo = 'Crecen alternativas de colegios virtuales en Colombia con uDiscover Virtual School'
						texto = '“Diseñamos una nueva manera de estudiar y en este camino de la reinvención, identificamos que los estudiantes deberían ser ciudadanos del mundo, conociendo herramientas que les permitan ser líderes en todos los aspectos de la vida”, afirmó Lina Ramírez, directora de Producto de uDiscover Virtual School.'
						fecha = 'julio 3, 2021'
					/>
				</div>
			</section>
			<footer>
				<div className="container-footer-top">
					<ul>
						<li>
							<img src="" alt="" />
						</li>
						<li>
							<h3>Contáctanos</h3>
							<ul>
								<li>
									<div className="icono"></div>
									<Link to='' >+57 3054246600</Link>
								</li>
								<li>
									<div className="icono"></div>
									<Link to='' >USA +1 786 789 0299</Link>
								</li>
								<li>
									<div className="icono"></div>
									<Link to='' >COL +57 333 033 3477</Link>
								</li>
								<li>
									<div className="icono"></div>
									<Link to='' >CHI +56 323 820 966</Link>
								</li>
								<li>
									<div className="icono"></div>
									<Link to='' >MEX +52 559 063 3939</Link>
								</li>
							</ul>
						</li>
						<li>
							<h3>Correo</h3>
							<div className="icono"></div>
							<Link to='' >admisiones@ud.school</Link>
						</li>
						<li>
							<h3>Síguenos</h3>
							<ul>
								<li>
									<div className="icono-facebook"></div>
								</li>
								<li>
									<div className="icono-instagram"></div>
								</li>
								<li>
									<div className="icono-youtube"></div>
								</li>
								<li>
									<div className="icono-linkedin"></div>
								</li>
							</ul>
						</li>
						<li>
							<Link to=''>Política de privacidad</Link>
						</li>
						<li>
							Slider
						</li>
					</ul>
				</div>
				<div className="container-footer-bot">
					Copyright © - <span>{year}</span> | uDiscover Virtual School - All rights reserved
				</div>
			</footer>
		</div>
	)
}