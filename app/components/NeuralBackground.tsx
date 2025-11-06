/**
 * @module Neural Network Background Animation
 * @purpose Renders an animated SVG neural network visualization as a fixed background layer
 * @context Used as a visual backdrop in the homepage (app/page.tsx) to create an immersive, tech-forward aesthetic
 * @dependencies React 19 for component rendering, Tailwind CSS for container styling
 * @exports NeuralBackground
 *
 * @remarks
 * The component creates an animated neural network with:
 * - 5 flowing synaptic lines (3 horizontal, 2 diagonal) with gradient colors
 * - 12 pulsing synapse nodes positioned across the viewBox
 * - CSS keyframe animations for perpetual flowing and pulsing effects
 * - Gaussian blur filters for glow effects on nodes and lines
 * - Fixed positioning layer (z-0) so page content renders above
 */

"use client";

/**
 * NeuralBackground
 *
 * Renders an animated neural network SVG as a fixed background element.
 * Creates a visually engaging backdrop with flowing lines and pulsing nodes.
 *
 * @returns React element containing fixed-position SVG with animated neural network visualization
 *
 * @pattern Visual component using SVG primitives with CSS keyframe animations
 * @assumes Parent container is full viewport height; pointer-events-none prevents interaction
 * @sideeffects
 * - CSS animations run continuously (flow-line: 8s, pulse-glow: 3s)
 * - SVG viewBox: 1920x1080 scaled to container size
 * - Opacity set to 0.15 for subtle background effect
 *
 * @example
 * // Usage in a page component
 * export default function Page() {
 *   return <NeuralBackground />
 * }
 */
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
          {/* Gradient creates depth effect: blue (opaque) → purple → blue (transparent) */}
          <linearGradient
            id="synapseGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>

          {/* Gaussian blur + merge creates soft glow effect without performance penalty */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animation keyframes for moving dots and flowing lines */}
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
              /* 8s animation creates flowing wave effect; linear easing ensures consistent speed */
              animation: flow-line 8s linear infinite;
            }

            /* Staggered delays prevent all lines from animating in sync; creates more organic look */
            .synapse-line:nth-child(2) {
              animation-delay: 2s;
            }

            .synapse-line:nth-child(3) {
              animation-delay: 4s;
            }

            .synapse-dot {
              /* 3s pulse creates breathing effect; ease-in-out softens start/end transitions */
              animation: pulse-glow 3s ease-in-out infinite;
              /* drop-shadow keeps glow effect visible when nodes scale up to r=6 */
              filter: drop-shadow(0 0 4px #2563eb);
            }

            /* Stagger node animations to create depth and prevent synchronized pulsing */
            .synapse-dot:nth-child(2) {
              animation-delay: 1s;
            }

            .synapse-dot:nth-child(3) {
              animation-delay: 2s;
            }
          `}</style>
        </defs>

        {/* Network of synapse lines: 5 total (3 horizontal, 2 diagonal) for balanced composition */}
        <g opacity="0.4">
          {/* Horizontal lines: create structured grid feel; opacity 0.4 ensures background doesn't overwhelm content */}
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

          {/* Diagonal lines: thinner (1.5 width) than horizontal; create dynamic flow and depth */}
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

        {/* Pulsing synapse nodes: 12 total positioned across viewBox in 3 groups */}
        {/* Positioning creates visual rhythm; groups roughly correspond to thirds of the canvas */}
        <g>
          <circle
            className="synapse-dot"
            cx="300"
            cy="300"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="600"
            cy="200"
            r="3"
            fill="#9333ea"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="900"
            cy="400"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="1200"
            cy="250"
            r="3"
            fill="#9333ea"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="1500"
            cy="500"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />

          <circle
            className="synapse-dot"
            cx="400"
            cy="650"
            r="3"
            fill="#9333ea"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="800"
            cy="700"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="1100"
            cy="600"
            r="3"
            fill="#9333ea"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="1600"
            cy="750"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />

          <circle
            className="synapse-dot"
            cx="350"
            cy="900"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="700"
            cy="950"
            r="3"
            fill="#9333ea"
            filter="url(#glow)"
          />
          <circle
            className="synapse-dot"
            cx="1300"
            cy="850"
            r="3"
            fill="#2563eb"
            filter="url(#glow)"
          />
        </g>
      </svg>

      {/* Gradient overlay: fades to white at bottom to blend with page background and soften animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5" />
    </div>
  );
}
