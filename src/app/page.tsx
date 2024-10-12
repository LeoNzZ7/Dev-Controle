import Image from "next/image";
import heroSvg from "@/assets/hero.svg"

export default function Home() {
  return (
    <main
      className="flex min-h-[calc(100vh-80px)] items-center justify-center flex-col" >
      <h1 className="font-medium text-2xl mb-2" >Gerencie sua empresa</h1>
      <h2 className="font-bold text-3xl md:text-4xl mb-8 text-blue-500" >Atendimento e clientes</h2>
      <Image
        src={heroSvg}
        alt="Imagem de um rapaz de suporte do cliente"
        width={300}
        className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}
