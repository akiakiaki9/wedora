'use client';

import Image from 'next/image';

/**
 * PhoneMockup
 * props:
 *  - names: строка с именами («Алишер & Азизахон»)
 *  - date: дата («10.10.2026»)
 *  - image: путь к фоновому фото (например '/images/wedora/design-1.jpg')
 *  - qr: путь к QR-картинке (опционально, покажем мини-QR снизу)
 *  - width: ширина телефона в px
 */
export default function PhoneMockup({
    names = 'Алишер & Азизахон',
    date = '10.10.2026',
    image = '/images/wedora/design-1.jpg',
    width = 280,
}) {
    return (
        <div
            className="phone-mockup"
            style={{ width, aspectRatio: '9 / 19.5' }}
            aria-hidden="true"
        >
            {/* Корпус */}
            <div className="phone-frame">
                {/* Динамик / челка */}
                <div className="phone-notch">
                    <span className="phone-speaker" />
                    <span className="phone-camera" />
                </div>

                {/* Экран */}
                <div className="phone-screen">
                    {image && (
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="280px"
                            className="phone-screen-bg"
                            priority
                        />
                    )}
                    <div className="phone-screen-overlay" />

                    {/* Контент приглашения */}
                    <div className="phone-content">
                        <div className="phone-badge">Wedding invitation</div>
                        <h3 className="phone-names font-serif">{names}</h3>
                        <div className="phone-date">{date}</div>
                        <div className="phone-ayat font-arabic">وَأَلَّفَ بَيْنَ قُلُوبِهِمْ</div>
                    </div>

                    {/* Домашний индикатор */}
                    <div className="phone-home" />
                </div>
            </div>
        </div>
    );
}