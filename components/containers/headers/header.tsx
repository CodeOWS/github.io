'use client'
import React from 'react';
import Theme from "@/components/button/mini_theme";
import Nav from "@/components/containers/nav/Nav";
import { LogoHeader } from "@/components/imgs/logo";

export default function Header() {
  return (
    <div className='flex bg-colo1 gap-2 p-2 bg-color15 justify-between bg-opacity-20'>
      <div className='flex flex-row'>
        <div className='flex justify-items-start'>
          <LogoHeader />
        </div>
      </div>
      <div>
        
      </div>
      <div className='flex flex-row gap-2 justify-items-end'>
        <div>
          <Nav />
        </div>
        <div>
          <Theme />
        </div>
      </div>
    </div>
  )
}
