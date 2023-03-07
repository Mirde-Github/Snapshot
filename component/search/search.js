 import React,{useState} from "react"
 import axios from "axios"
 import "../search/Sea.css"
 import { Link } from "react-router-dom"
 export const Search=()=>{
const API=`7KgEnyBsRkemfY1DRFqUUBSJP2N9esiIKYaNKe3yIC4`;
const [images, setimage]=useState([]);
const[name,setname]=useState("");
   const getdata=()=>{
    
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${name}&client_id=${API}`)
    .then((res)=>{
        setimage(res.data.results);
    })
   } 
return(
    <>
       <input type="text" name="" value={name} onChange={(e)=>{setname(e.target.value)}}/>
       <button onClick={getdata}>Search_Images</button> <br/>
       <div>
        <ul>
            <li>
             <Link to="/Sun">Sun</Link>  
            </li>
            <li>
             <Link to="/Nature">Nature</Link>  
            </li>
            <li>
             <Link to="/Earth">Earth</Link>  
            </li>
            <li>
             <Link to="/Satellite">Satellite</Link>  
            </li>
        </ul>
       </div>
     
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