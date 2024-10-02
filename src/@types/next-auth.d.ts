<<<<<<< HEAD
import { DefaultSession } from "next-auth"

declare module "next-auth" { 
    interface Session {
        user : {
            id: string 
        } & DefaultSession["user"]
    }
}   
=======
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"]
    }
}
>>>>>>> 6034192b79230ed04b8df66e502a52485ecea27e
