import React from "react";
import DataSiswa from "../../../components/admin/siswa/DataSiswa";
import AdminLayout from "../../../components/admin/AdminLayout";
import SiswaByKdinduk from "../../../components/admin/siswa-gql/SiswaByKdinduk";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datasiswa({siswas}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <SiswaByKdinduk/>
                    <DataSiswa data={siswas.data}/>
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps(query) {

    let kdinduk = query.kdinduk

    {typeof kdinduk == 'string' ? kdinduk = kdinduk : kdinduk = "1"}
    
    const client = new ApolloClient({
        uri: `http://localhost:1337/graphql`,
        cache: new InMemoryCache()
    })
    const {data} = await client.query({
        query:gql `
        query getAllSiswa{
            siswas(filters:{kdinduk:{contains:"${kdinduk}"}}){
                data{
                    id
                    attributes{
                        kdinduk
                        nama
                        gender
                        kelas
                    }
                }
            }
        }
        `
    })
    return {props:{siswas :data.siswas}}
}
export default datasiswa;