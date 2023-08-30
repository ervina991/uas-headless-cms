import Link from "next/link";
import Rect from "react";
//import {useRouter} from 'next/router'

const Card = ({ gambar, dataSis }) => {
  return (
    <div>
      <div className="card bg-success text-white">
        {/* <img src={`/${gambar}`} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{dataSis.nama}</h5>
          <div className="card-text d-block">
            {dataSis.kdinduk}
          </div>
          <div className="card-text d-block">
            {dataSis.gender}
          </div>
          <div className="card-text d-block">
            {dataSis.kelas}
          </div>
          <button className="btn btn-dark mt-4">
          <Link href={{pathname : `/user/petugas`,
                       query : {nim : dataSis.kdinduk, nama: dataSis.nama, angkatan:kelas.angkatan, gender:dataSis.gender} }}>
            {/* <span className="text-white">Transkrip</span> */}
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
