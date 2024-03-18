// components/Invits.tsx
'use client'

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { InviteShema } from "@/shemas/Schema";
import Image from 'next/image';

interface Invite {
    nombre: string;
    email: string;
    linkedin?: string;
    github?: string;
    tlf?: string;
    pais: string;
    rol: string;
}

export const Invits = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<Invite>({ resolver: zodResolver(InviteShema), });
    //
    const onSubmit: SubmitHandler<Invite> = async (data) => {
        console.log(data)
    }
    //
    const [isTyping, setIsTyping] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    // 
    const handleInputChange = () => {
        setIsTyping(true);
    };
    //

    return (
        <div className="container mx-auto px-4 md:px-0 inline-block text-color1 dark:text-color17 bg-color15 p-4 md:p-6 m-2 border-2 border-color10 rounded-2xl shadow-sm shadow-slate-300">
            <div  className="p-2">
                <h1 className="text-4xl sm:text-3xl">¡Únete a nuestra comunidad de desarrolladores!</h1>
                    <br/>
                    <h5 className="text-lg sm:text-xl">Estamos buscando desarrolladores entusiastas Desarrolladores en Python y Reactjs como tú para colaborar en emocionantes proyectos </h5>
                    <h5 className="text-lg sm:text-xl">Si estás interesado en formar parte de nuestra comunidad, completa el formulario a continuación.</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 justify-center justify-items-center'>
                    <div className="mb-2">
                        <label htmlFor="nombre" className=" font-semibold text-center"></label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder='Nombre'
                            {...register("nombre")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.nombre && <p className="text-color17 text-2xl">{errors.nombre.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className=" font-semibold"></label>
                        <input
                            type="text"
                            id="email"
                            placeholder='Correo'
                            {...register("email")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.email && <p className="text-color17 text-2xl">{errors.email.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="linkedin" className=" font-semibold"></label>
                        <input
                            type="text"
                            id="linkedin"
                            placeholder='Linkedin'
                            {...register("linkedin")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.linkedin && <p className="text-color17 text-2xl">{errors.linkedin.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="github" className=" font-semibold"></label>
                        <input
                            type="text"
                            id="github"
                            placeholder='Github'
                            {...register("github")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.github && <p className="text-color17 text-2xl">{errors.github.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tlf" className=" font-semibold"></label>
                        <input
                            type="text"
                            id="tlf"
                            placeholder='Telefono'
                            {...register("tlf")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.tlf && <p className="text-color17 text-2xl">{errors.tlf.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="pais" className=" font-semibold"></label>
                        <input
                            type="text"
                            id="pais"
                            placeholder='Pais'
                            {...register("pais")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        />
                        {errors.pais && <p className="text-color17 text-2xl">{errors.pais.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="rol" className=" font-semibold"></label>
                        <select
                            id="rol"
                            {...register("rol")}
                            onChange={handleInputChange}
                            className="form-input px-4 py-3 rounded-2xl text-color1"
                            disabled
                        >
                            <option value="">Seleccionar Rol</option>
                            <option value="frontend">Frontend Developer</option>
                            <option value="backend">Backend Developer</option>
                            <option value="fullstack">Full-stack Developer</option>
                            <option value="designer">UI/UX Designer</option>
                            <option value="devops">DevOps Engineer</option>
                            <option value="tester">Quality Assurance (QA) Engineer</option>
                            <option value="other">Otro</option>
                            
                        </select>
                        {errors.rol && <p className="text-color17 text-2xl">{errors.rol.message}</p>}
                    </div>
                    <div>
                        {isTyping && (
                            <button
                                type="submit"
                                className="rounded-lg text p-2 bg-color2 text-color17  
                                hover:bg-color10"
                            >
                                Actualizar
                            </button>
                        )}
                    </div>
                </form>
                {response && (
                    <div className=" text-color3">{response}</div>
                )}
            </div>
            <p className="p-2 text-lg">Estamos trabajando ... Actualmente esta Funcion no Esta habilitada</p>
        </div>
    );
}

export default Invits;
