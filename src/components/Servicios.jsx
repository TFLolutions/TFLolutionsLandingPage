import React from 'react'
import ServicioModelo from './Servicios/ServicioModelo'
import consultoria from '../assets/Servicios/consultoria.svg'
import disenoapps from '../assets/Servicios/disenoapps.svg'
import disenoweb from '../assets/Servicios/disenoweb.svg'
import programacion from '../assets/Servicios/programacion.svg'
import redessociales from '../assets/Servicios/redessociales.svg'
import seo from '../assets/Servicios/seo.svg'
import serviciotecnico from '../assets/Servicios/serviciotecnico.svg'
import tiendaonline from '../assets/Servicios/tiendasonline.svg'


const DistintosServicios = [
    {
        icono: programacion,
        titulo: "Programación a medida",
    },
    {
        icono: disenoapps,
        titulo: "Diseño de apps",
    },
    {
        icono: disenoweb,
        titulo: "Diseño Web",
    },
    {
        icono: tiendaonline,
        titulo: "Tiendas Online",
    },
    {
        icono: seo,
        titulo: "Optimicación SEO y SEM",
    },
    {
        icono: redessociales,
        titulo: "Redes Sociales",
    },
    {
        icono: serviciotecnico,
        titulo: "Servicio Técnico",
    },
    {
        icono: consultoria,
        titulo: "Consultoría Informática",
    },

]
const Servicios = () => {
    return (
        <>
            <div className='mt-5 flex flex-col items-center justify-items-center lg:grid lg:grid-cols-4 gap-3 gap-y-9 max-w-screen-2xl px-4 py-8 mx-auto'>
                {
                    DistintosServicios.map((item, index) => (
                        <ServicioModelo
                            key={index}
                            icono={item.icono}
                            titulo={item.titulo}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Servicios