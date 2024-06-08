"use client";
import MainButton from "./MainButton";

const MainNavBar = () => {
  const contactAction = () => {
    console.log("contactAction");
  };
  return (
    <header className="w-full flex justify-center absolute top-0 bg-white z-50 bg-opacity-0	 py-9">
      <nav className="w-4/5 flex flex-row justify-between items-center">
        <div className="">
          <img src="/logo.png" alt="logo" className="w-24" />
        </div>
        <div className="w-fit flex justify-center items-center">
          <ul className="flex flex-row gap-8">
            <li className="text-white cursor-pointer font-bold">Inicio</li>
            <li className="text-white cursor-pointer font-bold">Nosotros</li>
            <li className="text-white cursor-pointer font-bold">Servicios</li>
            <li className="text-white cursor-pointer font-bold">Paquetes</li>
          </ul>
        </div>
        <div className="">
          <MainButton text="Contáctanos" action={contactAction} />
        </div>
      </nav>
    </header>
  );
};

export default MainNavBar;
