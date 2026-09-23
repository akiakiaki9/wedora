'use client';

import { TbArrowRight } from 'react-icons/tb';
import { FlowerCorner, } from './Decor';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
    return (
        <section className="w-hero">
            <div className="w-hero-bg" />

            <FlowerCorner position="tl" size={200} className="flower-sway" />
            <FlowerCorner position="br" size={220} className="flower-sway-delay" />

            <div className="w-hero-inner">
                <div>
                    <div className="w-hero-badge">WEDORA · ПРИГЛАСИТЕЛЬНЫЕ</div>

                    <h1 className="w-hero-title">
                        Современное пригласительное <em>на свадьбу</em>
                    </h1>

                    <p className="w-hero-sub">
                        Создаём персональный сайт-приглашение, который открывается по ссылке
                        или QR-коду. Красивый дизайн, музыка, таймер, карта и RSVP — всё
                        в одном месте, на четырёх языках.
                    </p>

                    <div className="w-hero-cta">
                        <a href="#contact" className="w-btn w-btn-primary">
                            Заказать приглашение
                            <TbArrowRight />
                        </a>
                        <a href="#showcase" className="w-btn w-btn-ghost">
                            Смотреть дизайны
                        </a>
                    </div>

                    <div className="w-hero-stats">
                        <div>
                            <div className="w-hero-stat-num font-serif">100+</div>
                            <div className="w-hero-stat-label">свадеб</div>
                        </div>
                        <div>
                            <div className="w-hero-stat-num font-serif">4</div>
                            <div className="w-hero-stat-label">языка</div>
                        </div>
                        <div>
                            <div className="w-hero-stat-num font-serif">24ч</div>
                            <div className="w-hero-stat-label">на изготовление</div>
                        </div>
                    </div>
                </div>

                <div className="w-hero-visual">
                    <div className="w-hero-phone">
                        <PhoneMockup
                            names="Алишер & Азизахон"
                            date="10.10.2026"
                            image="/images/wedora/design-1.jpg"
                            width={300}
                        />
                    </div>

                    {/* QR-карточка */}
                    <div className="w-hero-qr">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                            {/* Декоративный QR — замени на настоящий <img src="/images/qr.png"/> */}
                            <rect width="100" height="100" rx="6" fill="#fff" />
                            {[...Array(9)].map((_, r) =>
                                [...Array(9)].map((_, c) => {
                                    const filled = (r * 9 + c * 3) % 5 === 0 || (r + c) % 4 === 0;
                                    return filled ? (
                                        <rect
                                            key={`${r}-${c}`}
                                            x={10 + c * 9}
                                            y={10 + r * 9}
                                            width="7"
                                            height="7"
                                            rx="1.5"
                                            fill="#2b2621"
                                        />
                                    ) : null;
                                })
                            )}
                            <rect x="10" y="10" width="24" height="24" rx="4" stroke="#2b2621" strokeWidth="3.5" fill="none" />
                            <rect x="66" y="10" width="24" height="24" rx="4" stroke="#2b2621" strokeWidth="3.5" fill="none" />
                            <rect x="10" y="66" width="24" height="24" rx="4" stroke="#2b2621" strokeWidth="3.5" fill="none" />
                        </svg>
                        <div className="w-hero-qr-label">Сканируй</div>
                    </div>
                </div>
            </div>
        </section>
    );
}