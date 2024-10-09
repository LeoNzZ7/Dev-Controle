import { Container } from "@/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Ticket } from "./components/Ticket";
import prismaClient from "@/lib/prisma"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const tickets = await prismaClient.ticket.findMany({
        where: {
            userId: session?.user.id as string,
            status: "ABERTO",
        },
        include: {
            customer: true
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2" >
                <div className="flex items-center justify-between" >
                    <h1 className="text-3xl font-bold" >
                        Chamados
                    </h1>
                    <Link
                        className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600 duration-300"
                        href="/dashboard/new"
                    >
                        Abrir chamado
                    </Link>
                </div>

                {/* 
                Futura implementação

                <nav>
                    <form
                        className="flex items-center my-5 rounded-md " >
                        <input
                            type="text"
                            className="w-full h-11 rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 duration-300 px-2 rounded-r-none outline-none"
                            placeholder="Buscar pelo nome do cliente"
                            name="name"
                        />
                        <select
                            className="outline-none bg-gray-100 h-11 border-l-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-200 duration-300 cursor-pointer"
                            defaultValue="ABERTO"
                            name="status"
                        >
                            <option selected value="">Todos</option>
                            <option value="ABERTO">Aberto</option>
                            <option value="FECHADO">Fechado</option>
                        </select>
                        <select
                            className="outline-none bg-gray-100 h-11 border-l-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-200 duration-300 cursor-pointer"
                            defaultValue="3"
                            name="date"
                        >
                            <option value="24">Ultimas 24 horas</option>
                            <option value="3">Últimos 3 dias</option>
                            <option selected value="7">Últimos 7 dias</option>
                            <option value="30">Últimos 30 dias</option>
                        </select>
                        <button
                            type="submit"
                            className="h-11 bg-blue-500 px-4 py-2 rounded rounded-l-none text-white hover:bg-blue-600 duration-300 cursor-pointer" >
                            Buscar
                        </button>
                    </form>
                </nav> */}

                <table className="min-w-full my-2" >
                    <thead>
                        <tr>
                            <th className="font-medium text-left pl-2" >Cliente</th>
                            <th className="font-medium text-left" >Cadastro</th>
                            <th className="font-medium text-left" >Status</th>
                            <th className="font-medium text-left" >#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <Ticket
                                ticket={ticket}
                                customer={ticket.customer}
                                key={ticket.id}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </Container>
    )
} 