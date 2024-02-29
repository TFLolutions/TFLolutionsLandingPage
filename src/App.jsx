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
			<Inicio />
			<Servicios />
			<Nosotros/>
			<ContactoStepper />
			<Footer/>
		</>
	)
  }
  
  export default App;
  