'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Nav() {
    const { data: session, status  } = useSession();
    if (session) {
        return (
            <div>
                <button 
                className="rounded-lg text w-16 h-8 bg-color2 text-color17 justify-center 
                hover:bg-color10"
                onClick={() => signOut()}>Salir</button>
            </div>
        )
    }

    if (status === "loading") {
        return (
            <div>
                <button className="rounded-lg p-1 bg-color2 text-color17 justify-center 
                hover:bg-color10" >Cargando ...</button>
            </div>
        )
    }

    if (!session) {
        return (
            <div>
                <button className="rounded-lg text  w-16 h-8 bg-color2 text-color17 justify-center 
                hover:bg-color10" onClick={() => signIn()}>Iniciar</button>
            </div>
        )
    }
}
