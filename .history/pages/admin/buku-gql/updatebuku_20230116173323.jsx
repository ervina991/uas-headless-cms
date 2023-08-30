//@ts-check

import React from "react";
import UpdateSiswa from "../../../components/admin/siswa-gql/UpdateSiswa";
import AdminLayout from "../../../components/admin/AdminLayout";

const updatesiswa = () => {
    return (
        <div>
            <AdminLayout>
                <UpdateSiswa />
            </AdminLayout>
        </div>
    );
}

export default updatesiswa;