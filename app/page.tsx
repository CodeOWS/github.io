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
    <main className="flex-grow p-4 bg-no-repeat bg-cover bg-center h-screen">
      <button onClick={toggleMenu} title="Menu">
        <Image
          src="/Logo.jpg"
          alt="LogoTipo"
          width={50}
          height={50}
          className={`hover:opacity-50 p-1 flex rounded-full border-2 justify-center items-center h-18 w-18 ${menuVisible ? "border-2" : "border-color17"
            }`}
          title="Organizacion Web Studio"
        />
      </button>
      {menuVisible && <Menu />}
    </main>
  );
}
