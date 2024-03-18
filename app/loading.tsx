import React from 'react'

export default function loading() {
  return (
    <div className="relative min-h-screen">
      {/* Video de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/Intro.mp4" type="video/mp4" />
        </video>
      </div></div>
  )
}
