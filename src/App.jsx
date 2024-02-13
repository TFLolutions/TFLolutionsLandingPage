import { Route, Routes } from "react-router-dom"
import "./App.css";
import { NavBar } from './components/NavBar';
import { Nosotros, Contacto, Inicio, Clientes, Servicios } from "./components/pages"

function App() {
	return (
		<div className="App">
		<NavBar />
		<Routes>
			<Route path="/" element={<Inicio/>}/>
			<Route path="/nosotros" element={<Nosotros/>}/>
			<Route path="/contacto" element={<Contacto/>}/>
			<Route path="/clientes" element={<Clientes/>}/>
			<Route path="/servicios" element={<Servicios/>}/>
		</Routes>
		</div>
	);
}


export default App;