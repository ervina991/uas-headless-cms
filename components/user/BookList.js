import React from 'react'
import Image from 'next/image'
import Agama from '../../public/Foto-frontend/agama.jpg'
import Ipa from '../../public/Foto-frontend/ipa.jpg'
import Kelas1 from '../../public/Foto-frontend/kelas1.jpg'
import Kelas5 from '../../public/Foto-frontend/kelas5.jpg'
import Kelas6 from '../../public/Foto-frontend/kelas6.jpg'
import Mtk from '../../public/Foto-frontend/mtk.jpg'
import Uh from '../../public/Foto-frontend/uh.jpg'
import Uh2 from '../../public/Foto-frontend/uh2.jpg'


function BookList() {
  return (
    <div className='container'>
        <div className="text-center mb-5">
            <h1>List Buku</h1>
        </div>
        <div class="row mb-5 ">
            <div class="col-md-4">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Agama</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Agama}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Buku Kelas 1</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Kelas1}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Ilmu Pengetahuan Alam</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Ipa}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div> 
        </div>
        <div class="row mb-5 ">
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Buku Kelas 6</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Kelas6}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Buku Kelas 5</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Kelas5}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Matematika</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Mtk}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div> 
        </div>
        <div class="row mb-5 ">
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Buku Ulangan Harian</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Uh}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Buku Ulangan Harian 2</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Uh2}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div>
            <div class="col-md-4 ">
                <div className="card p-3">
                    <div className="card-title">
                        <h3>Agama</h3> 
                    </div>
                    <div className="card-body">
                        <Image
                            src={Agama}
                            alt="img"
                        />
                    </div>
                    <button className="btn btn-primary w-50 mx-auto">Detail</button>
                </div>  
            </div> 
        </div>
    </div>
  )
}

export default BookList