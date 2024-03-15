'use client'
import React from 'react';
import Theme from "@/components/button/theme";
import Nav from "@/components/containers/nav/Nav";

export default function Header() {
  return (
    <div className='flex flex-row bg-colo1 gap-2 p-2 bg-color15 '>
      <div>
        <Nav />
      </div>
      <div>
        <Theme />
      </div>
    </div>
  )
}
