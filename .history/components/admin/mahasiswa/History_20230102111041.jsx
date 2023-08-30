export default function History({mahasiswa}) {
// console.log(mahasiswa)
    return(
        <div className="container">
        <h3>History Mahasiswa</h3><hr/>
        
        <div className="row">
            <div className="col-1">NIM</div>
            <div className="col-11">{mahasiswa.attributes.nim}</div>
        </div>
        <div className="row">
            <div className="col-1">NAMA</div>
            <div className="col-11">{mahasiswa.attributes.nama}</div>
        </div>
        <div className="row">
            <div className="col-1">ANGKATAN</div>
            <div className="col-11">{mahasiswa.attributes.angkatan}</div>
        </div>
        <div className="row">
            <div className="col-1">PRODI</div>
            <div className="col-11">{mahasiswa.attributes.prodi}</div>
        </div>        
        </div>
    );  
};