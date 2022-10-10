import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import CountryDetail from './component/CountryDetails/CountryDetails';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
      <Route path='/country/:name' element={<CountryDetail/>} ></Route>


    </Routes>
  );
}

export default App;
