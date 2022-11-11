import React from 'react'
import {useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (  
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-full h-[25rem] w-[25rem] flex justify-center items-center">
        <form className="flex flex-col qap-4" onSubmit={()=>navigate("home")}> {/* forma yazdığımız kulları doğrulayıp home a git */}
          <img src="https://svgsilh.com/svg/1667987.svg" 
          alt="img" 
          width="200px"
          draggable="false"   /* Resimi sürükleyememesi için */
          className="mx-auto"
          />
          <input type="text" placeholder="Your Name" className="bg-black text-white p-2 rounded-lg"
          required   /* Zorunlu girilmesi için */
          />
          <br/>
          <input type="password" placeholder="Your Password" className="bg-black text-white p-2 rounded-lg"
          required    /* Zorunlu girilemesi için */
          />
          <br/>
          <button className="rounded-lg bg-black text-white w-[5rem] mx-auto p-1">Login</button>  {/* p dediği padding */}
        </form>
      </div>
    </div>
  );
};

export default Login




/* usenavigate ile rootladımız sayfaların arasında  geçiş yapabiliyoruz */

/* onsubmit formun kurllarına tamamen uygundavranıp home a götür çünkü onClick direk gider */
/* ()=> callback fonksiyomu */