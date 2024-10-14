"use client"

import { Input } from "@/components/Input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FiSearch, FiX } from "react-icons/fi"
import { useState } from "react"
import { FormTicket } from "./components/FormTicket"
import { api } from "@/lib/api"

const schema = z.object({
    email: z.string().email("Digite uma email válido de um cliente cadastrado!").min(1, "O campo email é obrigatório")
})

type FormData = z.infer<typeof schema>

interface CustomerData {
    id: string
    name: string
}

export default function OpenTicket() {
    const [customer, setCustomer] = useState<CustomerData | null>({
        id: "josé",
        name: "josé"
    })

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: ""
        }
    })

    const handleClearCustomer = () => {
        setCustomer(null)
        setValue("email", "")
    }

    async function handleSearchCustomer(data: FormData) {
        const response = await api.get('/api/customer', {
            params: { email: data.email },
        })

        if (response.data === null) {
            setError("email", {
                message: "Cliente não encontrado. Verifique o email digitado.",
                type: "custom"
            })

            return
        }

        setCustomer(response.data)
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-2" >
            <h1 className="font-bold text-3xl text-center mt-24">
                Abrir chamado
            </h1>
            <main
                className="flex flex-col mt-4 mb-2">
                {customer ? (
                    <div className="bg-slate-200 py-6 px-4 rounded border-2 flex justify-between items-center">
                        <p className="text-lg" ><strong>Cliente selecionado:</strong> {customer.name}</p>
                        <button
                            className="px-2 flex items-center justify-center rounded"
                            onClick={handleClearCustomer}
                        >
                            <FiX size={26} color="#dc2626" />
                        </button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(handleSearchCustomer)}
                        className="bg-slate-200 py-6 px-2 rounded border-2" >
                        <div className="flex flex-col gap-3" >
                            <Input
                                name="email"
                                placeholder="Digite o email do cliente..."
                                type="text"
                                error={errors.email?.message}
                                register={register}
                            />
                            <button
                                className="bg-blue-500 flex flex-row gap-4 px-2 h-11 items-center justify-center text-white font-bold rounded hover:bg-blue-600 duration-300" >
                                Procurar cliente
                                <FiSearch size={24} color="#fff" />
                            </button>
                        </div>
                    </form>
                )}

                {customer !== null && <FormTicket />}
            </main>
        </div>
    )
}