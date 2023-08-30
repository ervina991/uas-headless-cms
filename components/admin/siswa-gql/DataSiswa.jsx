import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Component, useState } from 'react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const DataSiswa = ({data}) => {
    console.log({data})
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusSiswa(kdinduk, nama) {
        try {
            await client.mutate({
                mutation:gql`
                mutation {
                    deleteSiswa(id:${kdinduk}){
                      data{
                        id
                      }
                    }
                  }
                `
            })
            alert(`${nama} berhasil di hapus`)
            router.push('/admin/siswa-gql/datasiswa')
        } catch (e) {
            // throw Error(e.message)
            alert('gagal')
        }
        //setDeleting(true)
        // try {

        //     const response = await axios.delete(
        //         `http://localhost:1337/api/siswas/${kdinduk}`
        //       );
             
        //       if (response.data.message) {
        //         setMessage(response.data.message);
        //       }

        //     alert(`Siswa dengan KDINDUK ${kdinduk} telah terhapus`)
        // } catch (error) {
        //     console.log({message : error.message});
        // }

        // router.push('/admin/siswa-gql/datasiswa')
      }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <Link href='/admin/siswa-gql/createsiswa'>
                <button className='btn btn-primary my-3'>
                    <a>Tambah</a>
                </button>
            </Link>
            <h3>Data Peminjaman Buku</h3>
            <table className = "table table-hover">
                <thead className='text-center'>
                    <tr>
                        <th>Kode Induk</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Buku</th>
                        <th>Penerbit</th>
                        <th>Tanggal Pinjam</th>
                        <th>Tanggal Kembali</th>
                        <th >Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((sis, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {sis.attributes.kdinduk}
                            </td> 
                            <td>
                                 {sis.attributes.nama}
                            </td>
                            <td> 
                                 {sis.attributes.kelas}
                            </td>
                            <td>{sis.attributes.bukus.data[0].attributes.buku}</td>
                            <td>{sis.attributes.bukus.data[0].attributes.penerbit}</td>
                            <td>
                                {sis.attributes.tgl_pinjam}
                            </td>
                            <td>
                                {sis.attributes.tgl_kembali}
                            </td>
                            {/* <td>
                                <Link href={
                                    {pathname:`/admin/buku-gql/databuku`,
                                        query:{
                                        nama: sis.attributes.buku,
                                        pengarang: sis.attributes.pengarang}
                                    }}>
                                    <a>peminjaman</a>
                                </Link>
                            </td> */}
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/siswa-gql/updatesiswa?id=${sis.id}&kdinduk=${sis.attributes.kdinduk}&nama=${sis.attributes.nama}
                                    &gender=${sis.attributes.gender}&kelas=${sis.attributes.kelas}`}
                                    >
                                        <button className='btn btn-warning'>
                                        <a>Edit</a>
                                        </button>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {sis.kdinduk}
                                        // @ts-ignore
                                        onClick={(e)=>hapusSiswa(sis.id, sis.attributes.nama)}
                                    >
                                            Hapus
                                    </button>
                                </div>
                            </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
     );
}

export default DataSiswa;