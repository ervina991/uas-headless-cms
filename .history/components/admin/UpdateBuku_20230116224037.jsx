//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";
import React from "react";

const UpdateBuku = () => {
    //Deklarasi state
    const [_kdbuku, setKdbuku] = useState('');
    const [_buku, setBuku] = useState('');
    const [_pengarang, setPengarang] = useState('');
    const [_penerbit, setPenerbit] = useState('');
    

    // mengambil data yang dikrim melalui router
    const router = useRouter();
    const { kdbuku, buku, pengarang, penerbit } = router.query;

    useEffect(() => {
        if (typeof kdbuku == 'string') {
            setKdbuku(kdbuku);
        }
        if (typeof buku == 'string') {
            setBuku(buku)
        }
        if (typeof pengarang == 'string') {
            setPengarang(pengarang)
        }
        if (typeof penerbit == 'string') {
            setPenerbit(penerbit)
        }
    }, [kdbuku, buku, pengarang, penerbit])


    const submitHandler = async (e) => {
        e.preventDefault()
        // setSubmitting(true)
        try {
            axios
                .put(`http://localhost:1337/api/bukus?filters[kdbuku][$eq]=${_kdbuku}`, {
                    kdbuku: _kdbuku,
                    buku: _buku,
                    pengarang: _pengarang,
                    penerbit: _penerbit,
                })
                .then(response => {
                    console.log(response);
                });

            alert("Update Data Sukses")
            Router.push('/admin/databuku')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-bold text-center mb-3">
                        Edit Data Buku
                    </h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdbuku"
                                type="text"
                                placeholder="KDBUKU"
                                value={_kdbuku}
                                onChange={(e) => setKdbuku(e.target.value)}
                            />
                            <label htmlFor="kdbuku">KDBUKU</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="buku"
                                type="text"
                                placeholder="buku"
                                value={_buku}
                                onChange={(e) => setBuku(e.target.value)}
                            />
                            <label htmlFor="buku">Buku</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="pengarang"
                                type="text"
                                placeholder="pengarang"
                                value={_pengarang}
                                onChange={(e) => setPengarang(e.target.value)}
                            />
                            <label htmlFor="pengarang">Pengarang</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="penerbit"
                                type="text"
                                placeholder="Program Studi"
                                value={_penerbit}
                                onChange={(e) => setPenerbit(e.target.value)}
                            />
                            <label htmlFor="penerbit">Penerbit</label>
                        </div>

                        <div className="d-flex flex-row-reverse">
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Update
                            </button>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateBuku;