// Hand-drawn-feel SVG illustrations for BUTCHERBOX.
// Wobble lines, rounded joins, slightly off-axis. No photorealism.

const MC_PALETTE = {
  ink:        '#14110E',
  cream:      '#F5F0E8',
  bone:       '#EAE0CC',
  kraft:      '#C99A6A',
  kraftDeep:  '#A87A4D',
  kraftDark:  '#8B5E36',
  teal:       '#1F5C5C',
  tealDark:   '#103838',
  tealMist:   '#3F7E7E',
  accent:     '#D9442C',
  mustard:    '#D4A24C',
  liver:      '#6E2A24',
  meat:       '#A53A2C',
  meatLight:  '#C4564A',
  pinkSalmon: '#E68A6E',
  salmonStripe:'#F2C4A1',
  chicken:    '#EAC79A',
  chickenSkin:'#D9A86A',
  fat:        '#F4E5C7',
};

// ── Wordmark ─────────────────────────────────────────────────────
// Heavy condensed sans set in caps — "BUTCHERBOX" wordmark.
const Wordmark = ({ size = 22, color = MC_PALETTE.ink }) => (
  <span style={{
    fontFamily: '"Archivo Narrow", "Oswald", "Inter", sans-serif',
    fontWeight: 900,
    fontSize: size,
    color,
    letterSpacing: '0.04em',
    lineHeight: 1,
    textTransform: 'uppercase',
    fontStretch: 'condensed',
  }}>
    ButcherBox
  </span>
);

// Big stacked wordmark for the box face — two lines like the reference packaging
const StackedMark = ({ color = MC_PALETTE.ink }) => (
  <div style={{
    fontFamily: '"Archivo Narrow", "Oswald", sans-serif',
    fontWeight: 900,
    color,
    letterSpacing: '0.02em',
    lineHeight: 0.86,
    textAlign: 'center',
    textTransform: 'uppercase',
  }}>
    <div style={{ fontSize: 22 }}>BUTCHER</div>
    <div style={{ fontSize: 22 }}>BOX</div>
  </div>
);

// ── Kraft box, closed (Step 1, wobbling) ─────────────────────────
// Cardboard box with stamped wordmark and a small twine cross.
const KraftBox = ({ size = 230 }) => (
  <svg viewBox="0 0 280 240" width={size} height={size * 240 / 280} style={{ display: 'block', overflow: 'visible' }}>
    {/* shadow */}
    <ellipse cx="140" cy="225" rx="105" ry="9" fill={MC_PALETTE.ink} opacity="0.18" />
    {/* right side */}
    <path d="M 200 60 L 260 42 Q 264 42 263 46 L 263 198 Q 263 204 258 205 L 200 222 Z"
          fill={MC_PALETTE.kraftDeep} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* front face */}
    <path d="M 22 60 Q 20 58 24 58 L 200 58 Q 204 58 203 62 L 203 220 Q 203 224 199 224 L 26 224 Q 22 224 22 220 Z"
          fill={MC_PALETTE.kraft} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* top */}
    <path d="M 22 60 L 82 42 L 260 42 L 200 60 Z"
          fill={MC_PALETTE.kraftDeep} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* corrugated edge highlight */}
    <path d="M 24 64 L 200 64" stroke={MC_PALETTE.ink} strokeWidth="1.2" opacity="0.35" />

    {/* wordmark stamp */}
    <g transform="translate(112 130)" textAnchor="middle">
      <text fontFamily="Archivo Narrow, Oswald, sans-serif" fontWeight="900"
            fontSize="24" fill={MC_PALETTE.ink} letterSpacing="1">BUTCHER</text>
      <text y="26" fontFamily="Archivo Narrow, Oswald, sans-serif" fontWeight="900"
            fontSize="24" fill={MC_PALETTE.ink} letterSpacing="1">BOX</text>
      <text y="46" fontFamily="Inter, sans-serif" fontWeight="600"
            fontSize="8" fill={MC_PALETTE.ink} letterSpacing="2" opacity="0.65">RAISED RIGHT · EST. 2014</text>
    </g>

    {/* twine cross */}
    <line x1="112" y1="60" x2="112" y2="224" stroke={MC_PALETTE.cream} strokeWidth="3" strokeDasharray="2 2" opacity="0.85" />
    <line x1="22" y1="140" x2="203" y2="140" stroke={MC_PALETTE.cream} strokeWidth="3" strokeDasharray="2 2" opacity="0.7" />

    {/* knot on top */}
    <ellipse cx="112" cy="58" rx="7" ry="5" fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="2" />

    {/* "KEEP FROZEN" stamp, slight angle */}
    <g transform="translate(56 188) rotate(-6)">
      <rect x="-2" y="-10" width="76" height="20" fill="none" stroke={MC_PALETTE.tealDark} strokeWidth="2" rx="2" opacity="0.85" />
      <text x="36" y="4" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800"
            fontSize="8.5" fill={MC_PALETTE.tealDark} letterSpacing="1.5">KEEP FROZEN</text>
    </g>
  </svg>
);

