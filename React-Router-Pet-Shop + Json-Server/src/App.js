import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { Error } from "./pages/Error";
import { Header } from "./components/Header";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/posts/:id" element={<Post />} />
					<Route path="/categoria/:id/*" element={<Categoria />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
