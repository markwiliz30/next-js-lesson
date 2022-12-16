import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';

// goto http://localhost:3000/api/auth/signin you dont need to create the signin route
// goto http://localhost:3000/api/auth/signout you dont need to create the signout route

export default NextAuth({
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    database: process.env.DB_URL, 
    session: {
      // strategy: "jwt",
      jwt: true
    },
    jwt: {
      secret: 'alalalalalalal',
    },
    callbacks: {
      async jwt({token, user}){
        if(user){
          token.id = user.id
        }
        return token
      },
      async session({session, token}){
        session.user.id = token.id
        return session
      }
    }
  })