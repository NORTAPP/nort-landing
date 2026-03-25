'use client';

import { useEffect, useState } from 'react';
import LiquidEther from './LiquidEther';

const TICKER_ITEMS = [
  { label: 'BTC >$120K',           side: 'YES', pct: '67%', heat: 'HOT 🔥' },
  { label: 'Rockets 52.5 wins',    side: 'YES', pct: '54%', heat: 'WARM' },
  { label: 'ETH flippening',       side: 'NO',  pct: '78%', heat: 'COOL' },
  { label: 'Fed rate cut Q3',      side: 'YES', pct: '61%', heat: 'WARM' },
  { label: 'Trump tariffs lifted', side: 'NO',  pct: '55%', heat: 'HOT 🔥' },
  { label: 'Nvidia >$200',         side: 'YES', pct: '72%', heat: 'HOT 🔥' },
];

const STATS = [
  ['2.4K+', 'Beta Signups'],
  ['31', 'Live Signals'],
  ['Free', 'To Start'],
] as const;

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      paddingTop: 96, paddingBottom: 80,
      overflow: 'hidden',
    }}>

      {/* LAYER 1 — animated background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {reducedMotion ? (
          <div style={{
            width: '100%', height: '100%',
            background: 'radial-gradient(ellipse 70% 60% at 20% 30%, rgba(0,200,150,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(26,127,232,0.18) 0%, transparent 60%)',
          }} />
        ) : (
          <LiquidEther
            colors={['#1A7FE8', '#1A7FE8', '#37f1ce']}
            mouseForce={25}
            cursorSize={120}
            isViscous={false}
            viscous={40}
            iterationsViscous={24}
            iterationsPoisson={16}
            resolution={0.35}
            isBounce={false}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={2.5}
            takeoverDuration={0.25}
            autoResumeDelay={0}
            autoRampDuration={0.3}
          />
        )}
      </div>

      {/* LAYER 2 — Dot-grid texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* LAYER 3 — Glassmorphism hero card */}
      <div className="fade-up" style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 1152,
        margin: '0 auto', padding: '0 24px',
      }}>
        <div style={{
          background: 'rgba(5,8,18,0.30)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: 28,
          padding: 'clamp(32px, 5vw, 60px)',
          boxShadow: '0 0 0 1px rgba(0,200,150,0.12), 0 32px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10)',
          textAlign: 'center',
        }}>

          {/* Eyebrow */}
          <div style={{ marginBottom: 14 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontFamily: 'var(--font-body)',
              color: 'var(--text-3)', letterSpacing: '0.06em',
            }}>
              Welcome to
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(64px, 12vw, 120px)',
            lineHeight: 0.9, letterSpacing: '-0.04em',
            color: 'var(--text)', marginBottom: 16,
          }}>NORT</h1>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(13px, 1.5vw, 16px)',
            color: 'var(--accent)', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 24,
          }}>
            Polymarket Trading Made Easy
          </p>

          {/* Subheading */}
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,18px)',
            color: 'var(--text-2)', lineHeight: 1.65,
            maxWidth: 520, margin: '0 auto 36px',
          }}>
            NORT ranks the best Polymarket opportunities in real time — then lets you ask AI for a plain-English breakdown before you trade. Whether you&apos;re just starting out or already trading, NORT gives you the edge.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="https://nort-rho.vercel.app" className="btn btn-primary">
              Start Trading Free
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </a>
            <a href="#features" className="btn btn-ghost">See How It Works</a>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(20px,4vw,48px)', marginBottom: 0,
          }}>
            {STATS.map(([v, l], i) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px,4vw,48px)' }}>
                {i > 0 && <div style={{ width: 1, height: 32, background: 'var(--border)' }} />}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text)', letterSpacing: '-0.02em' }}>{v}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginTop: 3 }}>{l}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* LAYER 4 — Live ticker strip */}
      <div
        role="marquee"
        aria-label="Live market signals"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          borderTop: '1px solid var(--border)', background: 'rgba(5,8,18,0.88)',
          backdropFilter: 'blur(12px)', padding: '9px 0', overflow: 'hidden',
        }}
      >
        <div className="ticker-track" style={{ display: 'flex', gap: 48, width: 'max-content' }}>
          {TICKER_ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-display)', color: 'var(--text-2)', fontWeight: 500 }}>{item.label}</span>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-display)', color: 'var(--accent)', fontWeight: 700 }}>{item.side} {item.pct}</span>
              <span style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--font-display)' }}>{item.heat}</span>
            </div>
          ))}
          {TICKER_ITEMS.map((item, i) => (
            <div key={`dup-${i}`} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-display)', color: 'var(--text-2)', fontWeight: 500 }}>{item.label}</span>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-display)', color: 'var(--accent)', fontWeight: 700 }}>{item.side} {item.pct}</span>
              <span style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--font-display)' }}>{item.heat}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
