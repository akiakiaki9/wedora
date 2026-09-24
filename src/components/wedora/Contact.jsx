import {
    TbBrandTelegram,
    TbBrandInstagram,
    TbPhone,
} from 'react-icons/tb';
import { Divider } from './Decor';

export default function Contact() {
    return (
        <section className="w-section w-contact" id="contact">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">
                        Заказать онлайн-приглашение
                    </div>

                    <h2 className="w-section-title">
                        Заказать онлайн-приглашение на свадьбу
                    </h2>

                    <div className="w-divider">
                        <Divider />
                    </div>

                    <p className="w-section-sub">
                        Напишите нам удобным способом — поможем выбрать дизайн
                        свадебного приглашения, обсудим детали и подготовим
                        персональную страницу для ваших гостей.
                    </p>
                </div>

                <div className="w-contact-grid">
                    <div className="w-contact-cards">
                        <a
                            href="https://t.me/wedora_uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-contact-card"
                            aria-label="Заказать онлайн-приглашение через Telegram Wedora"
                        >
                            <div className="w-contact-icon">
                                <TbBrandTelegram aria-hidden="true" />
                            </div>

                            <div>
                                <div className="w-contact-text-label">
                                    Telegram
                                </div>
                                <div className="w-contact-text-value">
                                    @wedora_uz
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/wedora.uz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-contact-card"
                            aria-label="Заказать свадебное приглашение через Instagram Wedora"
                        >
                            <div className="w-contact-icon">
                                <TbBrandInstagram aria-hidden="true" />
                            </div>

                            <div>
                                <div className="w-contact-text-label">
                                    Instagram
                                </div>
                                <div className="w-contact-text-value">
                                    @wedora.uz
                                </div>
                            </div>
                        </a>

                        <a
                            href="tel:+998500953331"
                            className="w-contact-card"
                            aria-label="Позвонить Wedora по номеру +998 50 095 33 31"
                        >
                            <div className="w-contact-icon">
                                <TbPhone aria-hidden="true" />
                            </div>

                            <div>
                                <div className="w-contact-text-label">
                                    Телефон
                                </div>
                                <div className="w-contact-text-value">
                                    +998 50 095 33 31
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="w-contact-info">
                        <h3 className="font-serif">
                            Что нужно для заказа свадебного приглашения
                        </h3>

                        <p>
                            Просто напишите нам. Мы уточним детали свадьбы,
                            поможем выбрать дизайн и подготовим онлайн-приглашение.
                            Обычно оформление заказа занимает около 5 минут.
                        </p>

                        <ul className="w-contact-list">
                            <li>Имена жениха и невесты</li>
                            <li>Дата, время и место свадьбы</li>
                            <li>Языки приглашения</li>
                            <li>Фото, музыка и дополнительные пожелания</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}