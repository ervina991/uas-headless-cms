import React from "react";
import DataPetugas from "../../../components/admin/petugas-gql/DataPetugas";
import AdminLayout from "../../../components/admin/AdminLayout";
import PetugasByKdpetugas from "../../../components/admin/petugas-gql/PetugasByKdpetugas";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datapetugas({petugass}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <PetugasByKdpetugas/>
                    <DataPetugas data={petugass.data}/>
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
            petugass(filters:{kdpetugas:{contains:"${kdpetugas}"}}){
                data{
                    id
                    attributes{
                        kdpetugas
                        nama
                        no_telfon
                    }
                }
            }
        }
        `
    })
    return {props:{petugass :data.petugass}}
}
export default datapetugas;