// ── Sealed kraft box w/ twine bow + paper tag (Step 6) ───────────
const SealedBox = ({ size = 220 }) => (
  <svg viewBox="0 0 280 260" width={size} height={size * 260 / 280} style={{ display: 'block', overflow: 'visible' }}>
    <ellipse cx="140" cy="245" rx="105" ry="9" fill={MC_PALETTE.ink} opacity="0.18" />
    {/* right side */}
    <path d="M 200 80 L 260 62 Q 264 62 263 66 L 263 218 Q 263 224 258 225 L 200 242 Z"
          fill={MC_PALETTE.kraftDeep} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* front */}
    <path d="M 22 80 L 200 80 L 200 240 L 22 240 Z"
          fill={MC_PALETTE.kraft} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* top */}
    <path d="M 22 80 L 82 62 L 260 62 L 200 80 Z"
          fill={MC_PALETTE.kraftDeep} stroke={MC_PALETTE.ink} strokeWidth="3" strokeLinejoin="round" />
    {/* wordmark */}
    <g transform="translate(112 150)" textAnchor="middle">
      <text fontFamily="Archivo Narrow, Oswald, sans-serif" fontWeight="900" fontSize="22" fill={MC_PALETTE.ink} letterSpacing="1">BUTCHER</text>
      <text y="24" fontFamily="Archivo Narrow, Oswald, sans-serif" fontWeight="900" fontSize="22" fill={MC_PALETTE.ink} letterSpacing="1">BOX</text>
    </g>

    {/* twine vertical */}
    <path d="M 112 62 Q 110 150 112 240" stroke={MC_PALETTE.ink} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
    {/* twine horizontal */}
    <path d="M 22 160 Q 110 158 200 160 L 260 142" stroke={MC_PALETTE.ink} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />

    {/* bow on top */}
    <path d="M 92 56 Q 80 38 70 50 Q 76 62 108 60 Z" fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 132 56 Q 144 38 154 50 Q 148 62 116 60 Z" fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <ellipse cx="112" cy="58" rx="7" ry="5" fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="2" />
    <path d="M 108 64 L 102 80 M 116 64 L 122 82" stroke={MC_PALETTE.ink} strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* paper tag, hanging */}
    <g transform="translate(168 90) rotate(8)">
      <path d="M 0 0 L 50 0 L 60 14 L 50 28 L 0 28 Z" fill={MC_PALETTE.bone} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="6" cy="14" r="3" fill="none" stroke={MC_PALETTE.ink} strokeWidth="2" />
      <text x="32" y="13" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="600" fontSize="11" fill={MC_PALETTE.ink}>For You.</text>
      <line x1="14" y1="18" x2="50" y2="18" stroke={MC_PALETTE.ink} strokeWidth="0.8" opacity="0.4" />
      <line x1="14" y1="22" x2="44" y2="22" stroke={MC_PALETTE.ink} strokeWidth="0.8" opacity="0.4" />
    </g>
  </svg>
);

// ── Vapor curl (dry-ice puff) ────────────────────────────────────
const Vapor = ({ size = 80, color = '#FFFFFF', opacity = 0.85 }) => (
  <svg viewBox="0 0 100 80" width={size} height={size * 80 / 100} style={{ display: 'block', overflow: 'visible' }}>
    <path d="M 14 60 Q 6 46 18 38 Q 10 24 26 22 Q 28 8 44 14 Q 56 4 66 16 Q 84 14 82 30 Q 96 36 88 50 Q 96 64 80 64 Q 70 76 56 66 Q 44 76 32 66 Q 18 72 14 60 Z"
          fill={color} opacity={opacity} stroke={color} strokeWidth="0" />
  </svg>
);

