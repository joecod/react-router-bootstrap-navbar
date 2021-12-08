import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PathOne from './routes/PathOne';
import PathTwo from './routes/PathTwo';
import PathThree from './routes/PathThree';
import PathFour from './routes/PathFour';
import DropA from './routes/DropA';
import DropB from './routes/DropB';
import DropC from './routes/DropC';
import Search from './routes/Search';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='one' element={<PathOne/>} />
        <Route path='two' element={<PathTwo/>} />
        <Route path='three' element={<PathThree/>} />
        <Route path='four' element={<PathFour/>} />
        <Route path='a' element={<DropA/>} />
        <Route path='b' element={<DropB/>} />
        <Route path='c' element={<DropC/>} />
        <Route path="*" element={<main><p>page not found!</p></main>}/>
        <Route path='search' element={<Search/>} >          
          <Route path=':searchTerm' element={<Search/>} /> 
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>      
      <p>HOME</p>
    </div>
  )
}
