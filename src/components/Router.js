import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Recipe from "./Recipe";
import App from "../App";

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ App }/>
                <Route path="/recipe/:id" component={ Recipe }/>
            </Switch>
        </BrowserRouter>
    )
}

export default router;