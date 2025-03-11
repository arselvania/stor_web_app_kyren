import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    // بستن منو با کلیک خارج از آن
    useEffect(() => {
        const handleClickOutside = (e) => {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');
            
            if (menuToggle && nav && !menuToggle.contains(e.target) && !nav.contains(e.target)) {
                setMenuActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <span>K</span>YREN
                </div>
                <div className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={menuActive ? 'active' : ''}>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#pricing">پلن‌های اشتراک</a></li>
                        <li><a href="#features">ویژگی‌ها</a></li>
                        <li><a href="#">مشتریان</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                        <li><a href="#">تماس با ما</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="#"><i className="fas fa-user"></i> ورود</a>
                    <a href="#"><i className="fas fa-user-plus"></i> ثبت نام</a>
                    <div className="search-box">
                        <input type="text" placeholder="جستجو..." />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;