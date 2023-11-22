import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";
import CardItem from "./Card";
const Main = ()=>{


    const [data,Setdata] = useState();

    const GetData = async()=>{

      await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc").then(res=>{
        console.log(res.data.results);
        const fetchedData = res.data.results;
        Setdata(fetchedData);
       
      })

    }

    useEffect(()=>{
       GetData(); 
    },[])

return(


   
    <>
    <div className="flex justify-center items-center p-20 bg-black h-screen w-screen">
        {data && data.map(info=>{
        return <CardItem First={info.name.first} Last={info.name.last} Pic={info.picture.large} Gender={info.gender} phone={info.phone}/>
       })}
    </div>
    </>
)

}
export default Main