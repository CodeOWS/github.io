'use client'

import React from 'react'
import Theme from "@/components/button/theme";
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from 'react';

export default function Menu() {
  const { data: session, status } = useSession();
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center relative ">
      {menuVisible && (
        <div className="bg-black bg-opacity-20 p-20 rounded-lg dark:bg-white dark:bg-opacity-20">
          
          <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3 justify-center text-center text-5xl font-bold text-color17"> <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-color1 to-color4'>Code OWS</h1> </div>
          <div className="col-span-3 justify-center text-center text-1xl font-bold text-color17"> <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-color5 to-color6'>Oganizacion Web Studio</h1> </div>
            {/* Home */}
            <Link href="/home">
              <div className="w-20 h-20">
                <Image
                  src="/Logo.jpg"
                  alt="LogoTipo"
                  priority={true}
                  width={80}
                  height={80}
                  className="hover:opacity-50 p-1 flex rounded-full border-color11 justify-center items-center h-18 w-18"
                  title="Organizacion Web Studio"
                />
                <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color7 to-color8">Inicio</h1>
              </div>

            </Link>
            {/* Login */}
            <Link href="" onClick={() => signIn()} title="Ingresar">
              <div>
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default w-20 h-20 hover:opacity-50">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color9 to-color10">Ingresar</h1>
              </div>
            </Link>
            {/* Contactar */}
            <Link href="/contact" title="Contactar">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-20 h-20 hover:opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color9 to-color10">Contactar</h1>
              </div>
            </Link>
            {/* Novedades */}
            <Link href="/Novedades" title="Nuestro Futuro">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 hover:opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color9 to-color10">Novedades</h1>
            </Link>
            {/* Theme */}
            <div>
              {/* Themes */}
              <Theme />
              <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color9 to-color10">Theme</h1>
            </div>
            {/* Minimizar */}
            <div onClick={toggleMenu} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 hover:opacity-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                />
              </svg>
              <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-color9 to-color10">Ocultar</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
