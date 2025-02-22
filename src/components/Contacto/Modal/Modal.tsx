import { FC } from 'react';
import { ModalProps } from '../../../types';
import { logEvent } from '../../../utils/analytics';
import { IconType } from 'react-icons';
import { FaCode, FaMobile, FaGlobe, FaStore, FaSearch, FaShareAlt, FaTools, FaLightbulb, FaRobot, FaConnectdevelop } from 'react-icons/fa';

const iconComponents: { [key: string]: IconType } = {
    FaCode,
    FaMobile,
    FaGlobe,
    FaStore,
    FaSearch,
    FaShareAlt,
    FaTools,
    FaLightbulb,
    FaRobot,
    FaConnectdevelop
};

const Modal: FC<ModalProps> = ({ isOpen, closeModal, selectedService }) => {
    if (!isOpen || !selectedService) return null;

    const IconComponent = iconComponents[selectedService.iconName];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        logEvent({
            category: 'Contact',
            action: 'Form Submit',
            label: selectedService.title
        });
        // Lógica del formulario
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {selectedService.title}
                    </h2>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                
                <div className={`${selectedService.color} p-4 rounded-lg mb-4 flex justify-center`}>
                    {IconComponent && <IconComponent className="w-16 h-16 text-white" />}
                </div>

                <p className="text-gray-600 mb-4">
                    {selectedService.description}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`${selectedService.color} text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity w-full`}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;