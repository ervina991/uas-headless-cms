import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SiswaByKdinduk(props) {
    const [kdinduk, setKdinduk] = useState('')
    const router = useRouter()

    function submitHandler(e) {
        e.preventDefault();
        router.push({
            pathname: '/admin/siswa-gql/datasiswa',
            query: { 'kdinduk': kdinduk }
        })
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col col-lg-8"></div>
                    <div className="col col-lg-4 d-flex flex-reverse">
                        <input type="text"
                            className="form-control mw-50"
                            placeholder="cari dengan KDINDUK"
                            value={kdinduk}
                            onChange={(e) => setKdinduk(kdinduk => e.target.value)}
                        />
                        <input type="submit" value=" Cari " className="btn btn-primary ms-2 fs-6" 
                        style={{width : '75px'}} />
                    </div>
                </div>
            </form>
        </div>
    );
}
