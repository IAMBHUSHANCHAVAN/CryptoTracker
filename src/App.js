import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Homepage from "./pages/homepage/Homepage";
import Coinpage from "./pages/coinpage/Coinpage";

function App() {
  return (
   <BrowserRouter>
  <div className="">
  <Header/>
  <Routes>
  <Route path="/" exact Component={Homepage}/>
  <Route path="/coinpage/:id" Component={Coinpage}/>
  </Routes>
  </div>
  
   </BrowserRouter>
  );
}

export default App;
