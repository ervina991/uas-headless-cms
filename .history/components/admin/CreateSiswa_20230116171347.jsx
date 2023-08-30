import { useState } from "react"
import axios from 'axios'

const CreateSiswa = () => {
    const [kdinduk, setKdinduk] = useState('');
    const [nama, setNama] = useState('');
    const [gender, setGender] = useState('');
    const [kelas, setKelas] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:1337/api/siswas", {
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
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdinduk"
                                type="text"
                                placeholder="KDINDUK"
                                value={kdinduk}
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