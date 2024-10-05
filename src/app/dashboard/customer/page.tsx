import { Container } from "@/components/Container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CardCustomer } from "./components/Card";

export default async function Customer() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    return (
        <Container>
            <main className="mt-9 mb-2" >
                <div className="flex items-center justify-between" >
                    <h1 className="text-3xl font-bold" >
                        Meus clientes
                    </h1>
                    <Link
                        className="bg-blue-500 px-4 py-1 text-white rounded"
                        href="/dashboard/customer/new"
                    >
                        Novo cliente
                    </Link>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3" >
                    <CardCustomer />
                    <CardCustomer />
                    <CardCustomer />
                </section>
            </main>
        </Container>
    )
}