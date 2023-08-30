import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import {signIn} from '../../../services/auth'

export default NextAuth({
    //configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Sign in  with Email',
            Credentials:{
                email:{label:'Email', type:'text'},
                password:{label:'Password', type:'password'},
            },
            async authorize(Credentials, req){
                //cek user apakah ter-authentikasi atau tidak
                if (Credentials==null) return null;

                try{
                    const {user, jwt} = await signIn({
                        email: Credentials.email,
                        password:Credentials.password,
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