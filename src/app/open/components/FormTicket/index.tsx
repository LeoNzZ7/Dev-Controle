"use client"

import { Input } from "@/components/Input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const schema = z.object({
    name: z.string().min(1, "O campo nome do chamado é obrigatório"),
    description: z.string().min(1, "O campo descrição do chamado é obrigatório")
})

type FormData = z.infer<typeof schema>

export const FormTicket = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    return (
        <form className="bg-slate-200 mt-6 px-4 py-6 rounded border-2" >
            <label className="mb-2 text-lg font-medium" >Nome do chamado</label>
            <Input
                type="text"
                name="name"
                placeholder="Digite o nome do chamado"
                error={errors.name?.message}
                register={register}
            />
            <label className="mb-2 text-lg font-medium" >Descrição do chamado</label>
            <textarea
                className="w-full border-2 rounded-md h-24 resize-none mb-2 px-2"
                placeholder="Descreva seu problema"
                id="description"
                {...register("description")}
            >
            </textarea>
            {errors.description?.message && (
                <span className="bg-red-500" >
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