import Servicios from './components/Servicios'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import ContactoStepper from './components/ContactoStepper'


function App() {
	return (
		<>
			<Inicio />
			<Servicios />
			<div className="mt-10 bg-slate-300 flex flex-col gap-10 h-[50vh] items-center justify-center">
				<ContactoStepper />
			</div >

			<Footer />
		</>
	)
}

export default App
