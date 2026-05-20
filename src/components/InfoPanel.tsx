import React from 'react';

interface InfoPanelProps {
  meaning: string;
  exampleTh: string;
  exampleJa: string;
  visible: boolean;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ meaning, exampleTh, exampleJa, visible }) => {
  return (
    <div
      className={`
        w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
        p-6 space-y-4 transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      style={{ animation: visible ? 'fadeInUp 0.4s ease both' : 'none' }}
    >
      {/* Meaning */}
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
          <span className="text-violet-300 text-xs font-bold">意</span>
        </span>
        <div>
          <p className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-1">意味</p>
          <p className="text-white/90 text-lg font-medium">{meaning}</p>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {/* Example sentence */}
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
          <span className="text-cyan-300 text-xs font-bold">例</span>
        </span>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-1">例文</p>
          <p
            className="text-white text-lg leading-relaxed"
            style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
          >
            {exampleTh}
          </p>
          <p className="text-white/60 text-sm leading-relaxed">{exampleJa}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
