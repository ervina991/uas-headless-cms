import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})


const DataBuku = ({data}) => {
    console.log({data})
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusBuku(kdbuku) {
        try {
            await client.mutate({
                mutation:gql`
                mutation {
                    deleteBuku(id:${kdbuku}){
                      data{
                        id
                      }
                    }
                  }
                `
            })
            alert(`Petugas berhasil di hapus`)
            router.push('/admin/buku-gql/databuku')
        } catch (e) {
            alert('gagal')
        }
    }
    return ( 
        <div style={{marginLeft : "50px"}}>
            <Link href='/admin/buku-gql/createbuku'>
                <button className='btn btn-primary my-3 w-0 '>
                    <a>Tambah</a>
                </button>
            </Link>
            <h3>Data Buku</h3>
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Kode Buku</th>
                        <th>Buku</th>
                        <th>Pengarang</th>
                        <th>Penerbit</th>
                        <th className='text-center'>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((buk, idx) => (
                    <tr key ={idx}>
                            <td>
                                {buk.attributes.kdbuku}
                            </td>
                            <td>
                                 {buk.attributes.buku}
                            </td>
                            <td>
                                {buk.attributes.pengarang}
                            </td>
                            <td> 
                                 {buk.attributes.penerbit}
                            </td>
                            <td>
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link href={`/admin/buku-gql/updatebuku?id=${buk.id}&kdbuku=${buk.attributes.kdbuku}&buku=${buk.attributes.buku}
                                    &pengarang=${buk.attributes.pengarang}&penerbit=${buk.attributes.penerbit}`}
                                    >
                                        <button className='btn btn-warning'>
                                        <a>Edit</a>
                                        </button>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {buk.kdbuku}
                                        onClick={(e) => hapusBuku(buk.id)}
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

export default DataBuku;