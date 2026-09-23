import PhoneMockup from './PhoneMockup';
import { Divider } from './Decor';

export default function Showcase() {
    return (
        <section className="w-section w-showcase" id="showcase">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">Готовые дизайны</div>
                    <h2 className="w-section-title">Приглашение в вашем стиле</h2>
                    <div className="w-divider"><Divider /></div>
                    <p className="w-section-sub">
                        QR-код ведёт на персональный сайт-приглашение. Гость открывает
                        красивую страницу с именами, датой, локацией и таймером до свадьбы.
                    </p>
                </div>

                <div className="w-showcase-stage">
                    {/* Левый телефон */}
                    <div className="w-phone-slot left">
                        <PhoneMockup
                            names="Aziz & Malika"
                            date="20.06.2026"
                            image="/images/wedora/design-2.jpg"
                            width={260}
                        />
                    </div>

                    {/* Центр: QR + подсказка */}
                    <div className="w-showcase-center">
                        <div className="w-showcase-card">
                            <div className="w-showcase-qr">
                                {/* Замени SVG на <img src="/images/wedora/qr.png"/> с реальным QR */}
                                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                                    {[...Array(12)].map((_, r) =>
                                        [...Array(12)].map((_, c) => {
                                            const filled =
                                                (r * 13 + c * 7) % 5 === 0 || (r + c) % 3 === 0;
                                            return filled ? (
                                                <rect
                                                    key={`${r}-${c}`}
                                                    x={6 + c * 7.4}
                                                    y={6 + r * 7.4}
                                                    width="6"
                                                    height="6"
                                                    rx="1.2"
                                                    fill="#2b2621"
                                                />
                                            ) : null;
                                        })
                                    )}
                                    <rect x="6" y="6" width="22" height="22" rx="4" stroke="#2b2621" strokeWidth="3" fill="none" />
                                    <rect x="72" y="6" width="22" height="22" rx="4" stroke="#2b2621" strokeWidth="3" fill="none" />
                                    <rect x="6" y="72" width="22" height="22" rx="4" stroke="#2b2621" strokeWidth="3" fill="none" />
                                </svg>
                            </div>
                            <div className="w-showcase-hint font-serif">Сканируй</div>
                            <div className="w-showcase-hint-sub">и перейди по ссылке</div>
                        </div>

                        <div className="w-showcase-arrow">↔</div>
                    </div>

                    {/* Правый телефон */}
                    <div className="w-phone-slot right">
                        <PhoneMockup
                            names="Alisher & Aziza"
                            date="10.10.2026"
                            image="/images/wedora/design-3.jpg"
                            width={260}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}