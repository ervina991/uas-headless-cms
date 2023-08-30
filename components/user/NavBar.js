//@ts-check

import Link from 'next/link'
import Script from 'next/script'
import React from 'react';

const NavBar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Perpustakaan Melati</a>
                    <input type="text" placeholder="Search.."></input>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li> 
                        <li className="nav-item">
                          <Link href="/user/datasiswa">
                            <a className="nav-link">Data Siswa</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/">
                            <a className="nav-link">Informasi</a>
                          </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
        </div>
     );
}
 
export default NavBar;