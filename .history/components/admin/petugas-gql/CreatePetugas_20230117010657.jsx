//@ts-check
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client=new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const CreatePetugas = () => {
    const [kdpetugas, setKdpetugas] = useState('');
    const [nama, setNama] = useState('');
    const [no_telfon, setNo_telfon] = useState('');


    // const getKdpetugasAndNo_telfon = () =>{
    //     const objNo_telfon = {'11' : 'Teknik Informatika', '31' : 'Manajemen Informatika'}
    //     const kdNo_telfon = kdpetugas.substring(0,2)
    //     const kdNama = kdpetugas.substring(2,4)

    //     const no_telfon = objNo_telfon[kdNo_telfon]
    //     const nama = '20'+kdNama

    //     setNo_telfon(no_telfon)
    //     setNama(nama)

    //     console.log(no_telfon+',' +kdNama)
    // }
    async function submitHandler(e){
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql`
                mutation{
                    createPetugas(data:{
                        kdpetugas:"${kdpetugas}",
                        nama:"${nama}",
                        no_telfon:"${no_telfon}"
                    })
                    {
                        data{
                            id
                            attributes{
                                kdpetugas
                                nama
                                no_telfon
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
        setKdpetugas('')
        setNama('')
        setNo_telfon('')
    }

    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Petugas</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdpetugas"
                                type="text"
                                placeholder="KDPETUGAS"
                                value={kdpetugas}
                                onChange={(e) => setKdpetugas(e.target.value)}
                                // onBlur={getKdpetugasAndNo_telfon}
                            />
                            <label htmlFor="kdpetugas">Kode Petugas</label>
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
                            <label htmlFor="kdpetugas">Nama</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="no_telfon"
                                type="text"
                                placeholder="No_Telfon"
                                value={no_telfon}
                                onChange={(e) => setNo_telfon(e.target.value)}
                            />
                            <label htmlFor="kdpetugas">No_telfon</label>
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

export default CreatePetugas;