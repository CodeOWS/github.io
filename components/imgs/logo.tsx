import Image from "next/image"

export function LogoHeader() {
  return (
    <Image 
    src="/Logo.jpg"
    title="Logo OWS"
    width={60}
    height={60}
    alt="Logo"
    className=" border-solid rounded-full border-collapse"
    />
  )
}
