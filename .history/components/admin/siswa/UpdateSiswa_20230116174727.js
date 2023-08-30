//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";
import React from "react";

const UpdateSiswa = () => {
    //Deklarasi state
    const [_kdinduk, setKdinduk] = useState('');
    const [_nama, setNama] = useState('');
    const [_gender, setGender] = useState('');
    const [_kelas, setKelas] = useState('');
    // const [_foto, setFoto] = useState(null);
    // const [selectedFile, setSelectedFile] = useState('');
    // const [file, setFile] = useState('');

    // mengambil data yang dikrim melalui router
    const router = useRouter();
    const { kdinduk, nama, gender, kelas } = router.query;

    useEffect(() => {
        if (typeof kdinduk == 'string') {
            setKdinduk(kdinduk);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof gender == 'string') {
            setGender(gender)
        }
        if (typeof kelas == 'string') {
            setKelas(kelas)
        }
    }, [kdinduk, nama, gender, kelas])

/*     const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        const _file = e.target.files[0];

        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)
    }
 */
    const submitHandler = async (e) => {
        e.preventDefault()
        // setSubmitting(true)
        try {

            axios
            .put(`http://localhost:1337/api/siswas?filters[kdinduk][$eq]=${_kdinduk}`, {
                kdinduk: _kdinduk,
                nama: _nama,
                gender: _gender,
                kelas: _kelas,
            })

            /*  .put(`http://localhost:5000/siswa/${_kdinduk}`, {
                    kdinduk: _kdinduk,
                    nama: _nama,
                    gender: _gender,
                    kelas: _kelas,
                })
 */                .then(response => {
                    console.log(response);
                });

            alert("Update Data Sukses")
            Router.push('/admin/siswa/datasiswa')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-bold text-center mb-3">Edit Data Siswa</h1>

{/*                     <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style={{
                                    background: "gray",
                                    width: "100px", height: "100px"
                                }} />
                        </label>
                        <input
                            id="uploadGambar"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />
                    </div>
 */}
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdinduk"
                                type="text"
                                placeholder="KDINDUK"
                                value={_kdinduk}
                                onChange={(e) => setKdinduk(e.target.value)}
                            />
                            <label htmlFor="kdinduk">KDINDUK</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nama"
                                type="text"
                                placeholder="nama"
                                value={_nama}
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
                                value={_gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Gender</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kelas"
                                type="text"
                                placeholder="Program Studi"
                                value={_kelas}
                                onChange={(e) => setKelas(e.target.value)}
                            />
                            <label htmlFor="kdinduk">Program Studi</label>
                        </div>

                        <div className="d-flex flex-row-reverse">
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateSiswa;