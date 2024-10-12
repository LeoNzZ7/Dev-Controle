"use client"

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';


export const SearchForm = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('ABERTO');
    const [date, setDate] = useState('3');

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const query = new URLSearchParams({
            ...(name && { name }),
            ...(status && { status }),
            ...(date && { date }),
        }).toString();

        router.push(`/dashboard?${query}`, undefined);
        router.refresh();
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center my-5 rounded-md" method="GET">
            <input
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="w-full h-11 rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 duration-300 px-2 rounded-r-none outline-none"
                placeholder="Buscar pelo nome do cliente"
                name="name"
            />
            <select
                className="outline-none bg-gray-100 h-11 border-l-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-200 duration-300 cursor-pointer"
                name="status"
                value={status}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
            >
                <option value="">Todos</option>
                <option value="ABERTO">Aberto</option>
                <option value="FECHADO">Fechado</option>
            </select>
            <select
                className="outline-none bg-gray-100 h-11 border-l-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-200 duration-300 cursor-pointer"
                name="date"
                value={date}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setDate(e.target.value)}
            >
                <option value="1">Ultimas 24 horas</option>
                <option value="3">Últimos 3 dias</option>
                <option value="7">Últimos 7 dias</option>
                <option value="30">Últimos 30 dias</option>
            </select>
            <button
                type="submit"
                className="h-11 bg-blue-500 px-4 py-2 rounded rounded-l-none text-white hover:bg-blue-600 duration-300 cursor-pointer"
            >
                Buscar
            </button>
        </form>
    );
}