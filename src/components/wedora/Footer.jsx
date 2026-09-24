export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-footer">
            <div className="w-footer-inner">
                <div>
                    <div className="w-footer-brand">Wedora</div>

                    <p className="w-footer-desc">
                        Современные онлайн-приглашения на свадьбу с персональным
                        дизайном, QR-кодом, музыкой, таймером и поддержкой
                        нескольких языков.
                    </p>
                </div>

                <div className="w-footer-col">
                    <h4>Навигация</h4>

                    <a href="#features">
                        Онлайн-приглашения
                    </a>

                    <a href="#how">
                        Как заказать
                    </a>

                    <a href="#showcase">
                        Дизайны свадебных приглашений
                    </a>

                    <a href="#pricing">
                        Стоимость приглашения
                    </a>

                    <a href="#faq">
                        Частые вопросы
                    </a>
                </div>

                <div className="w-footer-col">
                    <h4>Услуги</h4>

                    <a href="#pricing">
                        Онлайн-приглашение на свадьбу
                    </a>

                    <a href="#pricing">
                        QR-код для приглашения
                    </a>

                    <a href="#pricing">
                        Сайт-приглашение на свадьбу
                    </a>

                    <a href="#contact">
                        Индивидуальный дизайн
                    </a>
                </div>

                <div className="w-footer-col">
                    <h4>Контакты</h4>

                    <a
                        href="https://t.me/wedora_uz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram: @wedora_uz
                    </a>

                    <a
                        href="https://www.instagram.com/wedora.uz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram: @wedora.uz
                    </a>

                    <a href="tel:+998500953331">
                        +998 50 095 33 31
                    </a>
                </div>
            </div>

            <div className="w-footer-bottom">
                <span>
                    © {year} Wedora.uz — Все права защищены
                </span>

                <span>
                    Сделано с ♥ в студии{' '}
                    <a
                        href="https://akbarsoft.uz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Akbar Soft
                    </a>
                </span>
            </div>
        </footer>
    );
}