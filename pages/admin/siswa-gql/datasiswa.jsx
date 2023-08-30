import React from "react";
import DataSiswa from "../../../components/admin/siswa-gql/DataSiswa";
import AdminLayout from "../../../components/admin/AdminLayout";
import SiswaByNama from "../../../components/admin/siswa-gql/SiswaByNama";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datasiswa({siswas}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <SiswaByNama/>
                    <DataSiswa data={siswas.data}/>
                </div>
            </AdminLayout>
        </div>
    );
}
export async function getServerSideProps({query}) {

    let nama = query.nama

    {typeof nama == 'string' ? nama = nama : nama= ""}
    
    const client = new ApolloClient({
        uri: `http://localhost:1337/graphql`,
        cache: new InMemoryCache()
    })
    const {data} = await client.query({
        query:gql `
        query {
            siswas (filters:{nama:{contains:"${nama}"}}){
            data{
              id
              attributes{
                kdinduk
                nama
                gender
                kelas
                tgl_pinjam
                tgl_kembali
                bukus {
                  data {
                    id
                    attributes {
                      buku
                      pengarang
                      penerbit
                    }
                  }
                }
              }
            }
          }
        }
        `
    })
    return {props:{siswas :data.siswas}}
}
export default datasiswa;
