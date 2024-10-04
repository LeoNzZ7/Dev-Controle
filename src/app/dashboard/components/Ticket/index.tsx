import { FiFile, FiTrash } from "react-icons/fi"

export const Ticket = () => {
    return (
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-50 hover:bg-gray-100 duration-300" >
                <td className="text-left pl-1" >
                    Mercado Silva
                </td>
                <td className="text-left" >
                    23/04/2024
                </td>
                <td className="text-left" >
                    <span className="bg-green-500 px-2 py-1 rounded-lg" >
                        Aberto
                    </span>
                </td>
                <td className="text-left">
                    <button className="mr-2" >
                        <FiTrash size={24} color="#ef4444" />
                    </button>
                    <button>
                        <FiFile size={24} color="#3b82f6" />
                    </button>
                </td>
            </tr>
        </>
    )
}