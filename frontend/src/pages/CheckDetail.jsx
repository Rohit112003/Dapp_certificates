import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context/index";

const CheckDetail = () => {
  const { getEventsData } = useStateContext();
  const [newData, setData] = useState([]);

  
    const fetchData =  () => {
      setTimeout( async()=>{
        try {
       
          const data = await getEventsData();
          const dataArray = Object.values(data).map(item => item.data);
          setData(dataArray);
          console.log(dataArray);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },2000)
      
    };
    
  return (
    <div>
      <button onClick={fetchData} >Click me</button>
    </div>
  );
  }

export default CheckDetail;
