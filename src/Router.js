import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Appbar from "./components/Appbar";
import ImagePage from "./components/ImagePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/image/:id" component={ImagePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
