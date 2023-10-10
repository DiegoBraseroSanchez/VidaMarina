import React from 'react'
import './activity.css'

//Iconos       
import {BsArrowRightShort} from 'react-icons/bs'

//Imagenes
import user from '../../../Assets/CURRICULUM 2.jpeg'
import user1 from '../../../Assets/pexels-andrea-piacquadio-774909.jpg'
import user2 from '../../../Assets/chica.webp'
import user3 from '../../../Assets/pexels-marllon-cristhian-barbosa-3110392.jpg'
import user4 from '../../../Assets/pexels-motional-studio-1081685.jpg'
const Activity = () => {
  return (
    <div className='activitySection'>
        <div className="heading flex">
          <h1>Actividades Recientes</h1>
          <button className='btn flex'>
             ver todo
             <BsArrowRightShort className="icon"/>
          </button>
        </div>

        <div className="sedContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt="Custom Image" />
            <div className="customerDetails">
              <span className='name'>Diego Brasero</span>
              <small>Pide nuevos peces</small>
            </div>
            <div className="duration">
              Hace 2 minutos
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user1} alt="Custom Image" />
            <div className="customerDetails">
              <span className='name'>Claudia Rodirguez</span>
              <small>Pide nuevos peces</small>
            </div>
            <div className="duration">
              Hace 6 minutos
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user2} alt="Custom Image" />
            <div className="customerDetails">
              <span className='name'>Laura Garcia</span>
              <small>Pide nuevos peces</small>
            </div>
            <div className="duration">
              Hace 4 minutos
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user3} alt="Custom Image" />
            <div className="customerDetails">
              <span className='name'>Jose Fernandez</span>
              <small>Pide nuevos peces</small>
            </div>
            <div className="duration">
              Hace 8 minutos
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user4} alt="Custom Image" />
            <div className="customerDetails">
              <span className='name'>Maria Sanchez</span>
              <small>Pide nuevos peces</small>
            </div>
            <div className="duration">
              Hace 5 minutos
            </div>
          </div>
        </div>
    </div>
  )
}

export default Activity