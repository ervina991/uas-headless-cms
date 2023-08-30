
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreateSiswa from '../../../components/admin/siswa-gql/CreateSiswa';

const createsiswa = () => {
    return (
        <AdminLayout>
            <CreateSiswa />
        </AdminLayout>
    );
};

export default createsiswa;