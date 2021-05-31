import React from "react";
import {BrowserRouter, MemoryRouter, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ShoppingPage from "./ShoppingPage";

export const Routes = ()=>{
    return (<BrowserRouter>
        <Switch>
            <Route exact path="/home"><HomePage /></Route>
            <Route exact path="/shopping" component={ShoppingPage} />
        </Switch>
    </BrowserRouter>);
}