import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const GlobalStyles = createGlobalStyle`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap');
            font-family: 'Red Hat Display', sans-serif;
        }
`;

const AppWraper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f0f5f9;
`;

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <BrowserRouter>
                <AppWraper>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </AppWraper>
            </BrowserRouter>
        </div>
    );
}

export default App;
