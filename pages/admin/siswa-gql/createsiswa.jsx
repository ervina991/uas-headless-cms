
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreateSiswa from '../../../components/admin/siswa-gql/CreateSiswa';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const createsiswa = ({bukus}) => {
    console.log({bukus})
    return (
        <AdminLayout>
            <CreateSiswa data={bukus.data}/>
        </AdminLayout>
    );
};

export async function getServerSideProps() {
    const client = new ApolloClient({
        uri: `http://localhost:1337/graphql`,
        cache: new InMemoryCache()
    })
    const {data} = await client.query({
        query:gql `
        query {
            bukus {
                data {
                    id
                    attributes {
                        buku
                    }
                }
            }
        }
        `
    })
    return {props:{bukus :data.bukus}}
}

export default createsiswa;