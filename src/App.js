import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Dashboard</Link>
				<Link to="/register">Register</Link>
				<Link to="/landing">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<div>Dashboard</div>}></Route>
				<Route path="register" element={<div>Register</div>}></Route>
				<Route path="/landing" element={<Landing />}></Route>
				<Route path="*" element={<div>404</div>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
