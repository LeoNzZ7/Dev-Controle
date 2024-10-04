import { Container } from "@/components/Container"
import Link from "next/link"


export const Header = () => {
    return (
        <Container>
            <header className="w-full bg-gray-900 my-4 p-3 rounded flex gap-4" >
                <Link
                    className="text-white hover:font-bold duration-200"
                    href="/dashboard" >
                    Chamados
                </Link>
                <Link
                    className="text-white hover:font-bold duration-200"
                    href="/dashboard/customer" >
                    Clientes
                </Link>
            </header>
        </Container>
    )
}