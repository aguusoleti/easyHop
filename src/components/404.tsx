import React from "react";
import { useMedia } from "../hooks/useMedia";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const media = useMedia();

  return (
    <main className="w-[100vw] h-[100vh] text-center">
      <div className='flex flex-col justify-center items-center font-["Lato","sans-serif"] gap-y-[1vh] mt-[10vh]'>
        <div className="font-bold">
          <p className="text-[4vh]">404</p>
          <p>Página no encontrada</p>
        </div>
        <p className="w-10/12 lg:w-1/6 font-normal">
          La página que estás buscando no existe o ha ocurrido algún error.
          Intenta volver al inicio.
        </p>
        <Link to={"/"}>
          <button>Volver al inicio</button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
