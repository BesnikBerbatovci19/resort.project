import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingelRooms from "./pages/SingelRooms";
import Error from "./pages/Error";

import { Switch,Route } from "react-router-dom";
import Navbar from './componets/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingelRooms} />
      <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
