import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
