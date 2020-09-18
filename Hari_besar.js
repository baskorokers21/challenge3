import React from 'react'

class Hari_besar extends React.Component {
    render() {
        return(
            <div className="container">
                <h2>info covid</h2>
                <p>berikut ini adalah daftar"nya untuk tanggal 17 september</p>
                <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>sembuh</th>
        <th>perawatan</th>
        <th>meninggal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5402</td>
        <td>15497</td>
        <td>1327</td>
      </tr>
    </tbody>
  </table>
  <h2>ini tambahan :</h2>
          <center>
          <h2 className="Alert-heading">Apakah covid sama dengan SARS</h2>
          <p>Jadi pertama yang harus kita ketahui adalah Apa itu SARS dan Apa itu covid</p>
          <p>SARS adalah Suatu penyakit pernapasan menular dan kadang-kadang fatal yang disebabkan oleh coronavirus.</p>
          <p>Covid adalah Coronavirus atau virus corona merupakan keluarga besar virus yang menyebabkan infeksi saluran pernapasan atas ringan hingga sedang, 
            seperti penyakit flu. Banyak orang terinfeksi virus ini, setidaknya satu kali dalam hidupnya.</p>
          <p>COVID-19 disebabkan oleh SARS-COV2 yang termasuk dalam keluarga besar coronavirus yang sama dengan penyebab SARS pada tahun 2003, hanya berbeda jenis virusnya. 
            Gejalanya mirip dengan SARS, namun angka kematian SARS (9,6%) lebih tinggi dibanding COVID-19 (kurang dari 5%), walaupun jumlah kasus COVID-19 jauh lebih banyak dibanding SARS.
             COVID-19 juga memiliki penyebaran yang lebih luas dan cepat ke beberapa negara dibanding SARS.</p>
          </center>
          <center>
          <img src="grafik.jpg" alt="grafik" weight="500" height="400"></img>
          </center>
          <p>Grafik itu hanya sebagai contoh</p>
            </div>
        )
    }
}

export default Hari_besar;