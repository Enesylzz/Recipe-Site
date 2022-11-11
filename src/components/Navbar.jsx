import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between p-3 text-xl bg-green-100">
      <div className="text-black-500 fkex items-center gap-3">
        <NavLink 
        className="text-black-500 fkex items-center gap-3"
        to="/home"
        style={(isActive)=>({
          color: isActive ? "red" : "",      /* isactivese kırmızı değilse kalsın */

        })}
        >RECİPE</NavLink>  {/* tıkladığımızda Home a götürdü */}
        </div>
        <div className="flex gap-5 text-gray-600">
          <NavLink 
          className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125"
          /* transiton dan itibaren gecikme için */
          to="/about"
          style={(isActive)=>({
            color: isActive ? "red" : "",
                  /* isactivese kırmızı değilse kalsın */
  
          })}
          >ABOUT</NavLink>
          <a className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125" 
          href="https://github.com/Enesylzz"
          target="_blank"
          >GİTHUB</a>
          <NavLink className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125" to="/" >LOGOUT</NavLink>
        </div>
    </div>
  )
}

export default Navbar





/* NavLink aktifken kullanıyorken beyaz olsun yoksa kırmızıolsun mantığı bu 
AYRICA YÖNLENDİRMEYE DE YARAR*/