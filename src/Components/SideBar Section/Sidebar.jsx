import React from 'react'
import './sidebar.css'
import logo from '../../Assets/logo.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
const Sidebar= () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name"/>
        <h2>VidaMarina.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <IoMdSpeedometer className='icon'/>
             <span className='smallText'>
              Panel
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <TbTruckDelivery className='icon'/>
             <span className='smallText'>
              Mis Pedidos
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <MdOutlineExplore className='icon'/>
             <span className='smallText'>
                Explorar
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <BsTrophy className='icon'/>
             <span className='smallText'>
              Productos
             </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
         AJUSTES
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <AiOutlinePieChart className='icon'/>
             <span className='smallText'>
              gráficos
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <BiTrendingUp className='icon'/>
             <span className='smallText'>
              tendencias
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <MdOutlinePermContactCalendar className='icon'/>
             <span className='smallText'>
                Contactos
             </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <BsCreditCard2Front className='icon'/>
             <span className='smallText'>
              Factura
             </span>
            </a>
          </li>

        </ul>
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
  )
}

export default Sidebar