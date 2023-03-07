import React,{useState} from "react"

import axios from "axios"

export const Nature=()=>{
const API=`7KgEnyBsRkemfY1DRFqUUBSJP2N9esiIKYaNKe3yIC4`;
const [images, setimage]=useState([]);

  const getsun=()=>{
   
   axios.get(`https://api.unsplash.com/search/photos?page=1&query=nature&client_id=${API}`)
   .then((res)=>{
       setimage(res.data.results);
   })
  } 
return(
   <>
     
     <button onClick={getsun}>Nature</button>
    
    {
   images.map((key, index)=>{
       return(
   <div className="set">
        <img   src={key.urls.small} alt="403"/>
   </div>
  
  
       )
   })
 }

   </>

   
)
}