import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Homepage/shopPage/ShopPage";
import Header from "./Components/header/Header";
import SignIn from "./pages/sign-in-and-sign-up/SignIn";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
