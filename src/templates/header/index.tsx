import NavigateLinks from "@/components/Navigate";
import Link from "next/link";

export default function Header() {
    return (
        <header className="text-pri-50 h-16 p-1 font-sans"> 
          <div className= "h-full px-2 py-2 flex items-center justify-between">
            <div className=" flex flex-col items-start justify-center flex-1 px-6 h-full">
              <h1 className="text-lg leading-none font-bold">Paulo Soares</h1>
              <p className="text-sm leading-none font-extralight">Prof. de Física</p>
            </div>
            <nav className="flex items-center justify-between gap-3 h-full ">
              <div className= "px-6 py-2 duration-200 hover:text-pri-450"><NavigateLinks label = 'Início' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Serviços' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Sobre' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Planos' href="/"></NavigateLinks></div>
              <button className= "px-6 py-2 rounded-2xl duration-200 bg-pri-500 hover:bg-pri-450 hover:text-sec-450"><NavigateLinks label='Contato' href='./'></NavigateLinks></button>
            </nav>
          </div>
        </header>
    )
  }
  