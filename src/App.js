import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path='/reactfoodapp/' element={<Home/>}></Route>
          <Route path='/reactfoodapp/menu/' element={<Menu/>}></Route>
          <Route path='/reactfoodapp/about/' element={<About/>}></Route>
          <Route path='/reactfoodapp/contact/' element={<Contact/>}></Route>
        </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
