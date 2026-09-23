import { Divider } from './Decor';

const steps = [
    { n: '01', title: 'Заявка', text: 'Пишете нам в Telegram или Instagram. Обсуждаем стиль, дату и локацию.' },
    { n: '02', title: 'Дизайн', text: 'Подбираем шаблон, добавляем имена, фото и детали. Согласовываем макет.' },
    { n: '03', title: 'Публикация', text: 'Размещаем приглашение по ссылке и генерируем персональный QR-код.' },
    { n: '04', title: 'Расссылка', text: 'Отправляете гостям ссылку. Мы остаёмся на связи — правки и поддержка включены.' },
];

export default function HowItWorks() {
    return (
        <section className="w-section" id="how">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">Процесс</div>
                    <h2 className="w-section-title">Как это работает</h2>
                    <div className="w-divider"><Divider /></div>
                    <p className="w-section-sub">
                        От идеи до готового приглашения — 4 простых шага и 24 часа.
                    </p>
                </div>

                <div className="w-steps">
                    {steps.map((s, i) => (
                        <div key={i} className="w-step">
                            <div className="w-step-num font-serif">{s.n}</div>
                            <h3 className="w-step-title font-serif">{s.title}</h3>
                            <p className="w-step-text">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}