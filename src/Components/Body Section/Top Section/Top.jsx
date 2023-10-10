import React from 'react'
import './top.css'
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageDots} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle } from 'react-icons/bs'

import img from '../../../Assets/CURRICULUM 2.jpeg'
import img2 from '../../../Assets/img2.png'
import video from '../../../Assets/video1.mp4'

const Top= () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido a VidaMarina.</h1>
          <p>Hola AmigoMarino, ¡Bienvenido de nuevo!</p>
        </div>

    <div className="searchBar flex ">
      <input type="text" placeholder='panel de búsqueda'/>
      <BiSearchAlt className="icon"/>
    </div>

      <div className="adminDiv flex">
        <TbMessageDots className="icon"/>
        <IoMdNotificationsOutline className="icon"/>
        <div className="adminImage">
          <img src={img} alt="Admin Image" />
        </div>
      </div>

    </div>
    <div className="cardSection flex">

      <div className="rightCard flex">
        <h1>Crea y vende productos extraordinarios</h1>
        <p>Detrás de esta web existe un equipo humano altamente cualificado a tu disposición para ofrecerte el mejor servicio. Trabajamos para tener peces sanos y seguros, stock real de plantas de acuario y todo lo necesario para tus acuarios.</p>

          <div className="buttons flex">
            <button className='btn'>Explorar mas</button>
            <button className='btn transparent'>Las más vendido</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

              <div className="textDiv">
                <h1>Mis estadísticas</h1>

                <div className="flex">
                  <span>
                    Hoy <br /> <small>4 pedidos</small>
                  </span>
                  <span>
                  Este mes <br /> <small>110 pedidos</small>
                  </span>
                </div>

                <span className='flex link'>
                  Ver mis pedidos <BsArrowRightShort className="icon"/>
                </span>

              </div>

              <div className="imgDiv">
                <img src={img2} alt="Image Name" />
              </div> 

      
            
          </div>

            <div className="sideBarCard">
            <BsQuestionCircle className="icon"/>
            <div className="cardContent">
              <div className='circle1'></div>
              <div className='circle2'></div>

              <h3>Centro de Ayuda</h3>
              <p>Si tiene problemas con VidaMarina, contáctenos para más preguntas.</p>
              <button className='btn'>Ir al centro de ayuda</button>
        </div>
      </div>
        </div>

    </div>
   </div>
  )
}

export default Top