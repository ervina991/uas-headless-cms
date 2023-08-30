

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'


const DataSiswa = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusSiswa(nim) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/siswa/${nim}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Siswa dengan NIM ${nim} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/datasiswa')
      } 
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Siswa</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Angkatan</th>
                        <th>Prodi</th>
                        
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
                                <div className="d-flex justify-content-between">
                                    {<Link href={`/admin/siswa/updatesiswa?id=${mhs.id}&nim=${mhs.attributes.nim}
                                        &nama=${mhs.attributes.nama}&angkatan=${mhs.attributes.angkatan}
                                        &prodi=${mhs.attributes.prodi}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link>}

                                    <Link href={
                                       { pathname : '/admin/updatesiswa', 
                                         query : {id : mhs.id,
                                            nim : mhs.attributes.nim, 
                                            nama : mhs.attributes.nama, 
                                            angkatan : mhs.attributes.angkatan, 
                                            prodi : mhs.attributes.prodi}
                                       }
                                        }
                                    >
                                        <a>Edit-GrapQL</a>
                                    </Link>
                                    
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {mhs.nim}
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