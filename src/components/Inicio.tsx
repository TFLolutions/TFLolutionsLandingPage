import { FC, useState } from 'react';
import Modal from './Contacto/Modal/Modal';
import { ReactTyped } from 'react-typed';
import { Service } from '../types';
import logo from '../assets/logo.png';

const Inicio: FC = () => {
    const contactService: Service = {
        iconName: "FaConnectdevelop",
        title: "Contacto",
        description: "Contacta con la nave nodriza 👽",
        color: "bg-[#1ca700]"
    };

    const [selectedService] = useState<Service>(contactService);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center">
            <div className="text-center flex items-center justify-center gap-4">
                <img 
                    src={logo}
                    alt="Mothership Logo" 
                    className="w-24 h-24 object-contain"
                />
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    .MOTHERSHIP SOFTWARE SOLUTIONS.
                </h1>
                <img 
                    src={logo} 
                    alt="Mothership Logo" 
                    className="w-24 h-24 object-contain"
                />
            </div>
            <div className="text-center">
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <ReactTyped
                        strings={[
                            'Innova',
                            'Crea',
                            'Actualiza',
                            'Planifica',
                            'Crecé',
                            'Aprende',
                            'Comparte',
                            'Disfruta',
                            'Conecta 👽'
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                        className="font-medium"
                    />
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1ca700] hover:bg-[#158600] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                    Contactar
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                selectedService={selectedService}
            />
        </div>
    );
};

export default Inicio;