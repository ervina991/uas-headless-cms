//@ts-check
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client=new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const CreateBuku = () => {
    const [kdbuku, setKdbuku] = useState('');
    const [buku, setBuku] = useState('');
    const [pengarang, setPengarang] = useState('');
    const [penerbit, setPenerbit] = useState('');


    // const getKdbukuAndPenerbit = () =>{
    //     const objPenerbit = {'11' : 'Teknik Informatika', '31' : 'Manajemen Informatika'}
    //     const kdPenerbit = kdbuku.substring(0,2)
    //     const kdPengarang = kdbuku.substring(2,4)

    //     const penerbit = objPenerbit[kdPenerbit]
    //     const pengarang = '20'+kdPengarang

    //     setPenerbit(penerbit)
    //     setPengarang(pengarang)

    //     console.log(penerbit+',' +kdPengarang)
    // }

    async function submitHandler(e){
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql`
                mutation{
                    createBuku(data:{
                        kdbuku:"${kdbuku}",
                        buku:"${buku}",
                        pengarang:"${pengarang}",
                        penerbit:"${penerbit}"
                    })
                    {
                        data{
                            id
                            attributes{
                                kdbuku
                                buku
                                pengarang
                                penerbit
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
        setKdbuku('')
        setBuku('')
        setPengarang('')
        setPenerbit('')
    }


    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Buku</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdbuku"
                                type="text"
                                placeholder="KDBUKU"
                                value={kdbuku}
                                onChange={(e) => setKdbuku(e.target.value)}
                                // onBlur={getKdbukuAndPenerbit}
                            />
                            <label htmlFor="kdbuku">Kode Buku</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="buku"
                                type="text"
                                placeholder="buku"
                                value={buku}
                                onChange={(e) => setBuku(e.target.value)}
                            />
                            <label htmlFor="kdbuku">Buku</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="pengarang"
                                type="text"
                                placeholder="pengarang"
                                value={pengarang}
                                onChange={(e) => setPengarang(e.target.value)}
                            />
                            <label htmlFor="kdbuku">Pengarang</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="penerbit"
                                type="text"
                                placeholder="Program Studi"
                                value={penerbit}
                                onChange={(e) => setPenerbit(e.target.value)}
                            />
                            <label htmlFor="kdbuku">Penerbit</label>
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

export default CreateBuku;