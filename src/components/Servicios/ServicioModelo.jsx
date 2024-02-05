import React from 'react'

const ServicioModelo = ({ icono, titulo }) => {
  return (
    <div className='shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-3 w-[90%] p-1 border-black border-solid border-2 hover:scale-110 transition-transform shadow-black'>
      <div className='w-[100px]'>
        <img src={icono} alt="icono" />
      </div>
      <div className='flex font-bold text-center'>
        <span>{titulo}</span>
      </div>
    </div>
  )
}

export default ServicioModelo