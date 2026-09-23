import { TbBrandTelegram, TbBrandInstagram, TbPhone } from 'react-icons/tb';
import { Divider } from './Decor';

export default function Contact() {
    return (
        <section className="w-section w-contact" id="contact">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">Контакты</div>
                    <h2 className="w-section-title">Заказать приглашение</h2>
                    <div className="w-divider"><Divider /></div>
                    <p className="w-section-sub">
                        Напишите нам удобным способом — ответим в течение 15 минут и поможем
                        выбрать дизайн.
                    </p>
                </div>

                <div className="w-contact-grid">
                    <div className="w-contact-cards">
                        <a
                            href="https://t.me/wedora_uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-contact-card"
                        >
                            <div className="w-contact-icon"><TbBrandTelegram /></div>
                            <div>
                                <div className="w-contact-text-label">Telegram</div>
                                <div className="w-contact-text-value">@wedora_uz</div>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/wedora.uz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-contact-card"
                        >
                            <div className="w-contact-icon"><TbBrandInstagram /></div>
                            <div>
                                <div className="w-contact-text-label">Instagram</div>
                                <div className="w-contact-text-value">@wedora.uz</div>
                            </div>
                        </a>

                        <a
                            href="tel:+998500953331"
                            className="w-contact-card"
                        >
                            <div className="w-contact-icon"><TbPhone /></div>
                            <div>
                                <div className="w-contact-text-label">Телефон</div>
                                <div className="w-contact-text-value">+998 50 095 33 31</div>
                            </div>
                        </a>
                    </div>

                    <div className="w-contact-info">
                        <h3 className="font-serif">Что нужно для заказа</h3>
                        <p>
                            Просто напишите нам, и мы зададим все вопросы. Обычно процесс
                            занимает 5 минут — после этого останется только ждать готовое
                            приглашение.
                        </p>
                        <ul className="w-contact-list">
                            <li>Имена жениха и невесты</li>
                            <li>Дата, время и место свадьбы</li>
                            <li>Языки приглашения</li>
                            <li>Фото (если есть) и музыка</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}