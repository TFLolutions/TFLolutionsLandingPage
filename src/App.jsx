import Servicios from './components/Servicios'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import ContactoStepper from './components/ContactoStepper'
import Nosotros from './components/Nosotros'
import NavBar from './components/NavBar'

function App() {
	return (
<<<<<<< HEAD
		<>
			<Inicio />
			<Servicios />
			<Nosotros/>
			<ContactoStepper />
			<Footer/>
		</>
=======
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
>>>>>>> 39e156bb6339b2fdef08c1149ac1e93813900c72
	)
  }
  
  export default App;
  