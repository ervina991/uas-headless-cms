//@ts-check

import UpdateMahasiswa from "../../components/admin/UpdateMahasiswa"
import AdminLayout from "../../components/admin/AdminLayout";
import React from "react";
const updatemahasiswa = () => {
    return ( 
        <div>
            <AdminLayout>
                <UpdateMahasiswa />
            </AdminLayout>
        </div>
     );
}
 
export default updatemahasiswa;