import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md p-6 inline-block">
  <Link href="#!">
    <div className="flex justify-center mb-4"> {/* Aplicamos flex y justify-center */}
      <Image 
        className="rounded-2xl" 
        src="/Logo.jpg" 
        alt="Logo"
        width={500}
        height={300} 
      />
    </div>
  </Link>
  <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
    <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
      <span className="mr-2">
        Consultar Nuevas
      </span>
      <span
        className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
        Novedades
      </span>
    </h5>
  </div>
  <div className="p-6">
  <h5 className="text-2xl font-bold mb-2 dark:text-color1">¡Bienvenido a Code Organización Web Studio!</h5>
  <p className="text-color1 mb-4">
  Somos un equipo de profesionales apasionados dedicados al desarrollo web. En Code Organización, nos esforzamos por
  ofrecer soluciones innovadoras y personalizadas para satisfacer tus necesidades digitales.
</p>
<p className="text-color1 mb-4">
  Ya sea que necesites un sitio web completamente nuevo, una aplicación web a medida o mejorar tu presencia en línea,
  estamos aquí para ayudarte a alcanzar tus objetivos.
</p>

<p className="text-color1 mb-4">
  Nuestro equipo cuenta con años de experiencia en el desarrollo web y está comprometido a brindarte resultados de
  alta calidad y un servicio excepcional en cada proyecto.
</p>

<p className="text-color1">
  ¡Explora nuestro sitio y descubre cómo podemos llevar tu presencia en línea al siguiente nivel!
</p>
    <Link href="#"
      className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
      Contactar
    </Link>
  </div>
  <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
  </div>
</div>

  )
}



{/* <div className="bg-gray-100 rounded-lg shadow-md p-6 border-4 border-color10">


<div>

</div>
</div> */}