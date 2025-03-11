import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">KYREN</div>
                    <p>فروشگاه کایرن با بیش از ۵ سال سابقه فعالیت، یکی از بزرگترین فروشگاه‌های آنلاین در ایران می‌باشد.</p>
                    <div className="social-media">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-telegram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>دسترسی سریع</h3>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">محصولات</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>ارتباط با ما</h3>
                    <p><span><i className="fas fa-map-marker-alt"></i></span> تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    <p><span><i className="fas fa-phone"></i></span> ۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p><span><i className="fas fa-envelope"></i></span> info@kyren</p>
                </div>
            </div>
            </footer>
                
                );
    }

export default Footer;
