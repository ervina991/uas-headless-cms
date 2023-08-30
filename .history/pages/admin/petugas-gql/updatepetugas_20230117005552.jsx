//@ts-check

import React from "react";
import UpdatePetugas from "../../../components/admin/petugas-gql/UpdatePetugas";
import AdminLayout from "../../../components/admin/AdminLayout";

const updatepetugas = () => {
    return (
        <div>
            <AdminLayout>
                <UpdatePetugas />
            </AdminLayout>
        </div>
    );
}

export default updatepetugas;