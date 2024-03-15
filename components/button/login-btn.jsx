//import { useSession, signIn, signOut } from "next-auth/react"

'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function ButtonAuth() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <>
        Hola {session.user.name} <br />
        <button onClick={() => signOut()}>Salir</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Ingresar</button>
    </>
  )
}