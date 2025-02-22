import Servicios from './components/Servicios'
import Inicio from './components/Inicio'
import Tecnologias from './components/Tecnologias'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
	return (
	  <>
	  	<NavBar/>
		<div id="inicio">
		  <Inicio />
		</div>
		<div id="servicios">
		  <Servicios />
		</div>
		<div id="servicios">
		  <Tecnologias />
		</div>
		<Footer/>
	  </>
	)
  }
  
  export default App;
  