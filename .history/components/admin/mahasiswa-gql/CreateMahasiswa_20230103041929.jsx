import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client=new ApolloClient({
    uri: `http://localhost:1337/graphql`,
    cache: new InMemoryCache()
})

async function submitHandler(e){
    e.preventDefault()
    try {
        await client.mutate({
            mutation:gql`
            mutation{
                createMahasiswa(data:{
                    nim:``${nim}``,
                    nama:``${nama}``,
                    angkatan:``${angkatan}``,
                    prodi:``${prodi}``
                })
                {
                    data{
                        id
                        attributes{
                            nim
                            nama
                            angkatan
                            prodi
                        }
                    }
                }
            }`
        })
        alert("Penambahan Data Sukses")
        clearInput()
    } catch (e){
        throw Error(e.message)
    }
}