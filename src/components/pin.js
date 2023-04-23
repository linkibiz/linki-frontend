import { CircularProgress } from "@mui/material";
import React from "react";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Pin = () => {
  return (
    <div className="bg-[#BEBEBE] h-full min-h-screen flex justify-center py-4 ">
      <div className="bg-white w-[395px] items-center justify-center flex flex-col min-h-screen h-full rounded-xl my-4">
        <p className=" text-xl ">Introduce tu pin</p>
        <form>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-[#1180C2] my-4 text-white px-20  rounded-full">
              Enviar
            </button>
          </div>
        </form>
        <img src="../../mmglogo.jpeg"></img>
      </div>
    </div>
  );
};

export default Pin;
