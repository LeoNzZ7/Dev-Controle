<<<<<<< HEAD
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
=======
import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export {  handler as GET, handler as POST }
>>>>>>> 6034192b79230ed04b8df66e502a52485ecea27e
