'use client';

import { useState } from 'react';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import { Divider } from './Decor';

export default function VideoDemo() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="w-section w-video" id="video">
            <div className="w-section-inner">
                <div className="w-section-head">
                    <div className="w-section-label">Видео-приглашение</div>

                    <h2 className="w-section-title">
                        Как выглядит онлайн-приглашение на свадьбу
                    </h2>

                    <div className="w-divider">
                        <Divider />
                    </div>

                    <p className="w-section-sub">
                        Посмотрите, как выглядит свадебное приглашение онлайн:
                        открытие по ссылке, анимации, музыка, информация о свадьбе,
                        карта, таймер и QR-код для гостей.
                    </p>
                </div>

                <div className="w-video-frame">
                    {!playing ? (
                        <>
                            <img
                                src="/images/wedora/video-poster.jpg"
                                alt="Пример дизайна онлайн-приглашения на свадьбу Wedora"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                onError={(e) => {
                                    e.currentTarget.style.background =
                                        'linear-gradient(135deg,#efe7db 0%,#c9b79c 100%)';
                                    e.currentTarget.removeAttribute('src');
                                }}
                            />

                            <button
                                type="button"
                                className="w-video-play"
                                onClick={() => setPlaying(true)}
                                aria-label="Посмотреть видео с примером свадебного приглашения"
                            >
                                <TbPlayerPlayFilled aria-hidden="true" />
                            </button>
                        </>
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                            title="Видео-пример онлайн-приглашения на свадьбу Wedora"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </section>
    );
}