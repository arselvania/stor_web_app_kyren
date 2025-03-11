import React from 'react';
import './Pricing.css';

function Pricing() {
    const plans = [
        {
            title: "پلن پایه",
            price: "۲۹۰,۰۰۰",
            period: "تومان / ماهانه",
            popular: false,
            features: [
                { name: "مدیریت تا ۱۰۰ محصول", included: true },
                { name: "درگاه پرداخت آنلاین", included: true },
                { name: "قالب رسپانسیو", included: true },
                { name: "سیستم مدیریت انبار", included: true },
                { name: "گزارش‌های پایه", included: true },
                { name: "پشتیبانی VIP", included: false },
                { name: "اتصال به سیستم حسابداری", included: false },
                { name: "اپلیکیشن موبایل", included: false },
            ]
        },
        {
            title: "پلن حرفه‌ای",
            price: "۴۹۰,۰۰۰",
            period: "تومان / ماهانه",
            popular: true,
            features: [
                { name: "مدیریت تا ۱۰۰۰ محصول", included: true },
                { name: "چند درگاه پرداخت آنلاین", included: true },
                { name: "قالب‌های متنوع", included: true },
                { name: "سیستم مدیریت انبار پیشرفته", included: true },
                { name: "گزارش‌های پیشرفته", included: true },
                { name: "پشتیبانی VIP", included: true },
                { name: "اتصال به سیستم حسابداری", included: true },
                { name: "اپلیکیشن موبایل", included: false },
            ]
        },
        {
            title: "پلن سازمانی",
            price: "۸۹۰,۰۰۰",
            period: "تومان / ماهانه",
            popular: false,
            features: [
                { name: "مدیریت نامحدود محصول", included: true },
                { name: "تمام درگاه‌های پرداخت", included: true },
                { name: "قالب اختصاصی", included: true },
                { name: "سیستم مدیریت انبار پیشرفته", included: true },
                { name: "گزارش‌های سفارشی", included: true },
                { name: "پشتیبانی VIP ۲۴/۷", included: true },
                { name: "اتصال به سیستم حسابداری", included: true },
                { name: "اپلیکیشن موبایل اختصاصی", included: true },
            ]
        }
    ];

    return (
        <section id="pricing" className="pricing">
            <h2 className="section-title">پلن‌های اشتراک</h2>
            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <div key={index} className="pricing-card">
                        {plan.popular && <div className="pricing-popular">پرطرفدار</div>}
                        <div className="pricing-header">
                            <h3 className="pricing-title">{plan.title}</h3>
                            <div className="pricing-price">{plan.price}</div>
                            <div className="pricing-period">{plan.period}</div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <i className={`fas ${feature.included ? 'fa-check' : 'fa-times'}`}></i>
                                        {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pricing-action">
                            <a 
                                href="product.html" 
                                className={plan.popular ? 'btn-primary' : 'btn-outline'}
                            >
                                مشاهده جزئیات
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;