'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbMenu2, TbX, TbPhone } from 'react-icons/tb';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    // Закрытие по Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const links = [
        { href: '#features', label: 'Преимущества' },
        { href: '#how', label: 'Как работает' },
        { href: '#showcase', label: 'Дизайны' },
        { href: '#pricing', label: 'Тарифы' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Контакты' },
    ];

    const phone = '+998 50 095 33 31';
    const phoneHref = 'tel:+998500953331';

    return (
        <>
            <nav className={`w-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link href="/" className="w-nav-logo">
                    <svg viewBox="0 0 40 40" className="w-nav-logo-mark" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <circle cx="14" cy="20" r="9" />
                        <circle cx="26" cy="20" r="9" opacity="0.7" />
                    </svg>
                    <span>Wedora</span>
                </Link>

                <div className="w-nav-links">
                    {links.map((l) => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                </div>

                <div className="w-nav-right">
                    <a href={phoneHref} className="w-nav-phone" aria-label={`Позвонить ${phone}`}>
                        <TbPhone />
                        <span>{phone}</span>
                    </a>
                    <a href="#contact" className="w-nav-cta">Заказать</a>
                </div>

                <button
                    className="w-nav-burger"
                    onClick={() => setOpen(true)}
                    aria-label="Открыть меню"
                    type="button"
                >
                    <TbMenu2 />
                </button>
            </nav>

            {open && (
                <div className="w-nav-mobile" role="dialog" aria-modal="true">
                    <button
                        className="w-nav-mobile-close"
                        onClick={() => setOpen(false)}
                        aria-label="Закрыть меню"
                        type="button"
                    >
                        <TbX />
                    </button>

                    <div className="w-nav-mobile-links">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="w-nav-mobile-footer">
                        <a href={phoneHref} className="w-nav-mobile-phone" onClick={() => setOpen(false)}>
                            <TbPhone />
                            <span>{phone}</span>
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="w-btn w-btn-primary"
                        >
                            Заказать
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}