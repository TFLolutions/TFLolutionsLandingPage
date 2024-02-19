import React, { useState } from "react";
import ContactoInformacion from "./ContactoForms/ContactoInformacion"
import ContactoMensaje from "./ContactoForms/ContactoMensaje";
import ContactoEnviar from "./ContactoForms/ContactoEnviar";

const ParentComponent = () => {
    const formList = ["ContactoInformacion", "ContactoMensaje", "ThirdForm"];

    const formLength = formList.length;

    const [page, setPage] = useState(0);

    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1);
    };
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1);
    };

    const initialValues = {
        name: "",
        empresa: "",
        telefono: "",
        email: "",
        mensaje: "",
    };
    const [values, setValues] = useState(initialValues);

    const handleForms = () => {
        switch (page) {
            case 0: {
                return (
                    <div>
                        <ContactoInformacion formValues={values} onChange={onChange}></ContactoInformacion>
                    </div>
                );
            }
            case 1: {
                return (
                    <ContactoMensaje
                        formValues={values}
                        onChange={onChange}
                    ></ContactoMensaje>
                );
            }
            case 2: {
                return <ContactoEnviar formValues={values} onChange={onChange}></ContactoEnviar>;
            }
            default:
                return null;
        }
    };

    {/* PONER PARA ENVIAR MAIL */ }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
        }, 2000);
        return response;
    };

    const setForm = (e) => {
        const name = e.target.innerText;
        switch (name) {
            case "Información": {
                return setPage(0);
            }
            case "Mensaje": {
                return setPage(1);
            }
            case "Enviar": {
                return setPage(2);
            }
            default:
                setPage(0);
        }
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    };

    return (
        <div className="mt-10 grid items-center h-auto place-items-center">
            <ul className="flex justify-between w-auto md:gap-32 gap-24 pb-10">
                <li
                    className={
                        page === 0 ? "bg-blue-300 md:px-4 rounded-lg  " : "bg: transparent"
                    }
                >
                    <div className="flex items-center justify-center m-2">
                        <span
                            className={
                                page === 0
                                    ? " text-white font-medium"
                                    : " text-black"
                            }
                        >
                            Información
                        </span>
                    </div>
                </li>
                <li
                    className={
                        page === 1 ? "bg-blue-300  md:px-4 rounded-lg" : "bg: transparent "
                    }
                >
                    <div className="flex items-center justify-center m-2">
                        <span
                            className={
                                page === 1
                                    ? " text-white font-medium"
                                    : " text-black"
                            }
                        >
                            Mensaje
                        </span>
                    </div>
                </li>
                <li
                    className={
                        page === 2 ? "bg-blue-300 md:px-4 rounded-lg" : "bg: transparent"
                    }
                >
                    <div className="flex items-center justify-center m-2">
                        <span
                            className={
                                page === 2
                                    ? " text-white font-medium"
                                    : " text-black"
                            }
                        >
                            Enviar
                        </span>
                    </div>
                </li>
            </ul>
            <div className="flex-1">{handleForms()}</div>
            <div className="grid grid-cols-2 gap-4 place-content-center items-center">
                <button
                    onClick={handlePrev}
                    className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
                    disabled={page === 0}
                >
                    ← Volver
                </button>
                {page === 2 ? (
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
                    >
                        Enviar ✉
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
                    >
                        Siguiente →
                    </button>
                )}
            </div>
        </div>
    );
};

export default ParentComponent;