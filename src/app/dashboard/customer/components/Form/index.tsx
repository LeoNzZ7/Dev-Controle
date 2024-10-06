"use client"

import { useForm } from "react-hook-form"
import { TypeOf, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    name: z.string().min(1, "O campo 'nome' é obrigatório!"),
    email: z.string().email("Digite um email válido").min(1, "O campo 'email' é obrigatório!"),
    phone: z.string().min(1, "O campo 'telefone' é obrigatório!").refine((value) => {
        return /^(\+?\d{1,3}[-.\s]?)?\(?(\d{2,3})\)?[-.\s]?(\d{3,5})[-.\s]?(\d{4})$/.test(value)
    }, {
        message: "O campo 'telefone' deve estar no formato 'DDD' 99999-9999"
    }),
    address: z.string()
})

type FormData = z.infer<typeof schema>

export const NewCustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    return (
        <form>
            <label>
                Nome completo:
            </label>
            <input
                type="text"
                placeholder="Digite o nome completo do cliente..."
            />
        </form>
    )
}