//@ts-check

import React from "react";
import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const UpdateBuku = () => {
    //Deklarasi state
    const [_kdbuku, setKdbuku] = useState('');
    const [_buku,setBuku] = useState('');
    const [_pengarang, setPengarang] = useState('');
    const [_penerbit, setPenerbit] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id, kdbuku, buku, pengarang, penerbit} = router.query;

    useEffect(() => {
        if (typeof kdbuku == 'string') {
            setKdbuku(kdbuku);
        }
        if (typeof buku == 'string') {
            setBuku(buku);
        }
        if (typeof pengarang == 'string') {
            setPengarang(pengarang);
        }
        if (typeof penerbit == 'string') {
            setPenerbit(penerbit)
        }
    },[kdbuku,buku,pengarang,penerbit])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                    mutation{
                        updateBuku(id:${id},
                            data:{
                                buku:"${_buku}",
                                pengarang:"${_pengarang}",
                                penerbit:"${penerbit}"
                            }
                        ){data{id attributes{
                            kdbuku
                            buku
                            pengarang
                            penerbit
                        }}}
                    }`
            })

            alert("Update Buku Sukses")
            Router.push('/admin/buku-gql/databuku')
        } catch (e) {
            //throw Error (e.message)
            console.log({message: e.message});
        }
    }

return (
    <div>
        <div className="container mt-4">
            <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h1 className="w-75 text-center">Edit Data Buku</h1>
                <div className="w-75">
                    <div className="form-floating">
                        <input className="form-control mb-2" id="kdbuku" type="text" placeholder="KDBUKU" value={_kdbuku} onChange={(e) => setKdbuku(e.target.value)} />
                        <label htmlFor="kdbuku">KDBUKU</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="buku" type="text" placeholder="buku" value={_buku} onChange={(e) => setBuku(e.target.value)} />
                        <label htmlFor="kdbuku">Buku</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="pengarang" type="text" placeholder="pengarang" value={_pengarang} onChange={(e) => setPengarang(e.target.value)}/>
                        <label htmlFor="kdbuku">Pengarang</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="penerbit" type="text" placeholder="Program Studi" value={_penerbit} onChange={(e) => setPenerbit(e.target.value)} />
                        <label htmlFor="kdbuku">Penerbit</label>
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

export default UpdateBuku;