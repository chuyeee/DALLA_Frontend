import React from "react";
//import {useEffect} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MenuDetail from "./pages/MenuDetail"
import Count from "./pages/Count"
import Order from "./pages/Order"
import Pay from "./pages/Pay"
import Takeout from "./pages/Takeout"
import Done from "./pages/Done"
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"

function App() {
  return (
    <>
      <GlobalStyle />
        <div className="App">
          <nav>
            <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> | <Link to="/menudeatil">MenuDetail</Link> | <Link to="/count">Count</Link> | <Link to="/order">Order</Link>
            | <Link to="/takeout">Takeout</Link> | <Link to="/pay">Pay</Link> | <Link to="/done">Done</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menudetail" element={<MenuDetail />} />
            <Route path="/count" element={<Count />} />
            <Route path="/order" element={<Order />} />
            <Route path="/takeout" element={<Takeout />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/done" element={<Done />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/input" element={<Input />} />
            <Route path="/input2" element={<Input2 />} />
          </Routes>
        </div>
      </>
  );
}

export default App;
