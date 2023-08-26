
import './App.css';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/recipes' element={<Recipes></Recipes>}></Route>
        </Routes>
    </Router>
    </>
   
  );
}

export default App;
