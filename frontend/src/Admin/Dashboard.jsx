import React from "react";
import Sidebar from "./Sidebar";
import HeroBar from "./HeroBar";
const Dashboard = () => {


  return (
    <div className="w-full">
      <div className="flex gap-2">
        <Sidebar />
          <HeroBar>
             <h1 className="text-[35px] p-2 font-bold">Welcome To Admin Panel</h1>
            Dashboard
          </HeroBar>
      </div>
    </div>
  );
};

export default Dashboard;
