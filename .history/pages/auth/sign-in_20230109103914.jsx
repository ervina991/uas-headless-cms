import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import UserLayout from "../../components/user/UserLayout";

export default function signIn(){
    const router = useRouter();

    const onSubmit = async(e)=>{
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        if (result.ok){
            router.replace('/');
            return;
        }
        alert('Credential is not valid');
    };
    return(
        <UserLayout>
            <div className="container mt-5 pt-5">
                <Head>
                    <title>Strapi - Next - NextAuth</title>
                </Head>
                <div className="container">
                    <form className="form-control w-25 mt-4 mx-auto" onSubmit={onSubmit}>
                        <h3>Sign In</h3><hr/>
                        <label htmlFor="email">Email</label>
                        
                    </form>
                </div>
            </div>
        </UserLayout>
    );
}