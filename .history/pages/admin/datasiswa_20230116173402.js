//@ts-check
import React from 'react';
import DataSiswa from '../../components/admin/DataSiswa';
import AdminLayout from '../../components/admin/AdminLayout';
import SiswaByNim from '../../components/admin/siswa/SiswaByNim';

function datasiswa({ siswas }) {

    // let hasil
    // { Array.isArray(data) ? hasil = data : hasil = [data] }

    // console.log(siswas)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <SiswaByNim />
                    <DataSiswa data={siswas.data} />
                </div>
            </AdminLayout>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const nim = query.nim
    //const url = `http://localhost:5000/siswa/${nim}`
    let url = `http://localhost:1337/api/siswas`

    if (typeof nim === 'string') {
        url = `http://localhost:1337/api/siswas?filters[nim][$eq]=${nim}`
    }
    //{ nim === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const siswas = await res.json()

    // Pass data to the page via props
    return { props: { siswas } }
}


export default datasiswa;