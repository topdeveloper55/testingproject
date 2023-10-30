import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";

function Routers () {

    return (
        <>
             <Routes>
                    <Route exact path="/" element={<Dashboard/>}></Route>
            </Routes>
        </>
    );
}

export default Routers;