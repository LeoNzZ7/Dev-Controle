import Link from "next/link"
import { FiLogOut, FiUser } from "react-icons/fi"

export const Header = () => {
    return (
        <header className="flex w-full items-center px-2 py-4 bg-white h-20 drop-shadow" >
            <div className="w-full max-w-7xl flex justify-between items-center" >
                <Link href="/" >
                    <h1 className="uppercase text-2xl font-bold pl-1 hover:tracking-wider duration-300" >
                        <span className="text-blue-500" >dev</span> controle
                    </h1>
                </Link>
                <nav className="flex items-baseline gap-4" >
                    <Link href="/dashboard" >
                        <FiUser size={24} color="#4B5633" />
                    </Link>
                    <button>
                        <Link href="/dashboard" >
                            <FiLogOut size={24} color="#4b5633" />
                        </Link>
                    </button>
                </nav>
            </div>
        </header>
    )
}