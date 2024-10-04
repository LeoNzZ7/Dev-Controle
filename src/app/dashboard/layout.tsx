import { ReactNode } from "react";
import { Header } from "./components/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
} 