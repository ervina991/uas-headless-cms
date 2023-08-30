//@ts-check

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'


const DataMahasiswa = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusMahasiswa(nim) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:5000/mahasiswa/${nim}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Mahasiswa dengan NIM ${nim} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/mahasiswa/datamahasiswa')
      }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Mahasiswa</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Angkatan</th>
                        <th>Prodi</th>
                        <th>Transkrip</th>
                        <th>Histori</th>
                        <th className='text-center'>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((mhs, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {mhs.attributes.nim}
                            </td>
                            <td>
                                 {mhs.attributes.nama}
                            </td>
                            <td>
                                {mhs.attributes.angkatan}
                            </td>
                            <td> 
                                 {mhs.attributes.prodi}
                            </td>
                            <td>
                                <Link href={
                                    {pathname:'/admin/mahasiswa-gql/transkrip',
                                        query:{nim: mhs.attributes.nim,
                                        nama: mhs.attributes.nama,
                                        angkatan: mhs.attributes.angkatan,
                                        prodi: mhs.attributes.prodi}
                                    }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td>
                            <td>
                                <Link href={
                                    {pathname:'/admin/mahasiswa/history',
                                        query:{nim:mhs.attributes.nim}
                                    }
                                }
                                >
                                    <a>History</a>
                                </Link>
                            </td>

                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/mahasiswa/updatemahasiswa?nim=${mhs.nim}
                                        &nama=${mhs.nama}&angkatan=${mhs.angkatan}
                                        &prodi=${mhs.prodi}`}
                                    >
                                        <a>Edit</a>
                                    </Link>

                                    <Link href={
                                       { pathname : '/admin/updatemahasiswa', 
                                         query : {nim : mhs.nim, nama : mhs.nama, angkatan : mhs.angkatan, prodi : mhs.prodi}
                                       }
                                        }
                                    >
                                        <a>Edit 2</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {mhs.nim}
                                        onClick={(e)=>hapusMahasiswa(e.target.value)}
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

export default DataMahasiswa;