// import React from "react";
// import {Link} from "react-router-dom";

// function Header(){



//     return(
//         <>
//         <header>
//         <ul>
//             <li>
//                 <Link to="/">All</Link>
//             </li>
//             <li>
//                 <Link to="/Mountains">Mountains</Link>
//             </li>
//             <li>
//                 <Link to="/birds">Birds</Link>
//             </li>
//             <li>
//                 <Link to="/beaches">Beaches</Link>
//             </li>
//             <li>
//                 <Link to="/food">Food</Link>
//             </li>
            
//         </ul>
//         </header>
//         </>
//     )
// }
// export default Header;

// import {React,useState} from "react";
// import axios from "axios";
// const auth=
//    `Client-ID 7KgEnyBsRkemfY1DRFqUUBSJP2N9esiIKYaNKe3yIC4v`;

// function Header(){
 
//     const fetch=()=>{
//         console.log("clicked")
//           axios.get(`https://api.unsplash.com/search/photos?page=1&query=office',${auth}`)
//           .then((resp)=>{
//             console.log(resp);
//           })
 
        
//     }
//     return(
//         <>
//         <button type="" onClick={fetch}>Images search</button>
//         </>
//     )
// }



// export default Header;

import React,{useState} from "react"

import axios from "axios"

export const Satellite=()=>{
const API=`7KgEnyBsRkemfY1DRFqUUBSJP2N9esiIKYaNKe3yIC4`;
const [images, setimage]=useState([]);

  const getsun=()=>{
   
   axios.get(`https://api.unsplash.com/search/photos?page=1&query=sattelite&client_id=${API}`)
   .then((res)=>{
       setimage(res.data.results);
   })
  } 
return(
   <>
     
     <button onClick={getsun}>Satellite</button>
    
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






