import { FaCode, FaMobile, FaGlobe, FaStore, FaSearch, FaShareAlt, FaTools, FaLightbulb, FaRobot } from 'react-icons/fa';

const iconComponents = {
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

const Modal = ({ isOpen, closeModal, selectedService }) => {
    if (!isOpen || !selectedService) return null;

    const IconComponent = iconComponents[selectedService.iconName];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
                {/* Botón de cerrar */}
            <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col items-center">
                <div className={`${selectedService?.color} p-6 rounded-full mb-6`}>
                    {IconComponent && <IconComponent className="w-24 h-24 text-white" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedService?.titulo}</h3>
                <p className="text-gray-600 text-center">
                    Descripción detallada del servicio. Aquí puedes agregar más información sobre {selectedService?.titulo}.
                </p>
                <button 
                    className={`${selectedService?.color} text-white px-6 py-2 rounded-full mt-6 hover:opacity-90 transition-opacity`}
                >
                    Solicitar Servicio
                </button>
            </div>
        </div>
    </div>
)}

export default Modal;