import React, { useState } from "react";
import "../stepper.css";
import { TiTick } from "react-icons/ti";
const ContactoStepper = () => {
    const steps = ["Información", "Mensaje", "Finalizar"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
        <>
            {/* CREAR BOTON VOLVER Y PERSISTENCIA DE LOS DATOS (const o hook) */}
            <div className="flex justify-between">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <p className="text-black">{step}</p>
                    </div>
                ))}
            </div>
            {/* PONER ACA LOS INPUT */}
            {!complete && (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => {
                        currentStep === steps.length
                            ? setComplete(true)
                            : setCurrentStep((prev) => prev + 1);
                    }}
                >
                    {currentStep === steps.length ? "Enviar ✉" : "Siguiente →"}
                </button>
            )}
            {/* CUANDO ESTE AL FINAL, MOSTRAR LOS DATOS INGRESADOS, MOSTRAR BOTON VOLVER */}
        </>
    );
};

export default ContactoStepper