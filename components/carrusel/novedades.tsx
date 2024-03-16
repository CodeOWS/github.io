'use client'

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const NovedadesCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

    return (
        <div className="overflow-hidden embla" ref={emblaRef}>
            <div className="flex embla__container">
                <div className=" flex-none w-full embla__slide p-2 ">
                    <Image 
                        src="/claro.jpeg"
                        alt="Imagen 1"
                        width={800}
                        height={800}
                        
                        className="object-cover rounded-lg w-full h-1/3 border-4 border-color12"
                    />
                    <div>
                        <h1>Proximamente ...</h1>
                        <p>Proyecto de Agenda y Citas </p>
                    </div>
                </div>
                <div className="flex-none w-full embla__slide p-2">
                    <Image 
                        src="/oscuro.jpeg"
                        alt="Imagen 2"
                        width={800}
                        height={800}
                        
                        className="object-cover rounded-lg w-full h-1/3 border-4 border-color12"
                    />
                </div>
                <div className="flex-none w-full embla__slide p-2">
                    <Image 
                        src="/claro.jpeg"
                        alt="Imagen 3"
                        width={800}
                        height={800}
                        
                        className="object-cover rounded-lg w-full h-1/3 border-4 border-color12"
                    />
                </div>
            </div>
        </div>
    );
}

export default NovedadesCarousel;