import { signOu, useSession } from 'next-auth/react';
import Head from 'next/head';
// import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import UserLayout from '../components/user/UserLayout'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const { data: session} =useSession();

  useEffect(()=>{
    if (session=null) return;
    console.log('session.jwt', session.jwt);

  }, [session]);
  return (
    <UserLayout>
      <div className="container mt-4">
        <h1>Home</h1>
        <hr />
        <ul>
        {data.map((dat,idx)=>
          (
            <>
                <li>
                    <Link href={`/user/${dat.nama}`}>
                      <a>{dat.nama}</a>
                    </Link>
                </li>
            </>
          )
        
        )}
        </ul>
      </div>
    </UserLayout>
  )
}
