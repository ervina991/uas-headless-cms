import Link from 'next/link'
import React from 'react'

function ContentHome() {
  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center'>
        <div>
            <h1>Selamat Datang di Perpustakaan</h1>
            <p>Perpustakaan Melati ini merupakan website untuk para Siswa</p>
            <Link href='/admin/siswa-gql/datasiswa'>
                <a className="btn btn-primary btn-lg">Dashboard</a>
            </Link>
        </div>
    </div>

  )
}

export default ContentHome