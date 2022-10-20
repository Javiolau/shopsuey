
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Shopsuey</Link>
      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />}/>
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
        <h2></h2> 
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
