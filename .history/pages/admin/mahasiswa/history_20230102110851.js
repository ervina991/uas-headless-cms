import React from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import History from "../../../components/admin/mahasiswa/History";

const History = ({historyMahasiswa})=>{

    return(
        <div>
            <AdminLayout>
                <History mahasiswa={historyMahasiswa.data[0]}/>
            </AdminLayout>
        </div>
    );
};

export async function getServerSideProps({query}){
    const nim = query.nim
    const url = 'http://localhost:1337/api/mahasiswas?filters[nim][$eq]=${nim}&populate=*'
    const res = await fetch(url)
    const historyMahasiswa=await res.json()

    return{
        props :{historyMahasiswa}
    }
}
export default History;