import React from "react";
import useService from "../hooks/adminHook/adminService/useService"
import { Link } from 'react-router-dom'
import httpUrl from "../components/api/httpUrl";
const Packages = () => {
  const {services} = useService();
  return (
    <>
      <div className="w-full mt-15 bg-gray-800">
        <div className="container mx-auto">
          <div className="mx-auto sm:w-[500px] sm:mx-auto text-center sm:text-center p-4">
            <p className="text-[35px] font-extrabold p-2 text-white">Recommened Spa Pakages</p>
            <p className="text-white">
              Indulge yourself or with your loved one by our unique spa packages
              available only at the Mudita Spa
            </p>
          </div>

          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
            {services.slice(0, 6).map((items) => (
              <div className="w-full p-2 justify-between flex flex-col sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[500px] mx-auto mb-5" key={items._id}>
              <figure>
                <img
                  src={`${httpUrl}/public/services/${items.image}`}
                  alt=""
                  className="w-full h-[450px] object-cover"
                />
              </figure>
              <div className="w-full flex flex-col justify-center">
                <p className="text-[30px] font-extrabold text-center mt-5 text-white">{items.title}</p>
                <p className="text-center text-white">{items.description}</p>
                <div className="flex justify-center mt-5">
                    <button className="cursor-pointer border-1 border-gray-100 text-white p-3 hover:bg-white hover:text-black hover:transition-all duration-[300ms]">
                      <Link to = {items.category.path}>
                          Read More
                      </Link>
                    </button>
                </div>
              </div>
            </div>
            ))}
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
