import React from "react";
import DataMahasiswa from "../../../components/admin/mahasiswa/DataMahasiswa";
import AdminLayout from "../../../components/admin/AdminLayout";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datamahasiswa({mahasiswas}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <DataMahasiswa data={mahasiswas.data}/>
                </div>
            </AdminLayout>
        </div>
    );
}