import Home from "./Home.js"
import { Route,Routes,BrowserRouter} from "react-router-dom";
import FullDesc from "./FullDesc.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home></Home>}></Route>
    {/* <Route path="/Movieappinreact">{<Home/>}</Route> */}
    <Route path="/about" element={<FullDesc></FullDesc>}></Route>
    </Routes>
     </BrowserRouter>
    // <div className="">
    //  <Home/>
      
    // </div>
  );
}

export default App;
