import React from "react";

const FirstForm = ({ formValues, onChange }) => {
    return (
        <div className="w-full">
            <form className="bg-white shadow-md px-20 pt-16 pb-10 mb-8 rounded-md">
                <div className="grid gap-4 place-content-center items-center">
                    <h1 className="text-gray-700 pb-8 font-bold text-2xl text-center">Información de Contacto</h1>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Name"
                    >
                        Nombre:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ingresá tu nombre"
                        onChange={onChange}
                        value={formValues.name}
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="empresa"
                    >
                        Empresa:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="empresa"
                        name="empresa"
                        onChange={onChange}
                        value={formValues.empresa}
                        type="text"
                        placeholder="De que empresa sos?"
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="telefono"
                    >
                        Telefono:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="telefono"
                        name="telefono"
                        onChange={onChange}
                        value={formValues.telefono}
                        type="tel"
                        placeholder="Para poder contactarte"
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        onChange={onChange}
                        value={formValues.email}
                        type="email"
                        placeholder="Tu E-Mail de contacto"
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default FirstForm;