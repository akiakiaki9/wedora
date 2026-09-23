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
                    <div className="w-section-label">Видео-демо</div>
                    <h2 className="w-section-title">Как выглядит приглашение</h2>
                    <div className="w-divider"><Divider /></div>
                    <p className="w-section-sub">
                        Посмотрите короткое видео: открытие приглашения, анимации,
                        переходы между секциями и QR-код в действии.
                    </p>
                </div>

                <div className="w-video-frame">
                    {!playing ? (
                        <>
                            {/* Превью: положи видео-постер /images/wedora/video-poster.jpg */}
                            <img
                                src="/images/wedora/video-poster.jpg"
                                alt="Превью видео"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.currentTarget.style.background =
                                        'linear-gradient(135deg,#efe7db 0%,#c9b79c 100%)';
                                    e.currentTarget.removeAttribute('src');
                                }}
                            />
                            <button
                                className="w-video-play"
                                onClick={() => setPlaying(true)}
                                aria-label="Воспроизвести видео"
                            >
                                <TbPlayerPlayFilled />
                            </button>
                        </>
                    ) : (
                        // Замени ссылку на свой YouTube / Vimeo embed или <video src="/images/wedora/demo.mp4" controls autoPlay/>
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                            title="Wedora demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </section>
    );
}