//@ts-check

import React from "react";
import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const UpdateSiswa = () => {
    //Deklarasi state
    const [_kdinduk, setKdinduk] = useState('');
    const [_nama,setNama] = useState('');
    const [_gender, setGender] = useState('');
    const [_kelas, setKelas] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id, kdinduk, nama, gender, kelas} = router.query;

    useEffect(() => {
        if (typeof kdinduk == 'string') {
            setKdinduk(kdinduk);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof gender == 'string') {
            setGender(gender);
        }
        if (typeof kelas == 'string') {
            setKelas(kelas)
        }
    },[kdinduk,nama,gender,kelas])

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            await client.mutate({
                mutation: gql`
                    mutation{
                        updateSiswa(id:${id},
                            data:{
                                nama:"${_nama}",
                                gender:"${_gender}",
                                kelas:"${kelas}"
                            })
                            {
                                data{
                                    id
                                }
                            }
                    }
                `
            })

            alert("Update Siswa Sukses")
            Router.push('/admin/siswa-gql/datasiswa')
        } catch (e) {
            //throw Error (e.message)
            console.log({message: e.message});
        }
    }

return (
    <div>
        <div className="container mt-4">
            <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h1 className="w-75 text-center">Edit Data Siswa</h1>
                <div className="w-75">
                    <div className="form-floating">
                        <input className="form-control mb-2" id="kdinduk" type="text" placeholder="KDINDUK" value={_kdinduk} onChange={(e) => setKdinduk(e.target.value)} />
                        <label htmlFor="kdinduk">KDINDUK</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
                        <label htmlFor="kdinduk">Nama</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="gender" type="text" placeholder="gender" value={_gender} onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="kdinduk">Gender</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="kelas" type="text" placeholder="Program Studi" value={_kelas} onChange={(e) => setKelas(e.target.value)} />
                        <label htmlFor="kdinduk">Kelas</label>
                    </div>
                <div className="w-75 d-flex flex-row-reverse">
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
                
                </div>
            </form>
        </div>
    </div>
);
}

export default UpdateSiswa;