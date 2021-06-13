import React from "react";
import {BrowserRouter, MemoryRouter, Switch, Route} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ShoppingPage from "./ShoppingPage";

export const Routes = ()=>{
    return (<BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/shopping" component={ShoppingPage} />
        </Switch>
    </BrowserRouter>);
}