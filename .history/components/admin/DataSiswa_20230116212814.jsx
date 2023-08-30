

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'


const DataSiswa = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusSiswa(kdinduk) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/siswa/${kdinduk}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Siswa dengan KDINDUK ${kdinduk} telah terhapus`)
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
                        <th>KDINDUK</th>
                        <th>Nama</th>
                        <th>Gender</th>
                        <th>Kelas</th>
                        
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
                            <td>
                                <div className="d-flex justify-content-between">
                                    {<Link href={`/admin/siswa/updatesiswa?id=${sis.id}&kdinduk=${sis.attributes.kdinduk}
                                        &nama=${sis.attributes.nama}&gender=${sis.attributes.gender}
                                        &kelas=${sis.attributes.kelas}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link>}

                                    <Link href={
                                       { pathname : '/admin/updatesiswa', 
                                         query : {id : sis.id,
                                            kdinduk : sis.attributes.kdinduk, 
                                            nama : sis.attributes.nama, 
                                            gender : sis.attributes.gender, 
                                            kelas : sis.attributes.kelas}
                                       }
                                        }
                                    >
                                        <a>Edit-GrapQL</a>
                                    </Link>
                                    
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {sis.kdinduk}
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