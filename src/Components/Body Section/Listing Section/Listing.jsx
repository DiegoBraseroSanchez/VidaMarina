import React from 'react'
import './listing.css'

//Iconos
import {BsArrowRightShort} from 'react-icons/bs'
import {BsFillBalloonHeartFill} from 'react-icons/bs'
import {HiOutlineHeart} from 'react-icons/hi'

//Imagenes
import img from '../../../Assets/pexels-lone-jensen-2156316.jpg'
import img2 from '../../../Assets/pexels-enrique-grisales-2109800.jpg'
import img3 from '../../../Assets/pexels-andreas-l-3626111.jpg'
import img4 from '../../../Assets/pexels-jeffry-surianto-17801533 (1).jpg'

//Usuarios
import users1 from '../../../Assets/pexels-andrea-piacquadio-774909.jpg'
import users2 from '../../../Assets/CURRICULUM 2.jpeg'
import users3 from '../../../Assets/chica.webp'
import users4 from '../../../Assets/pexels-marllon-cristhian-barbosa-3110392.jpg'

const Listing = () => {
  return (
    <div className='lisitingSection'>

      <div className="heading flex">
          <h1>Mi lista</h1>
          <button className='btn flex'>
            Ver todo <BsArrowRightShort className="icon"/>
          </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <BsFillBalloonHeartFill className="icon"/>
          <img src={img} alt="Image Name" />
          <h3> Pez Disco</h3>
        </div>

        <div className="singleItem">
          <HiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3> Pez Oscar</h3>
        </div>

        <div className="singleItem">
          <HiOutlineHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3> Pez payaso</h3>
        </div>

        <div className="singleItem">
          <BsFillBalloonHeartFill className="icon"/>
          <img src={img4} alt="Image Name" />
          <h3>Pez Flower Horn</h3>
        </div>
      </div>
      
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Lo Mas Vendido</h3>
            <button className='btn flex'>
            Ver todo <BsArrowRightShort className="icon"/>
          </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={users1} alt="Users Image" />
              <img src={users2} alt="Users Image" />
              <img src={users3} alt="Users Image" />
              <img src={users4} alt="Users Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 peces vendidos <br />
                <small>
                  12 Vendedores <span className='date'>7 dias</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Vendedores Destacados</h3>
            <button className='btn flex'>
            Ver todo <BsArrowRightShort className="icon"/>
          </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={users2} alt="Users Image" />
              <img src={users1} alt="Users Image" />
              <img src={users4} alt="Users Image" />
              <img src={users3} alt="Users Image" />
            </div>
            <div className="cardText">
              <span>
                30.280 peces vendidos <br />
                <small>
                  16 Vendedores <span className='date'>31 dias</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Listing 