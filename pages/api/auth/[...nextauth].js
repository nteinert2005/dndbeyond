import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "username-login",
      authorize: async (credentials) => {
        try {
          const user = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/newlogin`,
            {
              user: {
                password: credentials.password,
                username: credentials.username,
              },
            },
            {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          );

          if (user) {
            return user.data;
          } else {
            return null;
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  jwt: {
    secret: process.env.SECRET,
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user, token }) {
      //console.log(session);
      const tempUser = await axios.get(
        `${process.env.NEXTAUTH_URL}/api/getuser?id=${token.email}`
      );

      session.user.data = tempUser.data;
      session.user.id = token.id;
      //console.log({session});

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //console.log({ token });

      const tempUser = await axios.get(
        `${process.env.NEXTAUTH_URL}/api/getuser?id=${token.email}`
      );

      //console.log({tempUser});

      token.id = tempUser.data._id;
      return token;
    },
  },
  secret: process.env.SECRET,
});
