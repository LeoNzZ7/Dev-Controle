"use client"

import { api } from "@/lib/api"
import { CustomerProps } from "@/utils/customer.type"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const CardCustomer = ({ customer }: { customer: CustomerProps }) => {
    const router = useRouter()

    async function handleDeleteCustomer() {
        try {
            await api.delete("/api/customer", {
                params: {
                    id: customer.id
                }
            })

            router.refresh()
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Erro:', err.message);
                toast.error(`Ocorreu um erro: ${err.message}`);
            } else if (typeof err === 'object' && err !== null && 'json' in err) {
                try {
                    const errorData = await (err as any).json();
                    console.error('Erro da API:', errorData.message);
                    toast.error(`Erro da API: ${errorData.message}`);
                } catch (jsonError) {
                    console.error('Erro ao processar resposta da API:', jsonError);
                    toast.error('Ocorreu um erro ao processar a resposta do servidor');
                }
            } else {
                console.error('Erro desconhecido:', err);
                toast.error('Ocorreu um erro desconhecido');
            }
        }
    }

    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300" >
            <h2>
                <a className="font-bold">Nome: </a>
                {customer.name}
            </h2>
            <p>
                <a className="font-bold">Email: </a>
                {customer.email}
            </p>
            <p>
                <a className="font-bold">Telefone: </a>
                {customer.phone}
            </p>
            {customer.address && (
                <p>
                    <a className="font-bold">Endereço: </a>
                    {customer.address}
                </p>
            )}
            <button
                className="bg-red-500 hover:bg-red-600 duration-300 px-4 rounded text-white mt-2 self-end"
                onClick={() => {
                    toast((t) => (
                        <div className="flex flex-col " >
                            <span className="font-bold" >
                                tem certeza que deseja deletar esse cliente?
                            </span>
                            <div className="flex gap-2 w-full rounded" >
                                <button
                                    className="w-full bg-green-500 hover:bg-green-600 duration-300 rounded text-white font-bold"
                                    onClick={() => toast.dismiss(t.id)} >
                                    Não
                                </button>
                                <button
                                    className="w-full border-l border-gray-500 bg-red-500 hover:bg-red-600 duration-300 rounded text-white font-bold"
                                    onClick={() => {
                                        handleDeleteCustomer()
                                        toast.dismiss(t.id)
                                    }}>
                                    Sim
                                </button>
                            </div>
                        </div>
                    ));
                }}
            >Deletar usuário</button>
        </article>
    )
}