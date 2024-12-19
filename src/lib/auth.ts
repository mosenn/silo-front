import apiRequests from "@/app/services/auth/config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    encryption: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },                                                                                                                      
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await apiRequests.post("/auth/login", credentials);

          if (response.status === 201 && response.data) {
            return response.data;
            
          }

          return null;
        } catch (error) {
          console.error("Authorization error:", error.message || error);
          return null; // در صورت بروز خطا
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
