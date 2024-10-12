import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma"

export async function PATCH(request: Request) {
    const session = await getServerSession(authOptions)

    if(!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized"}, { status: 401 })
    }

    const { id } = await request.json();

    const findTicket = await prismaClient.ticket.findFirst({
        where: {
            id: id as string
        }
    })

    if(!findTicket) {
        return NextResponse.json({ error: "Failed update ticket"}, { status: 400 })
    }

    try {
        await prismaClient.ticket.update({
            where: {
                id: id as string
            },
            data: {
                status: findTicket.status === "ABERTO" ? "FECHADO" : "ABERTO"
            }
        })

        return NextResponse.json({ message: "Chamado atualizado com sucesso!", status: 400 })
    } catch (err) {
        return NextResponse.json({ error: "Failed update ticket, ", err}, { status: 400 })
    }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions)

    if(!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized"}, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    console.log(id)

    const findTicket = await prismaClient.ticket.findFirst({
        where: {
            id: id as string
        }
    })

    if(!findTicket) {
        return NextResponse.json({ error: "Failed delete ticket"}, { status: 400 })
    }

    try {
        await prismaClient.ticket.delete({
            where: {
                id: id as string
            }
        })

        return NextResponse.json({ message: "Chamado deletado com sucesso!", status: 400 })
    } catch (err) {
        return NextResponse.json({ error: "Failed delete ticket, ", err}, { status: 400 })
    }
}