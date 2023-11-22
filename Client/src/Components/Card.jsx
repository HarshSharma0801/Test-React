import React from "react";

const CardItem = (props) => {
  return (
    <>
      <div className="bg-white flex md:flex-row flex-col  gap-5 justify-between rounded-2xl shadow-lg">
        <div className="flex justify-center items-center  md:pl-4">
        <div className=" text-center rounded-lg md:pt-0 p-2 overflow-hidden">
          <img
            src={props.Pic}
            alt="photo"
            className=" rounded-xl "
          />
        </div>
        </div>
       
        <div className="flex flex-col md:p-5 md:text-xl p-3 gap-4 md:gap-10">
          <div className="flex md:justify-center text-2xl font-semibold gap-2">
            <div>{props.First}</div>
            <div>{props.Last}</div>
          </div>
          <div>{props.Gender}</div>
          <div>{props.phone}</div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
