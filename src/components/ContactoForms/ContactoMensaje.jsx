import React from "react";

const SecondForm = ({ formValues, onChange }) => {
    return (
        <div className="w-full">
            <form className="bg-white shadow-md pt-16 pb-10 mb-8 rounded-md">
                <div className="grid gap-4 place-content-center items-center">
                    <h1 className="text-gray-700 pb-8 font-bold text-2xl text-center">Mensaje</h1>
                </div>
                <div className="mb-4 mx-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Address"
                    >
                        Contanos, en que podemos ayudarte?:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full md:w-[100vh] h-[30vh] py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        id="mensaje"
                        name="mensaje"
                        type="text"
                        placeholder="Escribí tu mensaje"
                        value={formValues.mensaje}
                        onChange={onChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default SecondForm;