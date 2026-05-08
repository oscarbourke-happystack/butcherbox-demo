// Hand-drawn-feel SVG illustrations for Pawthentic
// All use slight wobble, rounded joins, off-center elements

const Wordmark = ({ size = 28, color = '#2A1F14' }) => (
  <span style={{
    fontFamily: '"Fraunces", serif',
    fontWeight: 900,
    fontSize: size,
    color,
    letterSpacing: '-0.03em',
    lineHeight: 1,
  }}>
    Pawthentic<span style={{ color: '#6B2845' }}>.</span>
  </span>
);

// Wrapped gift box with bow — slightly hand-drawn
const GiftBox = ({ size = 220 }) => (
  <svg viewBox="0 0 240 240" width={size} height={size} style={{ display: 'block' }}>
    {/* shadow */}
    <ellipse cx="120" cy="220" rx="80" ry="8" fill="#2A1F14" opacity="0.12" />
    {/* box body */}
    <path
      d="M 40 110 Q 38 108 40 106 L 200 104 Q 202 106 200 108 L 202 200 Q 202 204 198 204 L 42 206 Q 38 206 38 202 Z"
      fill="#E0573B"
      stroke="#2A1F14"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* box lid */}
    <path
      d="M 30 80 Q 28 78 30 76 L 210 74 Q 213 76 211 80 L 212 112 Q 212 116 208 116 L 32 118 Q 28 118 28 114 Z"
      fill="#D9442C"
      stroke="#2A1F14"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* vertical ribbon */}
    <rect x="108" y="76" width="24" height="130" fill="#F2C744" stroke="#2A1F14" strokeWidth="3" />
    {/* horizontal ribbon */}
    <rect x="30" y="92" width="182" height="24" fill="#F2C744" stroke="#2A1F14" strokeWidth="3" />
    {/* bow — left loop */}
    <path
      d="M 120 78 Q 78 50 70 70 Q 64 88 110 90 Z"
      fill="#F2C744"
      stroke="#2A1F14"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* bow — right loop */}
    <path
      d="M 120 78 Q 162 50 170 70 Q 176 88 130 90 Z"
      fill="#F2C744"
      stroke="#2A1F14"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* knot */}
    <ellipse cx="120" cy="80" rx="12" ry="10" fill="#6B2845" stroke="#2A1F14" strokeWidth="3" />
    {/* sparkle */}
    <path d="M 60 60 L 64 68 L 72 64 L 64 72 L 68 80 L 60 76 L 52 80 L 56 72 L 48 68 L 56 64 Z" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// Pawthentic cardboard box with brand panels — for steps 5/6
const BrandBox = ({ size = 240, withBow = false }) => (
  <svg viewBox="0 0 280 240" width={size} height={size * 240 / 280} style={{ display: 'block' }}>
    <ellipse cx="140" cy="228" rx="100" ry="9" fill="#2A1F14" opacity="0.12" />
    {/* back-right side (perspective) */}
    <path d="M 200 70 L 260 50 L 260 200 L 200 220 Z" fill="#C68A4F" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* front face */}
    <path d="M 30 70 L 200 70 L 200 220 L 30 220 Z" fill="#D9A36B" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* TOP of box (parallelogram, with perspective) */}
    <path d="M 30 70 L 90 50 L 260 50 L 200 70 Z" fill="#E8B98F" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* yellow brand panel on front */}
    <rect x="60" y="100" width="120" height="90" fill="#F2C744" stroke="#2A1F14" strokeWidth="3" />
    {/* coral side stripe */}
    <rect x="30" y="100" width="22" height="120" fill="#E0573B" stroke="#2A1F14" strokeWidth="3" />
    {/* wordmark on box */}
    <text x="72" y="135" fill="#2A1F14" fontFamily="Fraunces, serif" fontWeight="900" fontSize="20" letterSpacing="-1">Paw-</text>
    <text x="72" y="160" fill="#2A1F14" fontFamily="Fraunces, serif" fontWeight="900" fontSize="20" letterSpacing="-1">thentic.</text>
    {/* small paw stamp */}
    <g transform="translate(150 175) scale(0.5)">
      <circle cx="0" cy="0" r="8" fill="#6B2845" />
      <circle cx="-12" cy="-8" r="4" fill="#6B2845" />
      <circle cx="12" cy="-8" r="4" fill="#6B2845" />
      <circle cx="-7" cy="-16" r="4" fill="#6B2845" />
      <circle cx="7" cy="-16" r="4" fill="#6B2845" />
    </g>
    {withBow ? (
      /* tape on top — sealed for delivery */
      <path d="M 90 56 L 200 56 L 190 64 L 100 64 Z" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="2" opacity="0.95" strokeLinejoin="round" />
    ) : (
      /* tape on top — only when not gifted */
      <path d="M 90 56 L 200 56 L 190 64 L 100 64 Z" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="2" opacity="0.95" strokeLinejoin="round" />
    )}
  </svg>
);

