"use client"

import { useRouter } from "next/navigation"
import { FiRefreshCcw } from "react-icons/fi"

export const ButtonRefresh = () => {
    const router = useRouter()

    function handleRefreshPage() {
        router.refresh()
    }

    return (
        <button
            className="bg-green-600 px-4 py-1 rounded"
            onClick={handleRefreshPage} >
            <FiRefreshCcw
                size={24}
                color="#FFF" />
        </button>
    )
}