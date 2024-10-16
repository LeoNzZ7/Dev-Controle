"use client"

import { Input } from "@/components/Input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { api } from "@/lib/api"
import toast from "react-hot-toast"
import axios from "axios"

const schema = z.object({
    name: z.string().min(1, "Este campo é obrigatório!"),
    description: z.string().min(1, "Este campo é obrigatório!")
})

type FormData = z.infer<typeof schema>

export const FormTicket = ({ customerId, userId }: { customerId: string, userId: string }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    async function handleRegisterTicket(data: FormData) {
        try {
            await api.post("/api/ticket", {
                name: data.name,
                description: data.description,
                customerId: customerId,
                userId: userId,
            })

            setValue("name", "")
            setValue("description", "")

            toast.success("Chamado cadastrado com sucesso!")
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = (error.response.data as { error: string }).error;
                toast.error(errorMessage);
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleRegisterTicket)}
            className="bg-slate-200 mt-6 px-4 py-6 rounded border-2" >
            <label className="mb-2 text-lg font-medium" >Nome do chamado</label>
            <Input
                type="text"
                name="name"
                placeholder="Digite o nome do chamado"
                error={errors.name?.message}
                register={register}
            />
            <label className="mb-2 text-lg font-medium">Descrição do chamado</label>
            <textarea
                className="w-full border-2 rounded-md h-24 resize-none px-2"
                placeholder="Descreva seu problema"
                id="description"
                {...register("description")}
            >
            </textarea>
            {errors.description?.message && (
                <span className="text-red-500 mt-1 mb-4" >
                    {errors.description?.message}
                </span>
            )}
            <button
                type="submit"
                className="bg-blue-500 rounded-md w-full h-11 px-2 text-white font-bold hover:bg-blue-600 duration-300" >
                Criar chamado
            </button>
        </form>
    )
}