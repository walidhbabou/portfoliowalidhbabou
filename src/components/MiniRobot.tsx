import React from 'react';

const MiniRobot: React.FC = () => (
  <div style={{
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
  }}>
    <div style={{
      background: 'rgba(255,255,255,0.95)',
      color: '#3730a3',
      borderRadius: '16px',
      boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)',
      padding: '10px 16px',
      fontSize: '1rem',
      marginBottom: '4px',
      maxWidth: '220px',
      fontWeight: 500,
      border: '1.5px solid #a5b4fc',
      animation: 'robot-fadein 1.2s',
    }}>
  Bonjour, je suis le nouveau robot !
  <br />
  Prochainement plus de fonctionnalités.
    </div>
    <div style={{
      width: '64px',
      height: '64px',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: '50%',
      boxShadow: '0 4px 24px 0 rgba(59,130,246,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      border: '1.5px solid #a5b4fc',
      animation: 'robot-bounce 2.5s infinite',
    }}
      title="Mini Robot Assistant"
    >
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="18" fill="#f3f4f6" stroke="#6366f1" strokeWidth="2" />
        <rect x="10" y="15" width="18" height="10" rx="5" fill="#6366f1" />
        <ellipse cx="15" cy="20" rx="2" ry="2.5" fill="#fff" />
        <ellipse cx="23" cy="20" rx="2" ry="2.5" fill="#fff" />
        <ellipse cx="15" cy="20" rx="1" ry="1.2" fill="#6366f1" />
        <ellipse cx="23" cy="20" rx="1" ry="1.2" fill="#6366f1" />
        <rect x="17" y="25" width="4" height="2" rx="1" fill="#a5b4fc" />
        <rect x="13" y="12" width="2" height="4" rx="1" fill="#6366f1" />
        <rect x="23" y="12" width="2" height="4" rx="1" fill="#6366f1" />
      </svg>
      <style>{`
        @keyframes robot-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes robot-fadein {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  </div>
);

export default MiniRobot;
