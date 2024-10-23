"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'

const DogList = () => {
    const [dogs, setDogs] = useState([]);

    const fetchDogs = async () => {
      const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=500");
      setDogs(response.data);
    };
// create fettch with useEffect
  useEffect(() => {
    fetchDogs();
  }, [])
  return (
    <div className="grid grid-cols-2 gap-1 xs:gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {
   dogs.map((cat,index:number) =>{
       const {url} = cat
       return <div key={index} className='p-2'>
           <img  className='aspect-[220/250] w-full rounded-md hover:scale-110 transition-all' src={url} alt="Cat" />
       </div>
   })
}    
</div>
  )
}

export default DogList