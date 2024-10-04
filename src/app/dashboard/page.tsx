import { Container } from "@/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Ticket } from "./components/Ticket";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    return (
        <Container>
            <main className="mt-9 mb-2" >
                <div className="flex items-center justify-between" >
                    <h1 className="text-3xl font-bold" >
                        Chamados
                    </h1>
                    <Link
                        className="bg-blue-500 px-4 py-1 rounded text-white "
                        href="/dashboard/new"
                    >
                        Abrir chamado
                    </Link>
                </div>
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
                        <Ticket />
                    </tbody>
                </table>
            </main>
        </Container>
    )
} 