

 //import Header from './component/Header/Header';
//  import Gallery from "./component/Gallery/Gallery"

import { Search } from "./component/search/search";
import { BrowserRouter, Routes,Route, Outlet } from "react-router-dom";
import { Sun } from "./component/Header/Sun";
import { Nature } from "./component/Header/Nature";
import { Earth } from "./component/Header/Earth";
import { Satellite } from "./component/Header/Satellite";
function App() {
  return (
//     <div className="App">
//    <Header/> 
//  <Gallery/>
//     </div>
<>
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<Search/>} />
  {/* <Route path="/Sun" element={<><div><Link to="/sun/">xyz</Link></div><Outlet/></>}>
 <Route path=":pridict" element={<predict/>}/> */}
    <Route path="/Sun" element={<Sun/>}/>
  
   <Route path="/Nature" element={<Nature/>} />
  <Route path="/Earth" element={<Earth/>} />

  <Route path="/Satellite" element={<Satellite/>} />
</Routes>
</BrowserRouter>

    
</>

  );
}

export default App;
