import styles from '../styles/search.module.css';
import floricultura from '../img/assets/floricultura.jpg';
import estrela from '../img/assets/estrela.jpg';
import coração from '../img/assets/heart.jpg';
import {MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

function SearchArea() {


   return (
      <main className={styles.container}>

         {/* PRINCIPAL CONTENT */}
         <section className={styles.content}>

            {/* BANNER */}
            <div className={styles.banner}>
               <h2 className={styles.title}>
                  Encontre o comércio mais proxímo de <br /> você aqui.
               </h2>
               <label>

                  <input placeholder="Busque aqui..." />
                  <button>   </button>


               </label>
               <div>
                  <button>Tipo de comércio</button>
                  <button>Preços</button>
                  <button>Pacotes</button>
               </div>
            </div>
            {/* COMMERCES */}
            <div className={styles.content_commerce}>
               <h2>
                  Localize aqui os comércios da sua preferência
               </h2>

               <div className={styles.card}>
                  <div className={styles.box_image}>
                     <img src={floricultura} />
                  </div>
                  <div className={styles.box_info}>
                     <p className={styles.category}>Floricultura</p>

                     <h2 className={styles.title}>Floricultura do Ed</h2>
                     <div className={styles.box_stars}>
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />

                     </div>

                     <p className={styles.street}>Rua: Alameda das begonias</p>
                     <p className={styles.street_number}>Número: 1120</p>

                  </div>
                  <div className={styles.heart}>
                     <img src={coração} />
                  </div>
               </div>


               <div className={styles.card}>
                  <div className={styles.box_image}>
                     <img src={floricultura} />
                  </div>
                  <div className={styles.box_info}>
                     <p className={styles.category}>Floricultura</p>

                     <h2 className={styles.title}>Floricultura do Ed</h2>
                     <div className={styles.box_stars}>
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />

                     </div>

                     <p className={styles.street}>Rua: Alameda das begonias</p>
                     <p className={styles.street_number}>Número: 1120</p>

                  </div>
                  <div className={styles.heart}>
                     <img src={coração} />
                  </div>
               </div>

               <div className={styles.card}>
                  <div className={styles.box_image}>
                     <img src={floricultura} />
                  </div>
                  <div className={styles.box_info}>
                     <p className={styles.category}>Floricultura</p>

                     <h2 className={styles.title}>Floricultura do Ed</h2>
                     <div className={styles.box_stars}>
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />

                     </div>

                     <p className={styles.street}>Rua: Alameda das begonias</p>
                     <p className={styles.street_number}>Número: 1120</p>

                  </div>
                  <div className={styles.heart}>
                     <img src={coração} />
                  </div>
               </div>

               <div className={styles.card}>
                  <div className={styles.box_image}>
                     <img src={floricultura} />
                  </div>
                  <div className={styles.box_info}>
                     <p className={styles.category}>Floricultura</p>

                     <h2 className={styles.title}>Floricultura do Ed</h2>
                     <div className={styles.box_stars}>
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />
                        <img src={estrela} />

                     </div>

                     <p className={styles.street}>Rua: Alameda das begonias</p>
                     <p className={styles.street_number}>Número: 1120</p>

                  </div>
                  <div className={styles.heart}>
                     <img src={coração} />
                  </div>
               </div>
            </div>



         </section>

         {/* MAP */}
         <section className={styles.container_map}>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }}>
               <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[51.505, -0.09]}>
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>


         </section>


      </main>



   );

}

export default SearchArea;