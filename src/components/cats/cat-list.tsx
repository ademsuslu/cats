"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'

const CatList = () => {
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=30");
      setCats(response.data);
    };
// create fettch with useEffect
  useEffect(() => {
    fetchCats();
  }, [])
  return (
    <div className="grid grid-cols-2 gap-1 xs:gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {
   cats.map((cat,index:number) =>{
       const {url} = cat
       return <div key={index} className='p-2'>
           <img  className='aspect-[220/250] w-full rounded-md hover:scale-110 transition-all' src={url} alt="Cat" />
       </div>
   })
}    
</div>
  )
}

export default CatList