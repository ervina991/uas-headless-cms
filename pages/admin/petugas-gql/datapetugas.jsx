import React from "react";
import DataPetugas from "../../../components/admin/petugas-gql/DataPetugas";
import AdminLayout from "../../../components/admin/AdminLayout";
import PetugasByKdpetugas from "../../../components/admin/petugas-gql/PetugasByKdpetugas";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datapetugas({petugases}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <PetugasByKdpetugas/>
                    <DataPetugas data={petugases.data}/>
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps({query}) {

    let kdpetugas = query.kdpetugas

    {typeof kdpetugas == 'string' ? kdpetugas = kdpetugas : kdpetugas = ""}
    
    const client = new ApolloClient({
        uri: `http://localhost:1337/graphql`,
        cache: new InMemoryCache()
    })
    const {data} = await client.query({
        query:gql `
        query getAllPetugas{
            petugases(filters:{kdpetugas:{contains:"${kdpetugas}"}}){ 
                data{
                    id
                    attributes{
                        kdpetugas
                        nama
                        nomor_telfon
                    }
                }
            }
        }
        `
    })
    return {props:{petugases :data.petugases}}
}
export default datapetugas;