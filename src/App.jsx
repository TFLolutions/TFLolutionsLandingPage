import Servicios from './components/Servicios'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import ContactoStepper from './components/ContactoStepper'
import Nosotros from './components/Nosotros'
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
		<div id="contacto">
		  <ContactoStepper />
		</div>
		<div id="nosotros">
		  <Nosotros/>
		</div>
		<Footer/>
	  </>
	)
  }
  
  export default App;
  