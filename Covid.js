import React from  'react' 

class Covid extends React.Component {
    render() {
        return(
            <div className="Alert Alert-info" role="Alert">
                <center>
                    <h2 className="Alert-heading">Covid</h2>
                    <p>
                    Coronavirus atau virus corona merupakan keluarga besar virus yang menyebabkan infeksi saluran pernapasan atas ringan hingga sedang, 
                    seperti penyakit flu. Banyak orang terinfeksi virus ini, 
                    setidaknya satu kali dalam hidupnya.
                    </p>
                    <p>
                    Siapa pun dapat terinfeksi virus corona. Akan tetapi, bayi dan anak kecil, serta orang dengan kekebalan tubuh yang lemah lebih rentan terhadap serangan virus ini. 
                    Selain itu, kondisi musim juga mungkin berpengaruh. Contohnya, di Amerika Serikat, infeksi virus corona lebih umum terjadi pada musim gugur dan musim dingin. 
                    Di samping itu, seseorang yang tinggal atau berkunjung ke daerah atau negara yang rawan virus corona, juga berisiko terserang penyakit ini. Misalnya, berkunjung ke Tiongkok,
                     khususnya kota Wuhan, yang pernah menjadi wabah COVID-19 yang bermulai pada Desember 2019.
                    </p>
                </center>
                <center>
                    <img src="corona4.jpg" alt="corona" width="700" height="343"></img>
                    <div className="carousel-caption">
                    </div>
                </center>
                <center>
                    <p>protokol kesehatan tambahan seperti yang diimbau berikut ini :</p>
                    <p>1. Tetap waspada dan tidak panik.</p>
                    <p>2. Hindari keramaian .</p>
                    <p>3. Gunakan masker di mana saja dan kapan saja bahkan dalam ruangan.</p>
                    <p>4. Ciptakan ruangan dengan ventilasi yang baik seperti, membuka jendela sesering mungkin.</p>
                    <p>5. Tetap jaga kebersihan tangan serta hindari menyentuh bagian wajah sebelum mencuci tangan.</p>
                    <p>6. Selalu terapkan jaga jarak pada aktivitas sehari-hari.</p>
                </center>
            </div>
        )
    }
 }

 export default Covid;