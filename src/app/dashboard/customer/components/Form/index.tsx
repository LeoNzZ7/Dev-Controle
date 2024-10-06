"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/Input"

const schema = z.object({
    name: z.string().min(1, "O campo 'nome' é obrigatório!"),
    email: z.string().email("Digite um email válido").min(1, "O campo 'email' é obrigatório!"),
    phone: z.string()
        .min(11, "O número de telefone deve ter pelo menos 11 dígitos, incluindo DDD")
        .regex(/^(\+\d{1,3}\s?)?\d{2}\s?\d{8,9}$/, 'Formato inválido. Exp: (DDI opcional)  99 99999-9999 ')
        .transform((val) => {
            const cleaned = val.replace(/\D/g, '');
            const match = cleaned.match(/^(\d{1,3})?(\d{2})(\d{5})(\d{4})$/);
            if (match) {
                const [, ddi, ddd, parte1, parte2] = match;
                return ddi
                    ? `+${ddi} (${ddd}) ${parte1}-${parte2}`
                    : `(${ddd}) ${parte1}-${parte2}`;
            }
            return val;
        }),
    address: z.string()
})

type FormData = z.infer<typeof schema>

export const NewCustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    function handleRegisterCustomer(data: FormData) {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(handleRegisterCustomer)}
            className="flex flex-col mt-6" >
            <label className="mb-1 text-lg font-medium" >
                Nome completo:
            </label>
            <Input
                type="text"
                name="name"
                placeholder="Digite o nome completo do cliente..."
                register={register}
                error={errors.name?.message}
            />
            <section className="flex gap-2 mt-2 flex-col sm:flex-row" >
                <div className="flex-1" >
                    <label className="mb-1 text-lg font-medium" >
                        Email:
                    </label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Digite o email do cliente..."
                        register={register}
                        error={errors.email?.message}
                    />
                </div>
                <div className="flex-1" >
                    <label className="text-lg font-medium" >
                        Telefone
                    </label>
                    <Input
                        type="text"
                        name="phone"
                        placeholder="Digite o telefone do cliente..."
                        register={register}
                        error={errors.phone?.message}
                    />
                </div>
            </section>
            <label className="text-lg font-medium" >
                Endereço:
            </label>
            <Input
                type="text"
                name="address"
                placeholder="Digite o endereço completo do cliente..."
                register={register}
                error={errors.address?.message}
            />
            <button
                className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold"
                type="submit"
            >
                Cadastrar
            </button>
        </form>
    )
}