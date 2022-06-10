import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/index'

const Routess = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default Routess