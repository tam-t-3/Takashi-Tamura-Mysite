import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./Components/Pages/Top";
import Portfolio from "./Components/Pages/Portfolio";

const App: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Top}/>
    <Route exact path="/portfolio" component={Portfolio}/>
  </BrowserRouter>
);

export default App;
