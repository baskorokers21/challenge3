import React from 'react'

class Gallery extends React.Component {
    render() {
        return(
            <div id="demo" className="caraousel slide" data-ride="caraousel">
             <center>
                 <ul className="carousel-indicators">
                    <li data-target="#corona" data-slide-to="0" class="active"></li>
                    <li data-target="#corona" data-slide-to="1"></li>
                    <li data-target="#corona" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="corona1.jpg" alt="corona" width="1100" height="500"></img>
                        <div className="carousel-caption">
                            <h3>Corona</h3>
                            <p>Corona sangat berbahaya</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="corona2.jpg" alt="corona" width="1100" height="500"></img>
                        <div className="caraousel-caption">
                            <h3>corona</h3>
                            <p>jangan lupa pakai masker</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="corona3.jpg" alt="corona" width="1100" height="500"></img>
                        <div className="caraosel-caption">
                            <h3>Corona</h3>
                            <p>Jangan lupa patuhi protokol kesehatan</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="caraousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
             </center>
             <center>
                 <h2 Alert-heading>Cara pencegahannya</h2>
                 <p>1.Untuk mencegah penyebaran COVID-19:
                   <p>2.Cuci tangan Anda secara rutin. Gunakan sabun dan air, atau cairan pembersih tangan berbahan alkohol.</p>
                   <p>3.Selalu jaga jarak aman dengan orang yang batuk atau bersin.</p>
                    <p>4.Kenakan masker jika pembatasan fisik tidak dimungkinkan.</p>
                    <p>5.Jangan sentuh mata, hidung, atau mulut Anda.</p>
                    <p>6.Saat batuk atau bersin, tutup mulut dan hidung Anda dengan lengan atau tisu.</p>
                   <p>7.Jangan keluar rumah jika merasa tidak enak badan.</p>
                    <p></p>8.Jika demam, batuk, atau kesulitan bernapas, segera cari bantuan medis.</p>
                 <p></p>
             </center>
            </div>
        )
    }
}

export default Gallery;