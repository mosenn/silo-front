// const { default: NextAuth } = require("next-auth");

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };



















// import NextAuth from "next-auth/next";
// import AppleProvider from "next-auth/providers/apple";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// const handler = NextAuth({
//     providers:[
//         AppleProvider({
//             clientId: process.env.APPLE_ID,
//             clientSecret: process.env.APPLE_SECRET
//           }),
//         GoogleProvider({
//             clientId :process.env.GOOGLE-ID ,
//             clientSecret: process.env.GOOGLE-SECRET
            
//         }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_ID,
//             clientSecret: process.env.FACEBOOK_SECRET
//           })
//     ]
// })

// export {handler as GET , handler as POST}