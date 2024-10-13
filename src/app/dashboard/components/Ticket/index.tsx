"use client"

import { CustomerProps } from "@/utils/customer.type"
import { TicketProps } from "@/utils/ticket.types"
import { FiCheckSquare, FiFile, FiTrash2 } from "react-icons/fi"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { ModalContext } from "@/providers/modal"
import toast from "react-hot-toast"

interface TicketItemProps {
    ticket: TicketProps
    customer: CustomerProps | null
}

export const Ticket = ({ ticket, customer }: TicketItemProps) => {
    const { handleModalVisible, setDetailsTicket } = useContext(ModalContext)

    const router = useRouter()

    async function handleChangeStatus() {
        try {
            await api.patch("/api/ticket", {
                id: ticket.id,
            })

            router.refresh()
        } catch (err) {
            console.log(err)
        }
    }

    async function handleDeleteTicket() {
        try {
            await api.delete("/api/ticket", {
                params: {
                    id: ticket.id
                }
            })

            router.refresh()
        } catch (err) {
            console.log(err)
        }
    }

    function handleOpenModal() {
        setDetailsTicket({
            ticket,
            customer
        })
        handleModalVisible()
    }

    return (
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-50 hover:bg-gray-100 duration-300" >
                <td className="text-left pl-1" >
                    {customer?.name}
                </td>
                <td className="text-left" >
                    {ticket.created_at?.toLocaleDateString("pt-br")}
                </td>
                <td className="text-left" >
                    <span
                        style={{ backgroundColor: ticket.status === "FECHADO" ? "#ef4444" : "#22c55e" }}
                        className="px-2 py-1 rounded-lg" >
                        {ticket.status}
                    </span>
                </td>
                <td className="text-left">
                    <button
                        onClick={handleOpenModal}
                        className="mr-2"
                    >
                        <FiFile size={24} color="#3b82f6" />
                    </button>
                    <button
                        onClick={handleChangeStatus}
                        className="mr-2"
                    >
                        <FiCheckSquare size={24} color="#131313" />
                    </button>
                    <button
                        onClick={() => {
                            toast((t) => (
                                <div className="flex flex-col " >
                                    <span className="font-bold" >
                                        tem certeza que deseja deletar esse chamado?
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
                                                handleDeleteTicket()
                                                toast.dismiss(t.id)
                                            }}>
                                            Sim
                                        </button>
                                    </div>
                                </div>
                            ));
                        }}
                    >
                        <FiTrash2 size={24} color="#ef4444" />
                    </button>
                </td>
            </tr>
        </>
    )
}