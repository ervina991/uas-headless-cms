import React from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import History from "../../../components/admin/siswa/History";

const history = ({historySiswa})=>{

    return(
        <div>
            <AdminLayout>
                <History siswa={historySiswa.data[0]}/>
            </AdminLayout>
        </div>
    );
};

export async function getServerSideProps({query}){
    const kdinduk = query.kdinduk
    const url = `http://localhost:1337/api/siswas?filters[kdinduk][$eq]=${kdinduk}&populate=*`
    const res = await fetch(url)
    const historySiswa=await res.json()

    return{
        props :{historySiswa}
    }
}
export default history;