// ── Steak with marbling ──────────────────────────────────────────
const Steak = ({ size = 110 }) => (
  <svg viewBox="0 0 140 110" width={size} height={size * 110 / 140} style={{ display: 'block' }}>
    {/* shadow */}
    <ellipse cx="70" cy="98" rx="56" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* fat cap */}
    <path d="M 18 38 Q 22 18 60 16 Q 100 12 124 22 Q 134 30 128 44 Q 128 50 120 52 L 26 56 Q 14 52 18 38 Z"
          fill={MC_PALETTE.fat} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* meat body */}
    <path d="M 22 50 Q 18 80 38 92 Q 70 100 104 92 Q 130 84 126 56 Q 116 50 80 52 Q 50 50 22 50 Z"
          fill={MC_PALETTE.meat} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* marbling streaks */}
    <path d="M 38 70 Q 56 64 76 70 Q 96 76 112 68" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <path d="M 32 82 Q 52 78 74 84 Q 96 88 110 82" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <path d="M 50 60 Q 64 62 78 60" fill="none" stroke={MC_PALETTE.fat} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    {/* highlight */}
    <path d="M 30 60 Q 36 56 46 58" fill="none" stroke={MC_PALETTE.meatLight} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    {/* bone tip */}
    <ellipse cx="14" cy="56" rx="6" ry="9" fill={MC_PALETTE.bone} stroke={MC_PALETTE.ink} strokeWidth="2" />
  </svg>
);

// ── Salmon fillet ────────────────────────────────────────────────
const Salmon = ({ size = 110 }) => (
  <svg viewBox="0 0 140 100" width={size} height={size * 100 / 140} style={{ display: 'block' }}>
    <ellipse cx="70" cy="92" rx="56" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* fillet body */}
    <path d="M 14 56 Q 8 36 36 30 Q 76 22 110 28 Q 132 34 130 56 Q 128 76 102 80 Q 60 84 28 78 Q 12 72 14 56 Z"
          fill={MC_PALETTE.pinkSalmon} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* white salmon stripes */}
    <path d="M 24 50 Q 56 42 96 46 Q 120 48 124 56" fill="none" stroke={MC_PALETTE.salmonStripe} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 22 64 Q 56 58 96 62 Q 122 66 122 68" fill="none" stroke={MC_PALETTE.salmonStripe} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    <path d="M 26 74 Q 60 72 100 74" fill="none" stroke={MC_PALETTE.salmonStripe} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    {/* skin edge */}
    <path d="M 14 56 Q 8 36 36 30" fill="none" stroke={MC_PALETTE.kraftDark} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// ── Chicken thigh ────────────────────────────────────────────────
const Chicken = ({ size = 110 }) => (
  <svg viewBox="0 0 130 110" width={size} height={size * 110 / 130} style={{ display: 'block' }}>
    <ellipse cx="65" cy="98" rx="48" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* thigh body */}
    <path d="M 22 56 Q 14 30 44 22 Q 78 16 102 32 Q 118 48 110 76 Q 96 94 64 92 Q 28 88 22 56 Z"
          fill={MC_PALETTE.chicken} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* darker skin patch */}
    <path d="M 36 36 Q 56 28 84 34 Q 96 42 92 56 Q 80 70 56 68 Q 36 64 36 36 Z"
          fill={MC_PALETTE.chickenSkin} stroke={MC_PALETTE.ink} strokeWidth="2" strokeLinejoin="round" opacity="0.85" />
    {/* highlight */}
    <path d="M 46 38 Q 56 34 70 38" fill="none" stroke={MC_PALETTE.cream} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    {/* bone */}
    <path d="M 100 80 Q 116 84 118 96 Q 110 102 106 92" fill={MC_PALETTE.bone} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// ── Bacon strips ─────────────────────────────────────────────────
