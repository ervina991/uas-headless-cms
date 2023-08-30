//@ts-check

import React from "react";
import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const UpdatePetugas = () => {
    //Deklarasi state
    const [_kdpetugas, setKdpetugas] = useState('');
    const [_nama, setNama] = useState('');
    const [_nomor_telfon, setNomor_telfon] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id, kdpetugas, nama, nomor_telfon} = router.query;

    useEffect(() => {
        if (typeof kdpetugas == 'string') {
            setKdpetugas(kdpetugas);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof nomor_telfon == 'string') {
            setNomor_telfon(nomor_telfon)
        }
    },[kdpetugas,nama,nomor_telfon])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                    mutation{
                        updatePetugas(id:${id},
                            data:{
                                nama:"${_nama}",
                                nomor_telfon:"${nomor_telfon}"
                            }
                        ){data{id attributes{
                            kdpetugas
                            nama
                            nomor_telfon
                        }}}
                    }`
            })

            alert("Update Petugas Sukses")
            Router.push('/admin/petugas-gql/datapetugas')
        } catch (e) {
            //throw Error (e.message)
            console.log({message: e.message});
        }
    }

return (
    <div>
        <div className="container mt-4">
            <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h1 className="w-75 text-center">Edit Data Petugas</h1>
                <div className="w-75">
                    <div className="form-floating">
                        <input className="form-control mb-2" id="kdpetugas" type="text" placeholder="KDPETUGAS" value={_kdpetugas} onChange={(e) => setKdpetugas(e.target.value)} />
                        <label htmlFor="kdpetugas">KDPETUGAS</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={_nama} onChange={(e) => setNama(e.target.value)}/>
                        <label htmlFor="kdpetugas">Nama</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control mb-2" id="nomor_telfon" type="text" placeholder="Nomor_Telfon" value={_nomor_telfon} onChange={(e) => setNomor_telfon(e.target.value)} />
                        <label htmlFor="kdpetugas">Nomor_telfon</label>
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

export default UpdatePetugas;