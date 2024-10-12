import { Header } from "@/components/Header";
import type { Metadata } from "next";
import './globals.css'
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";

export const metadata: Metadata = {
  title: "Dev Controle - Seu sistema de gerenciamento.",
  description: "Gerencie seus clientes e atendimentos de forma fácil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </AuthProvider>
      </body >
    </html >
  );
}
