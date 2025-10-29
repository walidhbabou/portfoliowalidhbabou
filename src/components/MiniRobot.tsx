import React, { useEffect, useRef, useState } from 'react';

const MiniRobot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Bonjour, je suis le robot !');
  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftPupilRef = useRef<SVGEllipseElement | null>(null);
  const rightPupilRef = useRef<SVGEllipseElement | null>(null);

  useEffect(() => {
    // simple eye follow effect when mouse moves near the robot
    function onMove(e: MouseEvent) {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const max = 4; // max pupil offset
      const rx = Math.max(-max, Math.min(max, (dx / rect.width) * max * 2));
      const ry = Math.max(-max, Math.min(max, (dy / rect.height) * max * 2));
      if (leftPupilRef.current) leftPupilRef.current.setAttribute('cx', String(15 + rx));
      if (rightPupilRef.current) rightPupilRef.current.setAttribute('cx', String(23 + rx));
      if (leftPupilRef.current) leftPupilRef.current.setAttribute('cy', String(20 + ry));
      if (rightPupilRef.current) rightPupilRef.current.setAttribute('cy', String(20 + ry));
    }

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // small helper to scroll to contact
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const downloadCV = () => {
    const lang = document.documentElement.lang || 'fr';
    const cvFile = lang.startsWith('en') ? '/cv_walid_an.pdf' : '/cv_walid_fr.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = cvFile.split('/').pop() || 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div ref={rootRef} className="mini-robot-root" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {/* Floating message */}
      <div className={`mini-robot-bubble ${open ? 'open' : ''}`} aria-hidden={!open} role="dialog">
        <div className="mini-robot-bubble-content">
          <div className="text-sm text-slate-800 font-medium">{message}</div>
          <div className="mt-2 flex gap-2">
            <button onClick={downloadCV} className="px-3 py-1 rounded-md text-xs font-semibold bg-white/90 text-[rgb(var(--neon-primary))]">CV</button>
            <button onClick={scrollToContact} className="px-3 py-1 rounded-md text-xs font-semibold bg-white/90 text-[rgb(var(--neon-secondary))]">Contact</button>
            <a href="https://github.com/walidhbabou" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md text-xs font-semibold bg-white/90 text-slate-700">GitHub</a>
          </div>
        </div>
      </div>

      {/* Robot button */}
      <button
        aria-label="Mini robot assistant"
        title="Mini Robot Assistant"
        className="mini-robot-btn"
        onClick={() => { setOpen(!open); setMessage(open ? 'À bientôt 👋' : 'Salut — clique pour options'); }}
        onMouseEnter={() => setMessage('Salut — clique pour options')}
        onMouseLeave={() => setMessage(open ? 'Options ouvertes' : 'Bonjour, je suis le robot !')}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#f3f4f6" stroke="#6366f1" strokeWidth="2" />
          <rect x="14" y="18" width="20" height="12" rx="6" fill="#6366f1" />
          <ellipse ref={leftPupilRef} cx="15" cy="20" rx="2.6" ry="3.2" fill="#fff" />
          <ellipse ref={rightPupilRef} cx="23" cy="20" rx="2.6" ry="3.2" fill="#fff" />
          <ellipse cx="15" cy="20" rx="1" ry="1.2" fill="#6366f1" />
          <ellipse cx="23" cy="20" rx="1" ry="1.2" fill="#6366f1" />
          <rect x="20" y="28" width="8" height="3" rx="1.5" fill="#a5b4fc" />
          <rect x="13" y="14" width="3" height="6" rx="1" fill="#6366f1" />
          <rect x="32" y="14" width="3" height="6" rx="1" fill="#6366f1" />
        </svg>
      </button>

      <style>{`
        .mini-robot-root { display:flex; flex-direction:column; align-items:flex-end; gap:8px; }
        .mini-robot-btn { width:64px; height:64px; background: rgba(255,255,255,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 8px 30px rgba(0,0,0,0.25); border:1px solid rgba(165,180,252,0.9); cursor:pointer; transition: transform 220ms ease, box-shadow 220ms ease; }
        .mini-robot-btn:hover { transform: translateY(-6px) scale(1.03); box-shadow:0 20px 60px rgba(0,0,0,0.35); }
        .mini-robot-bubble { transform-origin: bottom right; background: #ffffff; color: #0b1220; border-radius:12px; padding:10px; box-shadow:0 8px 30px rgba(2,6,23,0.45); border:1px solid rgba(99,102,241,0.12); max-width:260px; opacity:0; pointer-events:none; transform: translateY(10px) scale(0.98); transition: opacity 220ms ease, transform 220ms ease; }
        .mini-robot-bubble.open { opacity:1; pointer-events:auto; transform: translateY(0) scale(1); }
        .mini-robot-bubble-content { display:flex; flex-direction:column; gap:8px; }
      `}</style>
    </div>
  );
};

export default MiniRobot;
