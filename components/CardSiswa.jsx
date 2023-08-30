import React from "react";

const CardSiswa = ({dataSis}) => {
    return (
        <div>
            <div className="card card-hover bg-secondary text-white">
                <div className="card-body">
                    <h5 className="card-title">{dataSis.nama}</h5>
                    <div className="d-block">
                        <div className="d-inline-block" style={{width : '100px'}}>Kdinduk</div>
                        :
                        <div className="d-inline-block ms-2">
                            {dataSis.kdinduk}
                        </div>
                    </div>
                </div>
                <div className="d-block">
                    <div className="d-inline-block" style={{width : '100px'}}>gender</div>
                    :
                    <div className="d-inline-block ms-2">
                        {dataSis.gender}
                    </div>
                </div>
                <div className="d-block">
                    <div className="d-inline-block" style={{width:'100px'}}>kelas</div>
                    :
                    <div className="d-inline-block ms-2">
                        {dataSis.kelas}
                    </div>
                </div>         
            </div>
        </div>
    );
};

export default CardSiswa;