import React from "react";
import DataBuku from "../../../components/admin/buku-gql/DataBuku";
import AdminLayout from "../../../components/admin/AdminLayout";
import BukuByKdbuku from "../../../components/admin/buku-gql/BukuByKdbuku";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function databuku({bukus}){
    console.log({bukus})
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <BukuByKdbuku/>
                    <DataBuku data={bukus.data}/>
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps({query}) {

    // let kdbuku = query.kdbuku

    // {typeof kdbuku == 'string' ? kdbuku = kdbuku : kdbuku = ""}
    
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    const {data} = await client.query({
        query:gql `
        query {
            bukus {
              data {
                id
                attributes {
                  kdbuku
                  buku
                  pengarang
                  penerbit
                }
              }
            }
          }
        `
    })
    return {props:{bukus :data.bukus}}
}
export default databuku;