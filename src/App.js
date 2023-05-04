import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import HomeNext from "./components/Homenext";
import FormData from "./components/FormData";



function App() {
 

  return (
    <BrowserRouter>
      <div className="App" >
      
        <Routes>
        <Route
            exact
            path="/"
            element={
              <Login/>
            }
          />
        <Route
            exact
            path="/home"
            element={
              <Home/>
            }
          />
          <Route
            exact
            path="/homenext"
            element={
              <HomeNext/>
            }
          />
          <Route
            exact
            path="/formdata"
            element={
              <FormData/>
            }
          />
       
        </Routes>
      </div>
   
    </BrowserRouter>
  );
}

export default App;
