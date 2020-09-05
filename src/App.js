import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Homepage/shopPage/ShopPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
