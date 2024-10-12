import { Container } from "@/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Ticket } from "./components/Ticket";
import prismaClient from "@/lib/prisma"
import { SearchForm } from "./components/SearchForm";

export default async function Dashboard
    ({ searchParams }: { searchParams: { name?: string, status?: string, date?: string } }) {

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        redirect("/");
    }

    const tickets = await prismaClient.ticket.findMany({
        where: {
            userId: session?.user.id as string,
            status: searchParams.status === "TODOS" ? undefined : searchParams.status || "ABERTO",
            customer: {
                name: {
                    contains: searchParams.name || "",
                    mode: 'insensitive'
                }
            },
            created_at: searchParams.date ? {
                gte: new Date(Date.now() - parseInt(searchParams.date) * 24 * 60 * 60 * 1000)
            } : undefined
        },
        include: {
            customer: true
        },
        orderBy: {
            created_at: "desc"
        }
    });

    return (
        <Container>
            <main
                className="mt-9 mb-2" >
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
                <SearchForm />
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
                {tickets.length === 0 && (
                    <h1 className="text-gray-600 px-2 md:px-0" >
                        Você ainda não tem nenhum chamado aberto...
                    </h1>
                )}
            </main>
        </Container>
    )
}

