import { PrismaAdapter } from "@auth/prisma-adapter"; 
import GoogleProvider from "next-auth/providers/google"
import prismaClient from "./prisma"
import { Adapter } from "next-auth/adapters";
import { Session } from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(prismaClient) as Adapter,
    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ session, user }: { session: Session, user: { id: string } }) {
            session.user = {...session.user, id: user.id } as {
                id: string;
                name: string;
                email: string;
            } 
            
            return session;
        }
    }
}