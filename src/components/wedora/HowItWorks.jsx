import { Divider } from './Decor';

const steps = [
    {
        n: '01',
        title: 'Заявка',
        text: 'Пишете нам в Telegram или Instagram. Обсуждаем ваше свадебное приглашение, стиль, дату, локацию и необходимые детали.',
    },
    {
        n: '02',
        title: 'Дизайн',
        text: 'Подбираем дизайн онлайн-приглашения, добавляем имена, фотографии, дату и информацию о свадьбе. Согласовываем макет.',
    },
    {
        n: '03',
        title: 'Публикация',
        text: 'Размещаем готовое приглашение по персональной ссылке и создаём QR-код, который можно отправить гостям.',
    },
    {
        n: '04',
        title: 'Расссылка',
        text: 'Отправляете ссылку гостям через Telegram, WhatsApp или социальные сети. Правки и поддержка включены.',
    },
];

export default function HowItWorks() {
    return (
        <section className="w-section" id="how">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">
                        Как заказать
                    </div>

                    <h2 className="w-section-title">
                        Как заказать онлайн-пригласительное на свадьбу
                    </h2>

                    <div className="w-divider">
                        <Divider />
                    </div>

                    <p className="w-section-sub">
                        От заявки до готового свадебного приглашения —
                        4 простых шага и изготовление в течение 24 часов.
                    </p>
                </div>

                <div className="w-steps">
                    {steps.map((s, i) => (
                        <div key={i} className="w-step">
                            <div className="w-step-num font-serif">
                                {s.n}
                            </div>

                            <h3 className="w-step-title font-serif">
                                {s.title}
                            </h3>

                            <p className="w-step-text">
                                {s.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}