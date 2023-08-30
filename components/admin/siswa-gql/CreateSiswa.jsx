//@ts-check
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { markAssetError } from "next/dist/client/route-loader";
import SiswaByKdinduk from "./SiswaByNama";

const client=new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const CreateSiswa = ({data}) => {
    const [kdinduk, setKdinduk] = useState('');
    const [nama, setNama] = useState('');
    const [gender, setGender] = useState('');
    const [kelas, setKelas] = useState('');
    const [tgl_pinjam, setTgl_pinjam] = useState ('');
    const [tgl_kembali, setTgl_kembali] = useState ('');
    const [buku, setBuku] = useState('');
    

    const router = useRouter()


    // const getKdindukAndKelas = () =>{
    //     const objKelas = {'11' : 'Teknik Informatika', '31' : 'Manajemen Informatika'}
    //     const kdKelas = kdinduk.substring(0,2)
    //     const kdGender = kdinduk.substring(2,4)

    //     const kelas = objKelas[kdKelas]
    //     const gender = '20'+kdGender

    //     setKelas(kelas)
    //     setGender(gender)

    //     console.log(kelas+',' +kdGender)
    // }

    async function submitHandler(e){
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql`
                mutation{
                    createSiswa(data:{
                        kdinduk:"${kdinduk}",
                        nama:"${nama}",
                        gender:"${gender}",
                        kelas:"${kelas}",
                        tgl_pinjam:"${tgl_pinjam}",
                        tgl_kembali:"${tgl_kembali}",
                        bukus: ["${buku}"]
                    })
                    {
                        data{
                            id
                            attributes{
                                kdinduk
                                nama
                                gender
                                kelas
                                tgl_pinjam
                                tgl_kembali
                                bukus {
                                    data {
                                        id
                                    }
                                }
                            }
                        }
                    }
                }`
            })
            alert("Penambahan Data Sukses")
            router.push('/admin/siswa-gql/datasiswa')
            // clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    
    // const clearInput=()=>{
    //     setKdinduk('')
    //     setNama('')
    //     setGender('')
    //     setKelas('')
    // }


    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Tambah Data Siswa</h1>
                    <div className="w-75">
                        <div className="form-floating mb-2">
                            <select name="" id="" className="form-control" onChange={(e) => setBuku(e.target.value)}>
                                {data.map((items, idx) => (
                                <option key={idx} value={items.id}>{items.attributes.buku}</option>
                                ))}
                            </select>
                            <label htmlFor="buku">Buku</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdinduk"
                                type="text"
                                placeholder="KDINDUK"
                                value={kdinduk}
                                onChange={(e) => setKdinduk(e.target.value)}
                                // onBlur={getKdindukAndKelas}
                            />
                            <label htmlFor="kdinduk">Kode Induk</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nama"
                                type="text"
                                placeholder="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Nama</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="gender"
                                type="text"
                                placeholder="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Gender</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kelas"
                                type="text"
                                placeholder="Kelas"
                                value={kelas}
                                onChange={(e) => setKelas(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Kelas</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="tgl_pinjam"
                                type="date"
                                placeholder="Tanggal Peminjaman"
                                value={tgl_pinjam}
                                onChange={(e) => setTgl_pinjam(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Tanggal Peminjaman</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="tgl_kembali"
                                type="date"
                                placeholder="Tanggal Pengembalian"
                                value={tgl_kembali}
                                onChange={(e) => setTgl_kembali(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Tanggal Pengembalian</label>
                        </div>
                    </div>

                    <div className="w-75 d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateSiswa;