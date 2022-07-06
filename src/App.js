import './App.css';
import React from "react";
import Commerce from './pages/Commerce';
import SearchArea from './pages/search';
import Subscription from './pages/Subscription';
import User from './pages/User';
import Setting from './components/settingsUser/settings';
import Home from './pages/home';

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
      <Routes>
      <Route path = "/" element={<Home/>} />
      <Route exact path = "/comercio" element={<Commerce/>} />
      <Route path = "/busca" element={<SearchArea/>} />
      <Route path = "/inscricao" element={<Subscription />} />
      <Route path = "/usuario" element={<User />}/>
      <Route path = "/configusuario" element={<Setting/>} />
    </Routes>
    </BrowserRouter>}
    </div>
  );
}

export default App;
