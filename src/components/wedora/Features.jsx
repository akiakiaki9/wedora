import { TbQrcode, TbPalette, TbBolt, TbWorld } from 'react-icons/tb';
import { Divider } from './Decor';

const items = [
    {
        icon: TbQrcode,
        title: 'Ссылка & QR-код',
        text: 'Персональная ссылка и стильный QR-код для рассылки. Один клик — и гость на вашем приглашении.',
    },
    {
        icon: TbPalette,
        title: 'Дизайн на выбор',
        text: 'Более 10 авторских шаблонов: минимализм, восточный стиль, классика. Кастомизируем под вашу пару.',
    },
    {
        icon: TbBolt,
        title: 'Быстро выполним',
        text: 'Готовое приглашение в течение 24 часов после получения всех данных. Срочные заказы — от 3 часов.',
    },
    {
        icon: TbWorld,
        title: 'На любых языках',
        text: 'Русский, узбекский, английский и каракалпакский. Гости увидят приглашение на своём языке.',
    },
];

export default function Features() {
    return (
        <section className="w-section w-features" id="features">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">Преимущества</div>
                    <h2 className="w-section-title">Почему выбирают Wedora</h2>
                    <div className="w-divider"><Divider /></div>
                </div>

                <div className="w-features-grid">
                    {items.map((it, i) => {
                        const Icon = it.icon;
                        return (
                            <div key={i} className="w-feature">
                                <Icon className="w-feature-icon" />
                                <h3 className="w-feature-title">{it.title}</h3>
                                <p className="w-feature-text">{it.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}