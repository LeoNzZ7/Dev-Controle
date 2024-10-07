import { CustomerProps } from "@/utils/customer.type"

export const CardCustomer = ({ customer }: { customer: CustomerProps }) => {
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
                className="bg-red-500 px-4 rounded text-white mt-2 self-start"
            >
                Deletar
            </button>
        </article>
    )
}