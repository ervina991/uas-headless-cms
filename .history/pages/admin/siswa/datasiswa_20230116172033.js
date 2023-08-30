import React from 'react';
import DataSiswa from '../../../components/admin/siswa/DataSiswa';
import AdminLayout from '../../../components/admin/AdminLayout';
import SiswaByKdinduk from '../../../components/admin/siswa/SiswaByKdinduk';
import { getSession, useSession } from 'next-auth/react';

function datasiswa({ siswas }) {

    //console.log(hasil)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <SiswaByKdinduk />
                    <DataSiswa data={siswas.data} />
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    //check if session exists or not, if not, redirect
    if(session == null){
        return {
            redirect: {mahasiswa
                destination:'/auth/not-authenticated',
                permanent: true,
            },
        };
    }
    // Fetch data from external API
    const kdinduk = context.kdinduk
    //const url = `http://localhost:5000/siswa/${kdinduk}`
    let url = `http://localhost:1337/api/siswas`

    if (typeof kdinduk === 'string') {
        url = `http://localhost:1337/api/siswas?filters[kdinduk]{$eq}=${kdinduk}`
    }
    //{ kdinduk === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const siswas = await res.json()

    // Pass data to the page via props
    return { props: { siswas } }
}
export default datasiswa;