// Cocker spaniel — reusable, with optional blink/wag class
const Spaniel = ({ size = 140, wag = true, blink = true }) => (
  <svg viewBox="0 0 200 180" width={size} height={size * 180 / 200} style={{ display: 'block', overflow: 'visible' }}>
    {/* shadow */}
    <ellipse cx="100" cy="170" rx="60" ry="6" fill="#2A1F14" opacity="0.15" />
    {/* tail — wags */}
    <g style={{ transformOrigin: '160px 130px' }} className={wag ? 'pa-wag' : ''}>
      <path d="M 158 130 Q 178 100 184 78 Q 188 70 180 68 Q 172 70 168 86 Q 162 110 152 128 Z" fill="#C77B3F" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    </g>
    {/* body */}
    <ellipse cx="100" cy="135" rx="60" ry="38" fill="#D89456" stroke="#2A1F14" strokeWidth="3" />
    {/* legs */}
    <rect x="62" y="150" width="14" height="24" rx="6" fill="#C77B3F" stroke="#2A1F14" strokeWidth="3" />
    <rect x="124" y="150" width="14" height="24" rx="6" fill="#C77B3F" stroke="#2A1F14" strokeWidth="3" />
    {/* LEFT ear (viewer's left) — drawn FIRST so it sits behind the head */}
    <path d="M 50 70 Q 28 92 30 134 Q 38 148 56 140 Q 60 110 64 78 Z" fill="#A66536" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* RIGHT ear (viewer's right) — drawn FIRST, behind head, hangs down outside the face */}
    <path d="M 110 72 Q 134 92 134 138 Q 124 150 108 142 Q 102 110 100 80 Z" fill="#A66536" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* head — drawn AFTER ears so face sits on top */}
    <ellipse cx="84" cy="86" rx="40" ry="36" fill="#E5A368" stroke="#2A1F14" strokeWidth="3" />
    {/* snout */}
    <ellipse cx="72" cy="100" rx="20" ry="14" fill="#F0BC85" stroke="#2A1F14" strokeWidth="2.5" />
    {/* nose */}
    <ellipse cx="60" cy="96" rx="6" ry="5" fill="#2A1F14" />
    {/* mouth */}
    <path d="M 60 102 Q 64 108 70 106 Q 74 110 80 106" fill="none" stroke="#2A1F14" strokeWidth="2.5" strokeLinecap="round" />
    {/* eye — blinks */}
    <g className={blink ? 'pa-blink' : ''} style={{ transformOrigin: '92px 80px' }}>
      <circle cx="92" cy="80" r="5" fill="#2A1F14" />
      <circle cx="93.5" cy="78.5" r="1.6" fill="#FDF6E3" />
    </g>
    {/* eyebrow tuft */}
    <path d="M 88 70 Q 96 66 104 72" fill="none" stroke="#2A1F14" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Sarah's golden cocker — slightly different, lighter
const SarahDog = ({ size = 56 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <circle cx="40" cy="40" r="38" fill="#F2C744" />
    {/* head */}
    <ellipse cx="40" cy="44" rx="22" ry="20" fill="#E5A368" stroke="#2A1F14" strokeWidth="2" />
    <path d="M 22 40 Q 16 56 22 68 Q 30 70 32 58 Z" fill="#A66536" stroke="#2A1F14" strokeWidth="2" strokeLinejoin="round" />
    <path d="M 58 40 Q 64 56 58 68 Q 50 70 48 58 Z" fill="#A66536" stroke="#2A1F14" strokeWidth="2" strokeLinejoin="round" />
    <ellipse cx="40" cy="52" rx="9" ry="6" fill="#F0BC85" stroke="#2A1F14" strokeWidth="1.5" />
    <ellipse cx="40" cy="50" rx="3" ry="2.5" fill="#2A1F14" />
    <circle cx="33" cy="40" r="2" fill="#2A1F14" />
    <circle cx="47" cy="40" r="2" fill="#2A1F14" />
    <path d="M 36 56 Q 40 60 44 56" fill="none" stroke="#2A1F14" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Bowl — for meal cards
const Bowl = ({ size = 100, fill = '#E0573B' }) => (
  <svg viewBox="0 0 140 100" width={size} height={size * 100 / 140}>
    {/* shadow */}
    <ellipse cx="70" cy="92" rx="55" ry="5" fill="#2A1F14" opacity="0.12" />
    {/* food mound */}
    <path d="M 22 60 Q 70 30 118 60 Q 110 56 90 56 Q 70 50 50 56 Q 30 56 22 60 Z" fill={fill} stroke="#2A1F14" strokeWidth="2.5" strokeLinejoin="round" />
    {/* food bits */}
    <circle cx="50" cy="52" r="3" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="1" />
    <circle cx="70" cy="46" r="3" fill="#8FA86B" stroke="#2A1F14" strokeWidth="1" />
    <circle cx="88" cy="50" r="3" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="1" />
    <circle cx="62" cy="52" r="2" fill="#2A1F14" opacity="0.5" />
    {/* bowl */}
    <path d="M 14 60 Q 70 88 126 60 L 116 84 Q 70 96 24 84 Z" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="3" strokeLinejoin="round" />
    {/* rim stripe */}
    <path d="M 16 62 Q 70 84 124 62" fill="none" stroke="#6B2845" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Meal pouch
const Pouch = ({ size = 60, fill = '#E0573B', label = 'BEEF' }) => (
  <svg viewBox="0 0 80 100" width={size} height={size * 100 / 80}>
    <path d="M 14 18 Q 14 14 18 14 L 62 14 Q 66 14 66 18 L 66 92 Q 66 96 62 96 L 18 96 Q 14 96 14 92 Z" fill={fill} stroke="#2A1F14" strokeWidth="2.5" strokeLinejoin="round" />
    {/* zipper top */}
    <rect x="18" y="20" width="44" height="6" fill="#FDF6E3" stroke="#2A1F14" strokeWidth="2" />
    <text x="40" y="58" textAnchor="middle" fill="#2A1F14" fontFamily="Fraunces, serif" fontWeight="900" fontSize="11">{label}</text>
    <rect x="22" y="68" width="36" height="3" rx="1.5" fill="#2A1F14" opacity="0.3" />
    <rect x="22" y="76" width="28" height="3" rx="1.5" fill="#2A1F14" opacity="0.3" />
  </svg>
);

// Paw print — used a lot
const Paw = ({ size = 24, color = '#6B2845' }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <ellipse cx="20" cy="26" rx="11" ry="9" fill={color} />
    <ellipse cx="9" cy="14" rx="4" ry="5" fill={color} />
    <ellipse cx="31" cy="14" rx="4" ry="5" fill={color} />
    <ellipse cx="15" cy="7" rx="3.5" ry="4.5" fill={color} />
    <ellipse cx="25" cy="7" rx="3.5" ry="4.5" fill={color} />
  </svg>
);

// Confetti piece
const ConfettiPiece = ({ color, shape }) => {
  if (shape === 'circle') return <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />;
  if (shape === 'square') return <div style={{ width: 10, height: 10, background: color, transform: 'rotate(20deg)' }} />;
  if (shape === 'rect') return <div style={{ width: 14, height: 6, borderRadius: 3, background: color }} />;
  return <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${color}` }} />;
};

Object.assign(window, { Wordmark, GiftBox, BrandBox, Spaniel, SarahDog, Bowl, Pouch, Paw, ConfettiPiece });
