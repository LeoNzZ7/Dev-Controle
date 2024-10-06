"use client"

import Link from "next/link"
import { FiLoader, FiLogIn, FiLogOut, FiUser } from "react-icons/fi"
import { signIn, signOut, useSession } from "next-auth/react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { MdDashboard } from "react-icons/md"

export const Header = () => {
    const { status } = useSession()

    async function handleLogin() {
        await signIn()
    }

    async function handleLogout() {
        await signOut()
    }

    return (
        <header className="flex w-full items-center px-2 py-4 bg-white h-20 drop-shadow" >
            <div className="w-full max-w-7xl flex justify-between items-center m-auto" >
                <Link href="/" >
                    <h1 className="uppercase text-2xl font-bold pl-1 hover:tracking-wider duration-300" >
                        <span className="text-blue-500" >dev</span> controle
                    </h1>
                </Link>
                <nav>
                    {status === 'loading' && (
                        <FiLoader size={28} color="#4b5563" className="animate-spin" />
                    )}
                    {status === 'unauthenticated' && (
                        <button onClick={handleLogin} >
                            <FiLogIn size={28} color="#4b5563" />
                        </button>
                    )}
                    {status === "authenticated" && (
                        <Menu >
                            <MenuButton>
                                <FiUser size={28} color="#4b5563" />
                            </MenuButton>
                            <MenuItems
                                anchor="bottom end"
                                className="bg-slate-100 w-[160px] rounded-[6px] flex items-center justify-center flex-col mt-1 drop-shadow border border-slate-300"
                            >
                                <MenuItem>
                                    <Link
                                        href="/dashboard"
                                        className="flex justify-between w-full hover:bg-slate-200 px-1 py-2 transition-colors border-b border-slate-200">
                                        Painel
                                        <MdDashboard
                                            color="#4b5563"
                                            size={24}
                                        />
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={handleLogout}
                                        className="flex justify-between w-full hover:bg-slate-200 px-1 py-2 transition-colors">
                                        Sair
                                        <FiLogOut
                                            color="#4b5563"
                                            size={24}
                                        />
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    )}
                </nav>
            </div>
        </header>
    )
}