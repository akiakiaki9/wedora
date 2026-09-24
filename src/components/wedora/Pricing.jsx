import { Divider } from "./Decor";

const plans = [
    {
        name: 'Base',
        desc: 'Стандартное онлайн-приглашение на свадьбу',
        price: '200 000',
        note: 'разово',
        features: [
            '1 онлайн-приглашение на свадьбу',
            'Готовый дизайн на выбор',
            'Персональная ссылка и QR-код',
            'До 4 языков',
            'Фоновая музыка',
            'Таймер до свадьбы',
            'Карта локации',
            'Срок хранения 12 месяцев',
        ],
    },
    {
        name: 'Pro',
        desc: 'Персональное приглашение для каждого гостя',
        price: '300 000',
        note: 'разово',
        featured: true,
        features: [
            'Всё из тарифа Base',
            'Персонализация каждого гостя по имени',
            'Гость видит своё имя на приглашении',
            'Неограниченное число гостей',
            'Приоритетная поддержка',
        ],
    },
];

export default function Pricing() {
    return (
        <section className="w-section" id="pricing">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">
                        Цены на свадебные приглашения
                    </div>

                    <h2 className="w-section-title">
                        Стоимость онлайн-приглашения на свадьбу
                    </h2>

                    <div className="w-divider">
                        <Divider />
                    </div>

                    <p className="w-section-sub">
                        Выберите подходящий тариф для вашего свадебного
                        приглашения. Все тарифы включают персональную ссылку,
                        QR-код, красивый дизайн и поддержку. Оплата — после
                        согласования макета.
                    </p>
                </div>

                <div className="w-pricing-grid">
                    {plans.map((p, i) => (
                        <div
                            key={i}
                            className={`w-price ${p.featured ? 'featured' : ''}`}
                        >
                            <div className="w-price-name">
                                {p.name}
                            </div>

                            <div className="w-price-desc">
                                {p.desc}
                            </div>

                            <div className="w-price-value font-serif">
                                {p.price}
                                <span>сум</span>
                            </div>

                            <div className="w-price-note">
                                {p.note}
                            </div>

                            <ul className="w-price-list">
                                {p.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-btn ${p.featured
                                        ? 'w-btn-primary'
                                        : 'w-btn-ghost'
                                    }`}
                                aria-label={`Заказать ${p.name} — онлайн-приглашение на свадьбу`}
                            >
                                Заказать
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}