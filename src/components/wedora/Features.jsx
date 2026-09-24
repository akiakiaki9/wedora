import { TbQrcode, TbPalette, TbBolt, TbWorld } from 'react-icons/tb';
import { Divider } from './Decor';

const items = [
    {
        icon: TbQrcode,
        title: 'Приглашение по ссылке и QR-коду',
        text: 'Персональная ссылка и стильный QR-код для рассылки. Один клик — и гость открывает ваше свадебное приглашение.',
    },
    {
        icon: TbPalette,
        title: 'Дизайн свадебного приглашения',
        text: 'Более 10 авторских дизайнов: минимализм, восточный стиль и классика. Адаптируем оформление под вашу пару и стиль свадьбы.',
    },
    {
        icon: TbBolt,
        title: 'Изготовление за 24 часа',
        text: 'Получите готовое онлайн-приглашение в течение 24 часов после получения всех данных. Срочное изготовление — от 3 часов.',
    },
    {
        icon: TbWorld,
        title: 'На русском и других языках',
        text: 'Русский, узбекский, английский и каракалпакский. Создаём многоязычные онлайн-приглашения для ваших гостей.',
    },
];

export default function Features() {
    return (
        <section className="w-section w-features" id="features">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">
                        Почему выбирают Wedora
                    </div>

                    <h2 className="w-section-title">
                        Современные онлайн-пригласительные на свадьбу
                    </h2>

                    <div className="w-divider">
                        <Divider />
                    </div>
                </div>

                <div className="w-features-grid">
                    {items.map((it, i) => {
                        const Icon = it.icon;

                        return (
                            <div key={i} className="w-feature">
                                <Icon
                                    className="w-feature-icon"
                                    aria-hidden="true"
                                />

                                <h3 className="w-feature-title">
                                    {it.title}
                                </h3>

                                <p className="w-feature-text">
                                    {it.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}