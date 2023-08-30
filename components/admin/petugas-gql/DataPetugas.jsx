//@ts-check

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const DataPetugas = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusPetugas(kdpetugas, nama) {
        // setDeleting(true)
        try {
            await client.mutate({
                mutation:gql`
                mutation {
                    deletePetugas(id:${kdpetugas}){
                      data{
                        id
                      }
                    }
                  }
                `
            })
            alert(`Petugas ${nama} berhasil di hapus`)
            router.push('/admin/petugas-gql/datapetugas')
        } catch (e) {
            // throw Error(e.message)
            alert('gagal')
        }

    }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <Link href='/admin/petugas-gql/createpetugas'>
                <button className='btn btn-primary my-3'>
                    <a>Tambah</a>
                </button>
            </Link>
            <h3>Data Petugas</h3>
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Kode Petugas</th>
                        <th>Nama</th>
                        <th>Nomor Telephone</th>
                        <th className='text-center'>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((pgs, idx) => (
                    <tr key ={idx}>                
                            <td>
                                {pgs.attributes.kdpetugas}
                            </td>
                            <td>
                                 {pgs.attributes.nama}
                            </td>
                            <td>
                                {pgs.attributes.nomor_telfon}
                            </td>
                            <td>
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link href={`/admin/petugas-gql/updatepetugas?id=${pgs.id}&kdpetugas=${pgs.attributes.kdpetugas}&nama=${pgs.attributes.nama}
                                    &no_telpon=${pgs.attributes.no_telfon}`}
                                    >
                                        <button className='btn btn-warning'>
                                        <a>Edit</a>
                                        </button>
                                    </Link>
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {pgs.kdpetugas}
                                        onClick={(e) => hapusPetugas(pgs.id, pgs.attributes.nama)}
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

export default DataPetugas;