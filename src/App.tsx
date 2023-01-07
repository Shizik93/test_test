import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Metric from "./components/Metric/Metric";
import Press from "./components/Press/Press";
import Products from "./components/Products/Products";

function App() {
    return (
        <div className={'App'} >
            <Header/>
            <Metric/>
            <Press/>
            <Products/>
        </div>
    );
}

export default App;
