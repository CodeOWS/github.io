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
    <div className="h-screen flex items-center justify-center relative shadow-2xl">
      {menuVisible && (
        <div className="bg-black bg-opacity-20 p-20 rounded-lg">
          <div className="grid grid-cols-3 gap-10">
            {/* Home */}
            <Link href="/">
              <div className="w-20 h-20">
                <Image
                  src="/Logo.jpg"
                  alt="LogoTipo"
                  width={80}
                  height={80}
                  className="hover:opacity-50 p-1 flex rounded-full border-color11 justify-center items-center h-18 w-18"
                  title="Organizacion Web Studio"
                />
              </div>
            </Link>
            {/* Login */}
            <Link href="" onClick={() => signIn()} title="Ingresar">
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </Link>
            {/* Contactar */}
            <Link href="" title="Contactar">
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
              </div>
            </Link>
            {/* Futuro */}
            <Link href="" title="Nuestro Futuro">
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
            </Link>
            {/* Theme */}
            <div>
              {/* Themes */}
              <Theme />
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
