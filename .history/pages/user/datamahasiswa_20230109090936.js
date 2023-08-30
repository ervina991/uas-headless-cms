
import DataMahasiswa from '../../components/user/DataMahasiswa';

import UserLayout from '../../components/user/UserLayout';

export default function datamahasiswa({mahasiswas}) {
    //tambahkan ini untuk menampilkan apakah sudah tersambung dengan strapi. coba di cek dengan inspect console
    console.log(mahasiswas);
    
    return (
        <div>
            <UserLayout>
                <div className="container">
                   {/*< DataMahasiswa data = {mahasiswas} />*/}
                </div>
            </UserLayout>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:1337/api/mahasiswas`)
    const mahasiswas = await res.json()
  
    // Pass data to the page via props
    return { props: { mahasiswas } }
  }
  

//export default datamahasiswa;