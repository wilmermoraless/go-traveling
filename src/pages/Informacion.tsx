import {useEffect, useState} from "react";
import { Title } from "../components/Title"
import { Link } from "react-router-dom";




export const Informacion = () => {
  const [travel, setTravel] = useState([]);
  useEffect(() => {
    fetch('https://api-tests.workingpos.com/api/go-traveling/hotels')
  .then((response) => response.json())
  .then((datos) => setTravel(datos.data));
  }, []);

  return (
    //informacion de los hoteles
    <div >
      <Link to={'/informacion'} >
       <Title texto="Busca un hotel cerca de ti" />
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-1">
          {travel.map((hotel) => (
            <div key={hotel.name} className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
              <img src={hotel.image} alt={hotel.name} className="object-cover object-center w-full h-56" />
              <div className="py-4">
                <h3 className="flex justify-between mb-1 text-xs tracking-widest text-gray-500 title-font font-bold">{hotel.name}
        
                </h3>
                <p className="mt-4">{hotel.address}</p>
                <p className="mt-4 text-justify">{hotel.description}</p>

                <div className="flex justify-between mt-4">
                <span className="text-yellow-800">{hotel.starring} estrellas</span>
                <p className="mr-4 font-bold">${hotel.price}</p>
                </div>
                
                <div className="flex items-center">
                  
                  <span className="flex items-center py-1 pr-3 text-sm leading-none text-gray-400">
                    
                  </span>
                  
                  </div>
                  <button className="bg-blue-300 w-full h-10 mt-2">Reservar ahora</button>
              </div>
            </div>
          ))}
          </div>
          </Link>
    </div>
    
  )
}