//@ts-check
import { useState } from "react"
import axios from 'axios'
import React from "react";

const CreateSiswa = () => {
    const [kdinduk, setKdinduk] = useState('');
    const [nama, setNama] = useState('');
    const [gender, setGender] = useState('');
    const [kelas, setKelas] = useState('');
    // const [foto, setFoto] = useState(null);
    // const [selectedFile, setSelectedFile] = useState('');
    // const [file, setFile] = useState('');

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
    const getKdindukAndKelas = ()=>{
        const objKelas = {'11' : 'Teknik Informatika', '31' : 'Manajemen Informatika'}
        const kdKelas = kdinduk.substring(0,2)
        const kdGender = kdinduk.substring(2,4)
        
        const kelas = objKelas[kdKelas]
        const gender = '20' + kdGender
        
        setKelas(kelas)
        setGender(gender)
        
        console.log(kelas + ',' + kdGender)
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post(`http://localhost:1337/api/siswas`, {
                    kdinduk,
                    nama,
                    gender,
                    kelas,
                })
                .then(response => {
                    console.log(response);
                });

           
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setKdinduk('')
        setNama('')
        setGender('')
        setKelas('')
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Siswa</h1>
{/*                     <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
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
                                placeholder="Kode induk"
                                value={kdinduk}
                                onChange={(e) => setKdinduk(e.target.value)}
                                onBlur = {getKdindukAndKelas}
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
                                placeholder="Program Studi"
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