
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreatePetugas from '../../../components/admin/petugas-gql/CreatePetugas';

const createpetugas = () => {
    return (
        <AdminLayout>
            <CreatePetugas />
        </AdminLayout>
    );
};

export default createpetugas;