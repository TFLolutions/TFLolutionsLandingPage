import React, { useState } from 'react'
import Modal from './Contacto/Modal/Modal'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaCode, FaMobile, FaGlobe, FaStore, FaSearch, FaShareAlt, FaTools, FaLightbulb, FaRobot } from 'react-icons/fa'


const DistintosServicios = [
    {
        iconName: "FaCode",
        title: "Programación a medida",
        description: "Proyectos nuevos o actualizaciones de tu sitio web",
        color: "bg-[#00C4CC]"
    },
    {
        iconName: "FaMobile",
        title: "Diseño de apps",
        description: "Desarrollamos aplicaciones móviles personalizadas para tu negocio",
        color: "bg-[#82C7A5]"
    },
    {
        iconName: "FaGlobe",
        title: "Diseño Web",
        description: "Creamos sitios web atractivos y funcionales para tu negocio",
        color: "bg-[#FFD66B]"
    },
    {
        iconName: "FaRobot",
        title: "IA",
        description: "Desarrollamos aplicaciones de Inteligencia Artificial para tu negocio",
        color: "bg-[#6B46C1]"
    },
    {
        iconName: "FaStore",
        title: "Tiendas Online",
        description: "Creamos tiendas online para tu negocio",
        color: "bg-[#FF5D5D]"
    },
    {
        iconName: "FaSearch",
        title: "Optimización SEO y SEM",
        description: "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda",
        color: "bg-[#F8A4FF]"
    },
    {
        iconName: "FaShareAlt",
        title: "Redes Sociales",
        description: "Creamos redes sociales para tu negocio",
        color: "bg-[#FF7676]"
    },
    {
        iconName: "FaTools",
        title: "Servicio Técnico",
        description: "Ofrecemos soporte técnico para tu negocio",
        color: "bg-[#1E1B4B]"
    },
    {
        iconName: "FaLightbulb",
        title: "Consultoría Informática",
        description: "Ofrecemos asesoramiento en tecnologías y soluciones informáticas",
        color: "bg-[#FFB4B4]"
    },
   
]

const Servicios = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const IconComponent = ({ iconName }) => {
        const icons = {
            FaCode,
            FaMobile,
            FaGlobe,
            FaStore,
            FaSearch,
            FaShareAlt,
            FaTools,
            FaLightbulb,
            FaRobot
        };
        const Icon = icons[iconName];
        return Icon ? <Icon className="w-24 h-24 text-white" /> : null;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full py-16 px-4 bg-black">
            <div className='max-w-screen-2xl mx-auto relative'>
                <h2 className="text-6xl font-bold text-center mb-12 text-white font-['Orbitron']">
                    Nuestros Servicios
                </h2>
                
                <div className="px-10">
                    <Slider {...settings} className="servicios-slider">
                        {DistintosServicios.map((item, index) => (
                            <div key={index} className="px-2 h-full">
                                <div 
                                    className={`
                                        ${item.color} 
                                        rounded-xl 
                                        p-6 
                                        hover:scale-105 
                                        transition-all 
                                        duration-300 
                                        cursor-pointer 
                                        shadow-lg
                                        h-[400px]
                                        flex
                                        flex-col
                                    `}
                                    onClick={() => {
                                        setSelectedService(item);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col h-full">
                                        <div className="relative mb-4 h-[160px] flex-shrink-0">
                                            <div className="absolute inset-0 bg-white/20 rounded-full transform -rotate-6"></div>
                                            <div className="relative h-full flex items-center justify-center">
                                                <IconComponent iconName={item.iconName} />
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col flex-grow justify-center space-y-3">
                                            <h3 className="text-2xl font-bold text-white text-center">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/90 text-center text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                        
                                        <div className="absolute top-2 right-2">
                                            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <style>
                    {`
                        .servicios-slider .slick-track {
                            display: flex !important;
                            align-items: stretch;
                        }
                        .servicios-slider .slick-slide {
                            height: auto;
                            display: flex;
                            align-items: stretch;
                        }
                        .servicios-slider .slick-slide > div {
                            flex: 1;
                            display: flex;
                        }
                        .servicios-slider .slick-prev,
                        .servicios-slider .slick-next {
                            background: rgba(255, 255, 255, 0.2);
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            backdrop-filter: blur(4px);
                        }
                        .servicios-slider .slick-prev:hover,
                        .servicios-slider .slick-next:hover {
                            background: rgba(255, 255, 255, 0.3);
                        }
                        .servicios-slider .slick-dots li button:before {
                            color: white;
                        }
                        .servicios-slider .slick-dots li.slick-active button:before {
                            color: white;
                        }
                    `}
                </style>

                <Modal 
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    selectedService={selectedService}
                />
            </div>
        </div>
    )
}

export default Servicios