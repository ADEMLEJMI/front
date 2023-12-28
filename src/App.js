import Register from './pages/Register';
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './componement/Navbar'
import './App.css';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
