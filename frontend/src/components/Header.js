// src/components/Header.js
import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">خانه</a></li>
                    <li><a href="/products">محصولات</a></li>
                    <li><a href="/contact">تماس با ما</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
