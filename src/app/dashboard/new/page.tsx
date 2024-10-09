import { Container } from "@/components/Container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import prismaClient from "@/lib/prisma"

export default async function NewTicket() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const customers = await prismaClient.customer.findMany({
        where: {
            userId: session.user.id,
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2" >
                <div className="flex items-center gap-3" >
                    <Link href="/dashboard" className="text-white px-4 py-1 rounded bg-gray-900" >
                        Voltar
                    </Link>
                    <h1 className="text-3xl font-bold" >
                        Novo Chamado
                    </h1>
                </div>
                <form className="flex flex-col mt-6 " >
                    <label className="mb-1 font-medium text-lg" >
                        Nome do chamado:
                    </label>
                    <input
                        type="text"
                        placeholder="Digite o nome do chamado..."
                        required
                        className="w-full border-2 rounded-md px-2 mb-2 h-11"
                    />
                    <label className="mb-1 font-medium text-lg" >
                        Descreva o problema:
                    </label>
                    <textarea
                        placeholder=" Descreva o problema..."
                        required
                        className="w-full border-2 rounded-md px-2 mb-2 h-24 resize-none"
                    >
                    </textarea>
                    <label className="mb-1 font-medium text-lg" >
                        Selecione o cliente:
                    </label>
                    {customers.length !== 0 ? (
                        <select
                            className="w-full border-2 rounded-md px-2 mb-2 h-11 bg-white"
                            required
                        >
                            <option value="" disabled selected >Selecione um cliente...</option>
                            {customers && customers.map((customer) => (
                                <option value={customer.id} key={customer.id}>{customer.name}</option>
                            ))}
                        </select>
                    ) : (
                        <span>
                            Você não possui clientes cadastrados. Cadastre um novo cliente
                            <Link
                                href="/dashboard/customer/new"
                                className="text-blue-500 hover:text-blue-700"
                            > aqui
                            </Link>.
                        </span>
                    )}
                    <button
                        className="bg-blue-500 text-white font-bold px-2 h-11 rounded-md my-4 hover:bg-blue-600 duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={customers.length === 0}
                    >
                        Cadastrar Chamado
                    </button>
                </form>
            </main>
        </Container>
    )
}