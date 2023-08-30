//@ts-check

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'


const DataSiswa = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusSiswa(kdinduk) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/api/siswa/${kdinduk}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Siswa dengan KDINDUK ${kdinduk} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/siswa-gql/datasiswa')
      }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Siswa</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>KDINDUK</th>
                        <th>Nama</th>
                        <th>Gender</th>
                        <th>Kelas</th>
                        {/* <th>Transkrip</th>
                        <th>Histori</th> */}
                        <th className='text-center'>Action</th>
                        
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
                                {sis.attributes.gender}
                            </td>
                            <td> 
                                 {sis.attributes.kelas}
                            </td>
                            {/* <td>
                                <Link href={
                                    {pathname:`/admin/siswa-gql/transkrip`,
                                        query:{kdinduk: sis.attributes.kdinduk,
                                        nama: sis.attributes.nama,
                                        gender: sis.attributes.gender,
                                        kelas: sis.attributes.kelas}
                                    }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td>
                            <td>
                                <Link href={
                                    {pathname:'/admin/siswa/history',
                                        query:{kdinduk:sis.attributes.kdinduk}
                                    }}
                                >
                                    <a>History</a>
                                </Link>
                            </td> */}

                            <td>
                                <div className="d-flex justify-content-between">
                                    {/* <Link href={`/admin/siswa/updatesiswa?kdinduk=${sis.kdinduk}
                                        &nama=${sis.nama}&gender=${sis.gender}
                                        &kelas=${sis.kelas}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link> */}

                                    <Link href={
                                       { pathname : '/admin/siswa-gql/updatesiswa', 
                                         query : {kdinduk : sis.kdinduk, nama : sis.nama, gender : sis.gender, kelas : sis.kelas}
                                       }
                                        }
                                    >
                                        <a>Edit-GraphQL</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {sis.kdinduk}
                                        // @ts-ignore
                                        onClick={(e)=>hapusSiswa(e.target.value)}
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