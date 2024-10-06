import { Container } from "@/components/Container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { NewCustomerForm } from "../components/Form"

export default async function New() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    return (
        <Container>
            <main className="flex flex-col mt-9 mb-2" >
                <div className="flex items-center gap-3" >
                    <Link
                        className="flex gap-2 bg-gray-900 px-4 py-1 text-white rounded hover:bg-gray-800 duration-300"
                        href="/dashboard/customer"
                    >
                        Voltar
                    </Link>
                    <h1 className="text-3xl font-bold" >
                        Novo Cliente
                    </h1>
                </div>
                <div>
                    <NewCustomerForm />
                </div>
            </main>
        </Container>
    )
}