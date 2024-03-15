import Image from "next/image";
import ButtonAuth from "@/components/button/login-btn"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonAuth />
    </main>
  );
}
