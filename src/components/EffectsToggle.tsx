import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { toast } from 'sonner';

const STORAGE_KEY = 'effectsDisabled';

const EffectsToggle: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (disabled) {
      root.classList.add('effects-disabled');
    } else {
      root.classList.remove('effects-disabled');
    }
    try { localStorage.setItem(STORAGE_KEY, String(disabled)); } catch (e) { console.debug('Unable to save effects toggle', e); }
    // show feedback
    toast(disabled ? 'Effets désactivés' : 'Effets activés');

    const onKey = (ev: KeyboardEvent) => {
      // Ctrl+. (period) to toggle
      if (ev.ctrlKey && ev.key === '.') {
        ev.preventDefault();
        setDisabled(d => !d);
      }
    };
    globalThis.addEventListener('keydown', onKey);
    return () => globalThis.removeEventListener('keydown', onKey);
  }, [disabled]);

  return (
    <button
      aria-pressed={disabled}
      title={disabled ? 'Effets désactivés' : 'Effets activés'}
      onClick={() => setDisabled(d => !d)}
      className="ml-3 p-2 rounded-md bg-transparent text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.03)] transition-all duration-200"
    >
      <Zap size={18} className={disabled ? 'text-yellow-400' : 'text-gray-300'} />
      <span className="sr-only">Toggle Effects</span>
  <span className="ml-2 text-xs text-gray-300">{disabled ? 'Effets: off (Ctrl+.)' : 'Effets: on (Ctrl+.)'}</span>
    </button>
  );
};

export default EffectsToggle;
