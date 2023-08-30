//@ts-check

import React from "react";
import UpdateBuku from "../../../components/admin/buku-gql/UpdateBuku";
import AdminLayout from "../../../components/admin/AdminLayout";

const updatebuku = () => {
    return (
        <div>
            <AdminLayout>
                <UpdateBuku />
            </AdminLayout>
        </div>
    );
}

export default updatebuku;