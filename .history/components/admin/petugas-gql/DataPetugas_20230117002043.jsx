//@ts-check

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'


const DataBuku = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusBuku(kdbuku) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/api/bukus/${kdbuku}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Buku dengan KDBUKU ${kdbuku} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/buku-gql/databuku')
      }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Buku</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>KDBUKU</th>
                        <th>Buku</th>
                        <th>Pengarang</th>
                        <th>Penerbit</th>
                        {/* <th>Transkrip</th>
                        <th>Histori</th> */}
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
                            {/* <td>
                                <Link href={
                                    {pathname:`/admin/buku-gql/transkrip`,
                                        query:{kdbuku: buk.attributes.kdbuku,
                                        buku: buk.attributes.buku,
                                        pengarang: buk.attributes.pengarang,
                                        penerbit: buk.attributes.penerbit}
                                    }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td>
                            <td>
                                <Link href={
                                    {pathname:'/admin/buku/history',
                                        query:{kdbuku:buk.attributes.kdbuku}
                                    }}
                                >
                                    <a>History</a>
                                </Link>
                            </td> */}

                            <td>
                                <div className="d-flex justify-content-between">
                                    {/* <Link href={`/admin/buku/updatebuku?kdbuku=${buk.kdbuku}
                                        &buku=${buk.buku}&pengarang=${buk.pengarang}
                                        &penerbit=${buk.penerbit}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link> */}

                                    <Link href={`/admin/buku-gql/updatebuku?id=${buk.id}&kdbuku=${buk.attributes.kdbuku}&buku=${buk.attributes.buku}
                                    &pengarang=${buk.attributes.pengarang}&penerbit=${buk.attributes.penerbit}`}
                                    >
                                        <a>Edit-GraphQL</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {buk.kdbuku}
                                        // @ts-ignore
                                        onClick={(e)=>hapusBuku(buk.id,buk.attributes.kdbuku)}
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