//@ts-check
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client=new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const CreateSiswa = () => {
    const [kdinduk, setKdinduk] = useState('');
    const [nama, setNama] = useState('');
    const [gender, setGender] = useState('');
    const [kelas, setKelas] = useState('');


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
                        kelas:"${kelas}"
                    })
                    {
                        data{
                            id
                            attributes{
                                kdinduk
                                nama
                                gender
                                kelas
                            }
                        }
                    }
                }`
            })
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    
    const clearInput=()=>{
        setKdinduk('')
        setNama('')
        setGender('')
        setKelas('')
    }


    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Siswa</h1>
                    <div className="w-75">
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