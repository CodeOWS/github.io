'use client'

import { useSession, signIn, signOut} from "next-auth/react"

export default function Nav() {
    const {data: session } = useSession();

    if (session) {
        return(
            <div>
                <button onClick={() => signOut()}>Salir</button>
            </div>
        )
    }

    if (!session){
        return(
            <div>
                <button onClick={() => signIn()}>Iniciar</button>
            </div>
        )
    }
}
