//@ts-check

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'


const DataPetugas = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusPetugas(kdpetugas) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/api/petugass/${kdpetugas}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Petugas dengan KDPETUGAS ${kdpetugas} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/petugas-gql/datapetugas')
      }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Petugas</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>KDPETUGAS</th>
                        <th>Nama</th>
                        <th>No_telfon</th>
                        {/* <th>Transkrip</th>
                        <th>Histori</th> */}
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
                                 {pgs.attributes.no_telfon}
                            </td>
                            {/* <td>
                                <Link href={
                                    {pathname:`/admin/petugas-gql/transkrip`,
                                        query:{kdpetugas: pgs.attributes.kdpetugas,
                                        petugas: pgs.attributes.petugas,
                                        nama: pgs.attributes.nama,
                                        no_telfon: pgs.attributes.no_telfon}
                                    }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td>
                            <td>
                                <Link href={
                                    {pathname:'/admin/petugas/history',
                                        query:{kdpetugas:pgs.attributes.kdpetugas}
                                    }}
                                >
                                    <a>History</a>
                                </Link>
                            </td> */}

                            <td>
                                <div className="d-flex justify-content-between">
                                    {/* <Link href={`/admin/petugas/updatepetugas?kdpetugas=${pgs.kdpetugas}
                                        &petugas=${pgs.petugas}&nama=${pgs.nama}
                                        &no_telfon=${pgs.no_telfon}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link> */}

                                    <Link href={`/admin/petugas-gql/updatepetugas?id=${pgs.id}&kdpetugas=${pgs.attributes.kdpetugas}
                                    &nama=${pgs.attributes.nama}&no_telfon=${pgs.attributes.no_telfon}`}
                                    >
                                        <a>Edit-GraphQL</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {pgs.kdpetugas}
                                        // @ts-ignore
                                        onClick={(e)=>hapusPetugas(pgs.id,pgs.attributes.kdpetugas)}
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