const Bacon = ({ size = 110 }) => (
  <svg viewBox="0 0 140 110" width={size} height={size * 110 / 140} style={{ display: 'block' }}>
    <ellipse cx="70" cy="98" rx="56" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* strip 1 */}
    <path d="M 12 30 Q 40 22 80 28 Q 116 32 132 24 Q 134 38 122 42 Q 90 46 60 42 Q 28 40 12 44 Z"
          fill={MC_PALETTE.meatLight} stroke={MC_PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M 16 36 Q 40 32 70 36 Q 110 40 128 34" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2.5" strokeLinecap="round" />
    {/* strip 2 */}
    <path d="M 14 56 Q 42 50 80 54 Q 118 58 134 52 Q 134 68 124 70 Q 90 74 60 70 Q 28 68 14 70 Z"
          fill={MC_PALETTE.meat} stroke={MC_PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M 18 62 Q 44 58 74 62 Q 108 66 130 60" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2.5" strokeLinecap="round" />
    {/* strip 3 */}
    <path d="M 14 80 Q 42 74 80 78 Q 118 82 132 76 Q 134 92 124 94 Q 90 98 60 94 Q 28 92 14 94 Z"
          fill={MC_PALETTE.meatLight} stroke={MC_PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M 18 86 Q 44 82 74 86 Q 108 90 130 84" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ── Pork chop ────────────────────────────────────────────────────
const Pork = ({ size = 110 }) => (
  <svg viewBox="0 0 130 110" width={size} height={size * 110 / 130} style={{ display: 'block' }}>
    <ellipse cx="65" cy="98" rx="48" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* fat cap */}
    <path d="M 18 32 Q 30 14 70 16 Q 104 18 116 30 Q 122 42 110 46 L 22 50 Q 12 44 18 32 Z"
          fill={MC_PALETTE.fat} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* loin */}
    <path d="M 22 44 Q 18 80 42 90 Q 70 96 96 90 Q 118 84 114 50 Q 100 46 64 48 Q 38 46 22 44 Z"
          fill={MC_PALETTE.meatLight} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* marbling */}
    <path d="M 32 64 Q 56 60 80 66 Q 100 70 108 64" fill="none" stroke={MC_PALETTE.fat} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M 36 78 Q 60 74 88 80" fill="none" stroke={MC_PALETTE.fat} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    {/* T-bone */}
    <path d="M 60 50 L 60 78 M 50 64 L 70 64" stroke={MC_PALETTE.bone} strokeWidth="6" strokeLinecap="round" />
    <path d="M 60 50 L 60 78 M 50 64 L 70 64" stroke={MC_PALETTE.ink} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// ── Ground beef ──────────────────────────────────────────────────
const GroundBeef = ({ size = 110 }) => (
  <svg viewBox="0 0 130 110" width={size} height={size * 110 / 130} style={{ display: 'block' }}>
    <ellipse cx="65" cy="98" rx="48" ry="5" fill={MC_PALETTE.ink} opacity="0.15" />
    {/* mound */}
    <path d="M 18 80 Q 14 50 40 36 Q 70 24 96 38 Q 118 50 114 80 Z"
          fill={MC_PALETTE.meat} stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinejoin="round" />
    {/* texture squiggles for the ground texture */}
    {[
      'M 28 58 Q 32 54 36 58','M 40 50 Q 44 46 48 50','M 52 42 Q 56 38 60 42',
      'M 64 36 Q 68 32 72 36','M 76 44 Q 80 40 84 44','M 88 52 Q 92 48 96 52',
      'M 102 60 Q 106 56 108 60','M 30 70 Q 34 66 38 70','M 46 64 Q 50 60 54 64',
      'M 62 56 Q 66 52 70 56','M 80 64 Q 84 60 88 64','M 96 72 Q 100 68 104 72',
    ].map((d, i) => <path key={i} d={d} fill="none" stroke={MC_PALETTE.liver} strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />)}
    {/* highlights of fat */}
    {[[44,52],[68,46],[88,58],[58,72],[80,76]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="1.6" fill={MC_PALETTE.fat} />
    ))}
    {/* base line */}
    <path d="M 18 80 L 114 80" stroke={MC_PALETTE.ink} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ── Vacuum-sealed packet (small, for the conveyor) ───────────────
const VacPack = ({ size = 60, fill = MC_PALETTE.meat, label = 'RIBEYE' }) => (
  <svg viewBox="0 0 80 100" width={size} height={size * 100 / 80} style={{ display: 'block' }}>
    {/* outer plastic */}
    <path d="M 8 14 Q 8 8 14 8 L 66 8 Q 72 8 72 14 L 72 92 Q 72 96 66 96 L 14 96 Q 8 96 8 92 Z"
          fill="#FFFFFF" stroke={MC_PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round" opacity="0.95" />
    {/* meat inside */}
    <path d="M 16 28 Q 16 22 22 22 L 58 22 Q 64 22 64 28 L 64 78 Q 64 84 58 84 L 22 84 Q 16 84 16 78 Z"
          fill={fill} stroke={MC_PALETTE.ink} strokeWidth="1.5" strokeLinejoin="round" />
    {/* highlight (plastic shine) */}
    <path d="M 22 16 L 30 16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    {/* label */}
    <rect x="14" y="86" width="52" height="10" rx="1" fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="1.2" />
    <text x="40" y="93" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="6" fill={MC_PALETTE.ink} letterSpacing="0.5">{label}</text>
  </svg>
);

// ── Mini icon: cleaver (for progress pips & wordmark) ───────────
const Cleaver = ({ size = 18, color = MC_PALETTE.ink }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    {/* blade */}
    <path d="M 4 5 L 17 5 Q 19 5 19 7 L 19 14 Q 19 16 17 16 L 4 16 Z" fill={color} stroke={color} strokeWidth="1" strokeLinejoin="round" />
    {/* handle */}
    <path d="M 17 9 L 22 9 L 22 12 L 17 12 Z" fill={color} />
    {/* hole */}
    <circle cx="6.5" cy="10.5" r="1" fill={MC_PALETTE.cream} />
  </svg>
);

// ── Mini icon: tiny box ─────────────────────────────────────────
const MiniBox = ({ size = 16, color = MC_PALETTE.ink }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path d="M 3 9 L 12 5 L 21 9 L 21 19 L 12 23 L 3 19 Z" fill={color} stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M 3 9 L 12 13 L 21 9 M 12 13 L 12 23" stroke={MC_PALETTE.cream} strokeWidth="1.2" fill="none" />
  </svg>
);

// ── Chef avatar — illustrated portrait ─────────────────────────
const ChefAvatar = ({ size = 56 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    {/* circle bg */}
    <circle cx="40" cy="40" r="38" fill={MC_PALETTE.mustard} />
    {/* shoulders / shirt */}
    <path d="M 12 70 Q 20 56 40 56 Q 60 56 68 70 Q 68 80 60 80 L 20 80 Q 12 80 12 70 Z"
          fill={MC_PALETTE.cream} stroke={MC_PALETTE.ink} strokeWidth="2" strokeLinejoin="round" />
    {/* apron stripe */}
    <rect x="32" y="60" width="16" height="20" fill={MC_PALETTE.accent} stroke={MC_PALETTE.ink} strokeWidth="1.5" />
    {/* neck */}
    <rect x="34" y="48" width="12" height="10" fill={MC_PALETTE.chickenSkin} stroke={MC_PALETTE.ink} strokeWidth="1.5" />
    {/* head */}
    <ellipse cx="40" cy="38" rx="18" ry="20" fill={MC_PALETTE.chickenSkin} stroke={MC_PALETTE.ink} strokeWidth="2" />
    {/* hair / beard */}
    <path d="M 22 36 Q 26 18 40 18 Q 54 18 58 36 Q 58 30 50 26 Q 40 22 30 26 Q 22 30 22 36 Z" fill={MC_PALETTE.ink} />
    {/* beard */}
    <path d="M 26 42 Q 28 56 40 58 Q 52 56 54 42 Q 50 50 40 50 Q 30 50 26 42 Z" fill={MC_PALETTE.ink} />
    {/* eyes */}
    <circle cx="33" cy="38" r="1.6" fill={MC_PALETTE.ink} />
    <circle cx="47" cy="38" r="1.6" fill={MC_PALETTE.ink} />
    {/* glasses */}
    <circle cx="33" cy="38" r="4.5" fill="none" stroke={MC_PALETTE.ink} strokeWidth="1.5" />
    <circle cx="47" cy="38" r="4.5" fill="none" stroke={MC_PALETTE.ink} strokeWidth="1.5" />
    <line x1="37.5" y1="38" x2="42.5" y2="38" stroke={MC_PALETTE.ink} strokeWidth="1.5" />
    {/* cheek */}
    <ellipse cx="28" cy="44" rx="2" ry="1.2" fill={MC_PALETTE.accent} opacity="0.4" />
    <ellipse cx="52" cy="44" rx="2" ry="1.2" fill={MC_PALETTE.accent} opacity="0.4" />
  </svg>
);

// ── Confetti piece ──────────────────────────────────────────────
const ConfettiPiece = ({ color, shape }) => {
  if (shape === 'circle') return <div style={{ width: 9, height: 9, borderRadius: '50%', background: color }} />;
  if (shape === 'square') return <div style={{ width: 9, height: 9, background: color, transform: 'rotate(20deg)' }} />;
  if (shape === 'rect')   return <div style={{ width: 14, height: 5, borderRadius: 2, background: color }} />;
  return <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${color}` }} />;
};

Object.assign(window, {
  Wordmark, StackedMark, KraftBox, SealedBox, Vapor,
  Steak, Salmon, Chicken, Bacon, Pork, GroundBeef,
  VacPack, Cleaver, MiniBox, ChefAvatar, ConfettiPiece,
  MC_PALETTE,
});
