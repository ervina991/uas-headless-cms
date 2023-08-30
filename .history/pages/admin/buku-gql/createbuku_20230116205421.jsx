
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreateBuku from '../../../components/admin/buku-gql/CreateBuku';

const createbuku = () => {
    return (
        <AdminLayout>
            <CreateBuku />
        </AdminLayout>
    );
};

export default createbuku;