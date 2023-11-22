import React from "react";


const CardItem = (props)=>{

 
    return(
        <>
        <div className="bg-gray-500 flex md:flex-row flex-col  gap-5 justify-between rounded-2xl shadow-md">
        <div className="bg-gray-200 md:aspect-video  p-2 rounded-lg overflow-hidden">
                    <img
                      src={props.Pic}
                      alt="photo"
                      className="w-full h-full rounded-xl "
                    />
                  </div>
            <div className="flex flex-col md:p-5 md:text-xl p-3 gap-4 md:gap-10">
            <div className="flex md:justify-center gap-2">
                 <div>
                    {props.First}
                 </div>
                 <div>
                 {props.Last}

                 </div>
            </div>
            <div>
                {props.Gender}
            </div>
            <div>
              {props.phone}
            </div>
            </div>
        </div>
        </>
    )

}

export default CardItem