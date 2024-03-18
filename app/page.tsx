'use client'

import Menu from "@/components/containers/menu/menu"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative min-h-screen">
      {/* Video de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/Intro.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Logo */}
        <button
          onClick={toggleMenu}
          title="Menu"
          className="absolute top-4 left-4 z-10"
        >
          <Image
            src="/Logo.jpg"
            alt="LogoTipo"
            width={50}
            height={50}
            priority={true}
            className={`hover:opacity-50 p-1 flex rounded-full border-1 justify-center items-center h-18 w-18 ${
              menuVisible ? "border-2" : "border-color17"
            }`}
            title="Organizacion Web Studio"
          />
        </button>

        {/* Contenido principal */}
        <main className="flex-grow p-4 bg-no-repeat bg-cover bg-center flex-1">
          {menuVisible && <Menu />}
        </main>
      </div>
    </div>
  );
}
