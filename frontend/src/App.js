// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';


function App() {
    return (
        <div>
            <Header />
            <main>
                <h1>خوش آمدید به فروشگاه کایرن!</h1>
                <p>بهترین محصولات را با تخفیف‌های ویژه بخرید.</p>
            </main>
            <Footer />
        </div>
    );
}

export default App;
