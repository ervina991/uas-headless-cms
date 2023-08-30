

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'


const DataBuku = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusBuku(kdbuku) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/buku/${kdbuku}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Buku dengan KDBUKU ${kdbuku} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/databuku')
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
                                <div className="d-flex justify-content-between">
                                    {<Link href={`/admin/buku/updatebuku?id=${buk.id}&kdbuku=${buk.attributes.kdbuku}
                                        &buku=${buk.attributes.buku}&pengarang=${buk.attributes.pengarang}
                                        &penerbit=${buk.attributes.penerbit}`}
                                    >
                                        <a>Edit-RestApi</a>
                                    </Link>}

                                    <Link href={
                                       { pathname : '/admin/updatebuku', 
                                         query : {id : buk.id,
                                            kdbuku : buk.attributes.kdbuku, 
                                            buku : buk.attributes.buku, 
                                            pengarang : buk.attributes.pengarang, 
                                            penerbit : buk.attributes.penerbit}
                                       }
                                        }
                                    >
                                        <a>Edit-GrapQL</a>
                                    </Link>
                                    
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {buk.kdbuku}
                                        onClick={(e)=>hapusBuku(e.target.value)}
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