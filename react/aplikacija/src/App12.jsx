import "./App.css";
import { useState } from "react";
import Router, { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Prva, Druga, Home, NotFound } from "./Components12";

//react router
export default function App() {
    return (
        <div className="App App-header">
          <h1>react-router-dom</h1>
          <BrowserRouter>
          <header>
            <nav>
              <h2>Router</h2>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/'>Prva</Link>
                </li>
                <li>
                  <Link to='/'>Druga</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path='/' element={
                <Home naslov='Naslov Home komponente'>
                  <p>Home Komponenta</p>
                </Home>
              }/>

              <Route path='/prva' element={
                <Prva naslov='Naslov prve komponente' kratkiText='Kratki tekst koji pripada prvoj komponenti'>
                  <p>Sadrzaj prve komponente</p>
                </Prva>
              }/>

              <Route path="/druga" element={
                <Druga naslov='Naslov druge komponente' kratkiText='Kratki tekst koji pripada drugoj komponenti'>
                  <p>Sadrzaj druge komponente</p>
                </Druga>
              }/>

            </Routes>
          </main>
          </BrowserRouter>
        </div>
    );
}
