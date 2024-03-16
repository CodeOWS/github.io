import Image from "next/image"

export function LogoHeader() {
  return (
    <Image 
    src="/Logo.jpg"
    title="Logo OWS"
    width={1024}
    height={1024}
    alt="Logo"
    className=" border-solid rounded-full w-10 h-10 border-collapse"
    />
  )
}
