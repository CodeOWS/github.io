'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function Nav() {
    const { data: session, status  } = useSession();
    const router = useRouter();
    // 
    const handleGoBack = () => {
        router.back();
    }
    // 

    if (session) {
        return (
            <div className="flex flex-row gap-2 items-center">
                <div>
                <Image
                        src={session?.user.image ?? ""}
                        alt="Foto Perfil"
                        width={60}
                        height={60}
                        className="rounded-full border-4 border-color6 dark:border-color15 "
                    />
                </div>
                <div>
                    <Link href="/dashboard/perfil" className="rounded-lg text p-3 bg-color2 text-color17 justify-center 
                hover:bg-color10">{session.user.name}</Link>
                </div>
                <div>
                <button className="rounded-lg text  p-2 bg-color2 text-color17 justify-center 
                hover:bg-color10" onClick={handleGoBack} style={{ cursor: 'pointer' }} >Retrocerder</button>
                </div>
                <div>
                <button 
                className="rounded-lg text p-2 bg-color2 text-color17 justify-center 
                hover:bg-color10"
                onClick={() => signOut()}>Salir</button>
                </div>
            </div>
        )
    }

    if (status === "loading") {
        return (
            <div>
                <button className="rounded-lg p-2 bg-color2 text-color17 justify-center 
                hover:bg-color10 " >Cargando ...</button>
            </div>
        )
    }

    if (!session) {
        return (
            <div className="flex flex-row gap-2">
                <div>
                <button className="rounded-lg text  p-2 bg-color2 text-color17 justify-center 
                hover:bg-color10" onClick={handleGoBack} style={{ cursor: 'pointer' }} >Retrocerder</button>
                </div>
                <div>
                <button className="rounded-lg text  p-2 bg-color2 text-color17 justify-center 
                hover:bg-color10" onClick={() => signIn()}>Iniciar</button>
                </div>
            </div>
        )
    }
}
