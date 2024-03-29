import { empleados } from "../data/empleados";

const Nosotros = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className="max-w-screen-2xl px-4 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Nuestro Equipo</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
        {empleados.map((empleado) => {
        return (
            
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full"
                      key={empleado.id}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt={`Imagen del empleado ${empleado.nombre}`} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={empleado.img}/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{empleado.nombre}</h2>
                        <p className="text-gray-500">{empleado.rol}</p>
                    </div>
                    </div>
                </div>
        );
      })}
      </div>
    </div>
    </section> 
       
    </>
  )
}
export default Nosotros