"use client"

import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>; // eslint-disable-line
    error?: string;
    rules?: RegisterOptions;
}

export const Input = ({ name, type, placeholder, register, error, rules }: InputProps) => {
    return (
        <>
            <input
                className="border-2 w-full rounded-md h-11 px-2 "
                placeholder={placeholder}
                type={type}
                {...register(name, rules)}
                id={name}
                autoComplete="off"
            />
            {error && (
                <span className="text-red-500 my-1" >
                    {error}
                </span>
            )}
        </>
    )
}