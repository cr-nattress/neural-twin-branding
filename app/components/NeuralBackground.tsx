'use client'

export function NeuralBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main SVG container with synapse patterns */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.15 }}
      >
        {/* Define gradients for the synapses */}
        <defs>
          <linearGradient id="synapseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animation keyframes for moving dots */}
          <style>{`
            @keyframes pulse-glow {
              0% {
                opacity: 0.3;
                r: 3;
              }
              50% {
                opacity: 0.8;
                r: 6;
              }
              100% {
                opacity: 0.3;
                r: 3;
              }
            }

            @keyframes flow-line {
              0% {
                stroke-dashoffset: 1000;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            .synapse-line {
              stroke-dasharray: 1000;
              animation: flow-line 8s linear infinite;
            }

            .synapse-line:nth-child(2) {
              animation-delay: 2s;
            }

            .synapse-line:nth-child(3) {
              animation-delay: 4s;
            }

            .synapse-dot {
              animation: pulse-glow 3s ease-in-out infinite;
              filter: drop-shadow(0 0 4px #2563eb);
            }

            .synapse-dot:nth-child(2) {
              animation-delay: 1s;
            }

            .synapse-dot:nth-child(3) {
              animation-delay: 2s;
            }
          `}</style>
        </defs>

        {/* Network of synapse lines */}
        <g opacity="0.4">
          {/* Horizontal flowing lines */}
          <line
            className="synapse-line"
            x1="0"
            y1="270"
            x2="1920"
            y2="270"
            stroke="url(#synapseGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <line
            className="synapse-line"
            x1="1920"
            y1="540"
            x2="0"
            y2="540"
            stroke="url(#synapseGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <line
            className="synapse-line"
            x1="0"
            y1="810"
            x2="1920"
            y2="810"
            stroke="url(#synapseGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Diagonal flowing lines */}
          <line
            className="synapse-line"
            x1="0"
            y1="0"
            x2="1920"
            y2="1080"
            stroke="url(#synapseGradient)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <line
            className="synapse-line"
            x1="1920"
            y1="0"
            x2="0"
            y2="1080"
            stroke="url(#synapseGradient)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
        </g>

        {/* Pulsing synapse nodes */}
        <g>
          <circle className="synapse-dot" cx="300" cy="300" r="3" fill="#2563eb" filter="url(#glow)" />
          <circle className="synapse-dot" cx="600" cy="200" r="3" fill="#9333ea" filter="url(#glow)" />
          <circle className="synapse-dot" cx="900" cy="400" r="3" fill="#2563eb" filter="url(#glow)" />
          <circle className="synapse-dot" cx="1200" cy="250" r="3" fill="#9333ea" filter="url(#glow)" />
          <circle className="synapse-dot" cx="1500" cy="500" r="3" fill="#2563eb" filter="url(#glow)" />

          <circle className="synapse-dot" cx="400" cy="650" r="3" fill="#9333ea" filter="url(#glow)" />
          <circle className="synapse-dot" cx="800" cy="700" r="3" fill="#2563eb" filter="url(#glow)" />
          <circle className="synapse-dot" cx="1100" cy="600" r="3" fill="#9333ea" filter="url(#glow)" />
          <circle className="synapse-dot" cx="1600" cy="750" r="3" fill="#2563eb" filter="url(#glow)" />

          <circle className="synapse-dot" cx="350" cy="900" r="3" fill="#2563eb" filter="url(#glow)" />
          <circle className="synapse-dot" cx="700" cy="950" r="3" fill="#9333ea" filter="url(#glow)" />
          <circle className="synapse-dot" cx="1300" cy="850" r="3" fill="#2563eb" filter="url(#glow)" />
        </g>
      </svg>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5" />
    </div>
  )
}
