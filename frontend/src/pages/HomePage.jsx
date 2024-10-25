import React from "react";
import { SideBar } from "../components/SideBar";
import MessageContainer from "../components/MessageContainer";

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-600">
      <SideBar />
      <MessageContainer/>
    </div>
  );
};

export default HomePage;
