import React from 'react';
import DataMahasiswa from '../../../components/admin/mahasiswa/DataMahasiswa';
import AdminLayout from '../../../components/admin/AdminLayout';
import MahasiswaByNim from '../../../components/admin/mahasiswa/MahasiswaByNim';
import { getSession, useSession } from 'next-auth/react';

function datamahasiswa({ mahasiswas }) {

    //console.log(hasil)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataMahasiswa data={mahasiswas.data} />
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    //check if session exists or not, if not, redirect
    if(session=null){
        return{
            redirect:{
                destination:'/auth/authenticated',
                permanent: true,
            },
        };
    }
    // Fetch data from external API
    const nim = context.nim
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    let url = `http://localhost:1337/api/mahasiswas`

    if (typeof nim === 'string') {
        url = `http://localhost:1337/api/mahasiswas?filters[nim]{$eq}=${nim}`
    }
    //{ nim === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const mahasiswas = await res.json()

    // Pass data to the page via props
    return { props: { mahasiswas } }
}


export default datamahasiswa;