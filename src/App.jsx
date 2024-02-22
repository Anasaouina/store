
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './compenets/Home/Home';
import Fruit from './compenets/Fruit/Fruit';
import Cart from './compenets/Cart';
import Veget from './compenets/Veget/Veget';
import Herbe from './compenets/Herbe/Herbe';
import Autres from './compenets/Autres';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fruit' element={<Fruit />} />
        <Route path='/vegetable' element={<Veget />} />
        <Route path='/herbe' element={<Herbe />} />
        <Route path='/autres' element={<Autres />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  
  );
}

export default App;
