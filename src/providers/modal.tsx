"use client"

import { ModalTicket } from "@/components/Modal";
import { createContext, useState, ReactNode } from "react"
import { TicketProps } from "@/utils/ticket.types"
import { CustomerProps } from "@/utils/customer.type"

interface ModalContextData {
    visible: boolean;
    handleModalVisible: () => void;
    ticket: TicketInfo | undefined;
    setDetailsTicket: (details: TicketInfo) => void;
}

interface TicketInfo {
    ticket: TicketProps;
    customer: CustomerProps | null;
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [visible, setVisible] = useState(false)
    const [ticket, setTicket] = useState<TicketInfo>()

    function handleModalVisible() {
        setVisible(!visible)
    }

    function setDetailsTicket(details: TicketInfo) {
        setTicket(details)
    }

    return (
        <ModalContext.Provider value={{ visible, handleModalVisible, ticket, setDetailsTicket }}>
            {visible && <ModalTicket />}
            {children}
        </ModalContext.Provider>
    )
}