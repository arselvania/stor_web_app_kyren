import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1>سیستم مدیریت فروشگاه آنلاین کایرن</h1>
                <p>ساخت و مدیریت آسان فروشگاه آنلاین با امکانات حرفه‌ای و قیمت مناسب</p>
                <a href="#pricing" className="btn">مشاهده پلن‌های اشتراک</a>
            </div>
        </section>
    );
}

export default Hero;