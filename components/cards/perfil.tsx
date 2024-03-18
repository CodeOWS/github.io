'use client'

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';


export default function Perfil() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div>
                <h1> Loanding ...</h1>
            </div>
        )
    }

    if (session) {
        return (
            <div>
                <div>
                    <p>{session?.user.email}</p>
                    <p>{session?.user.name}</p>
                </div>
            </div>
        )
    }

    if (!session) {
        return (
            <div>Debes Inciar Seccion</div>
        )
    }
}
