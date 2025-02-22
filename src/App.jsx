import Servicios from './components/Servicios'
import Inicio from './components/Inicio'
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
		<Footer/>
	  </>
	)
  }
  
  export default App;
  