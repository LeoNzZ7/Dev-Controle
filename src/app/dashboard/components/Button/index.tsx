"use client"

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { FiRefreshCcw } from "react-icons/fi"

export const ButtonRefresh = () => {
    const router = useRouter()

    function handleRefreshPage() {
        router.refresh()
        toast.success("Página recarregada!")
    }

    return (
        <button
            className="bg-green-500 hover:bg-green-600 duration-300 px-4 py-1 rounded"
            onClick={handleRefreshPage} >
            <FiRefreshCcw
                size={24}
                color="#FFF" />
        </button>
    )
}