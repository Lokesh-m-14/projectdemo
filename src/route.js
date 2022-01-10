
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Firstpage from "./pages/firstpage";
import Secondpage from "./pages/secondpage";


export default function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="Home" element={<Home />} />  
          <Route path="Firstpage" element={<Firstpage />} />
          <Route path="Secondpage" element={<Secondpage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}