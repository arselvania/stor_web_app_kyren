import React from 'react';
import './Features.css';

function Features() {
    const features = [
        {
            icon: "fas fa-rocket",
            title: "راه‌اندازی سریع",
            description: "در کمتر از ۳۰ دقیقه فروشگاه آنلاین خود را راه‌اندازی کنید و کسب‌وکار خود را آنلاین کنید."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "نمایش واکنشگرا",
            description: "فروشگاه شما در تمام دستگاه‌ها اعم از کامپیوتر، موبایل و تبلت به صورت بهینه نمایش داده می‌شود."
        },
        {
            icon: "fas fa-lock",
            title: "امنیت بالا",
            description: "با جدیدترین استانداردهای امنیتی، اطلاعات شما و مشتریانتان محافظت می‌شود."
        },
        {
            icon: "fas fa-cogs",
            title: "مدیریت آسان",
            description: "پنل کاربری ساده و پیشرفته برای مدیریت محصولات، سفارشات و مشتریان شما."
        },
        {
            icon: "fas fa-headset",
            title: "پشتیبانی حرفه‌ای",
            description: "تیم پشتیبانی ما همیشه در کنار شماست تا مشکلاتتان را به سرعت حل کند."
        }
    ];

    return (
        <section id="features" className="features">
            <h2 className="section-title">ویژگی‌های کایرن</h2>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;