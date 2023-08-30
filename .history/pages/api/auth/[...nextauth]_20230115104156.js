import NextAuth from "next-auth/next";
import CredentialProvider from 'next-auth/providers/credentials';
import {signIn} from '../../../services/auth'
export default NextAuth({
    //configure one or more authentication providers
    providers: [
        CredentialProvider({
            name: 'Sign in  with Email',
            credentials:{
                email:{label:'Email', type:'text'},
                password:{label:'Password', type:'password'},
            },
            async authorize(credentials, req){
                //cek user apakah ter-authentikasi atau tidak
                if (credentials=null) return null;

                try{
                    const {user, jwt} = await signIn({
                        email: credentials.email,
                        password:credentials.password,
                    });
                    return { ...user, jwt};
                } catch(error){
                    //sign in fail
                    return null;
                }
            },
        }),
    ],
    session:{maxAge:2*60}, //2menit
    callbacks:{
        session: async({session, token})=>{
            session.id = token.id;
            session.jwt = token.jwt;
            return Promise.resolve(session);
        },
        jwt: async({token, user})=>{
            const isSignIn = user ? true : false;
            if (isSignIn){
                token.id = user.id;
                token.jwt = user.jwt;

            }
            return Promise.resolve(token);
        },
    },
});