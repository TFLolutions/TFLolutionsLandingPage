import React, { useState } from 'react'
import ServicioModelo from './../components/Servicios/ServicioModelo'
import consultoria from '../../public/Servicios/consultoria.svg'
import disenoapps from '../../public/Servicios/disenoapps.svg'
import disenoweb from '../../public/Servicios/disenoweb.svg'
import programacion from '../../public/Servicios/programacion.svg'
import redessociales from '../../public/Servicios/redessociales.svg'
import seo from '../../public/Servicios/seo.svg'
import serviciotecnico from '../../public/Servicios/serviciotecnico.svg'
import tiendaonline from '../../public/Servicios/tiendasonline.svg'
import Modal from './Contacto/Modal/Modal.jsx'


const DistintosServicios = [
    {
        icono: programacion,
        titulo: "Programación a medida",
        color: "bg-[#00C4CC]"  // Color turquesa
    },
    {
        icono: disenoapps,
        titulo: "Diseño de apps",
        color: "bg-[#82C7A5]"  // Color verde
    },
    {
        icono: disenoweb,
        titulo: "Diseño Web",
        color: "bg-[#FFD66B]"  // Color amarillo
    },
    {
        icono: tiendaonline,
        titulo: "Tiendas Online",
        color: "bg-[#FF5D5D]"  // Color rojo
    },
    {
        icono: seo,
        titulo: "Optimización SEO y SEM",
        color: "bg-[#F8A4FF]"  // Color rosa
    },
    {
        icono: redessociales,
        titulo: "Redes Sociales",
        color: "bg-[#FF7676]"  // Color coral
    },
    {
        icono: serviciotecnico,
        titulo: "Servicio Técnico",
        color: "bg-[#1E1B4B]"  // Color azul oscuro
    },
    {
        icono: consultoria,
        titulo: "Consultoría Informática",
        color: "bg-[#FFB4B4]"  // Color rosa claro
    },
]

const Servicios = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="w-full py-16 px-4 bg-gray-50">
            <div className='max-w-screen-2xl mx-auto'>
                <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {DistintosServicios.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${item.color} rounded-3xl p-6 transition-transform hover:scale-105 cursor-pointer`}
                            onClick={() => openModal(item)}
                        >
                            <div className="h-40 flex items-center justify-center">
                                <img 
                                    src={item.icono} 
                                    alt={item.titulo}
                                    className="w-24 h-24 object-contain"
                                />
                            </div>
                            <h3 className="text-white text-xl font-semibold text-center mt-4">
                                {item.titulo}
                            </h3>
                        </div>
                    ))}
                </div>

                <Modal 
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    selectedService={selectedService}
                />
            </div>
        </div>
    )
}

export default Servicios