// BUTCHERBOX — gift unboxing flow steps
// Premium meat delivery, butcher-paper aesthetic.

const PB = window.MC_PALETTE; // ink, cream, bone, kraft, kraftDeep, teal, accent...

// ── Shared chrome ─────────────────────────────────────────────
const PrimaryButton = ({ children, onClick, color, full = true }) => (
  <button onClick={onClick} className="mc-btn-press" style={{
    width: full ? '100%' : 'auto',
    background: color || PB.accent,
    color: PB.cream,
    border: `2px solid ${PB.ink}`,
    borderRadius: 999,
    padding: '17px 26px',
    fontSize: 16,
    fontWeight: 800,
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: `0 5px 0 ${PB.ink}`,
  }}>{children}</button>
);

const SecondaryBtn = ({ children, onClick }) => (
  <button onClick={onClick} className="mc-btn-press" style={{
    background: PB.cream,
    border: `2px solid ${PB.ink}`,
    borderRadius: 14,
    padding: '12px 8px',
    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
    color: PB.ink, cursor: 'pointer',
    letterSpacing: '0.04em', textTransform: 'uppercase',
    boxShadow: `0 3px 0 ${PB.ink}`,
  }}>{children}</button>
);

const Headline = ({ children, color, size = 34 }) => (
  <h1 style={{
    fontFamily: '"Archivo Narrow", "Oswald", sans-serif',
    fontWeight: 900, fontSize: size, lineHeight: 0.96,
    letterSpacing: '-0.005em', color: color || PB.ink,
    margin: 0, textTransform: 'uppercase', textWrap: 'balance',
  }}>{children}</h1>
);

const Sub = ({ children, color }) => (
  <p style={{
    fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.5,
    color: color || PB.ink, opacity: 0.78, margin: '12px 0 0', textWrap: 'pretty',
  }}>{children}</p>
);

const Eyebrow = ({ children, color = PB.accent }) => (
  <div style={{
    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color, marginBottom: 10,
  }}>{children}</div>
);

// ── Progress: 6 cleaver pips ──────────────────────────────────
const ProgressPips = ({ step, total = 6, color = PB.accent }) => (
  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', padding: '10px 0 6px' }}>
    {Array.from({ length: total }).map((_, i) => {
      const active = i <= step;
      const isCurrent = i === step;
      return (
        <div key={i} style={{
          width: isCurrent ? 22 : 14, height: 5, borderRadius: 3,
          background: active ? color : PB.ink + '22',
          transition: 'all 360ms cubic-bezier(.34,1.56,.64,1)',
        }} />
      );
    })}
  </div>
);

// ── Confetti ──────────────────────────────────────────────────
const Confetti = ({ active }) => {
  const pieces = React.useMemo(() => Array.from({ length: 36 }).map((_, i) => ({
    id: i, left: Math.random() * 100, delay: Math.random() * 0.4,
    duration: 1.6 + Math.random() * 1.2, rotate: Math.random() * 720 - 360,
    shape: ['circle', 'square', 'rect', 'tri'][i % 4],
    color: [PB.accent, PB.mustard, PB.kraft, PB.teal, PB.bone][i % 5],
    drift: (Math.random() - 0.5) * 80,
  })), [active]);
  if (!active) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 50 }}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: 'absolute', top: -20, left: `${p.left}%`,
          animation: `mc-fall ${p.duration}s ${p.delay}s cubic-bezier(.4,.6,.6,1) forwards`,
          ['--mc-rot']: `${p.rotate}deg`, ['--mc-drift']: `${p.drift}px`,
        }}>
          <ConfettiPiece color={p.color} shape={p.shape} />
        </div>
      ))}
    </div>
  );
};

// ── Form input style ──────────────────────────────────────────
const inputStyle = {
  width: '100%',
  background: PB.cream,
  border: `2px solid ${PB.ink}`,
  borderRadius: 12,
  padding: '13px 14px',
  fontFamily: 'Inter, sans-serif', fontSize: 15, color: PB.ink,
  outline: 'none', boxShadow: `2px 2px 0 ${PB.ink}`,
  boxSizing: 'border-box',
};

const Field = ({ label, children }) => (
  <div>
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11,
      color: PB.ink, marginBottom: 6, opacity: 0.85,
      letterSpacing: '0.12em', textTransform: 'uppercase',
    }}>{label}</div>
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────
// Step 1 — Reveal
// ─────────────────────────────────────────────────────────────
const Step1 = ({ onNext, voice, gifterName, ctaColor }) => {
  const [opening, setOpening] = React.useState(false);
  const handleClick = () => { setOpening(true); setTimeout(() => onNext(), 900); };
  return (
    <div style={{
      flex: 1, background: PB.teal,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '24px 24px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(${PB.cream}10 1px, transparent 1.4px)`,
        backgroundSize: '14px 14px', opacity: 0.6,
      }} />
      {/* vapor curls */}
      <div style={{ position: 'absolute', top: 110, left: 24, animation: 'mc-vapor 3.4s ease-in-out infinite' }}>
        <Vapor size={64} color={PB.cream} opacity={0.18} />
      </div>
      <div style={{ position: 'absolute', top: 90, right: 30, animation: 'mc-vapor 4s ease-in-out infinite 0.6s' }}>
        <Vapor size={84} color={PB.cream} opacity={0.22} />
      </div>
      <div style={{ position: 'absolute', top: 160, right: 60, animation: 'mc-vapor 4.4s ease-in-out infinite 1.2s' }}>
        <Vapor size={50} color={PB.cream} opacity={0.16} />
      </div>

      <Confetti active={opening} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className={opening ? 'mc-pop' : 'mc-wobble'} style={{ transformOrigin: 'center bottom' }}>
          <KraftBox size={250} />
        </div>
      </div>

      <div style={{ textAlign: 'center', maxWidth: 320, position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-block', padding: '6px 12px', borderRadius: 4,
          background: PB.accent, color: PB.cream,
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.16em',
          textTransform: 'uppercase', marginBottom: 14,
          border: `1.5px solid ${PB.ink}`,
        }}>A Gift on Ice</div>
        <Headline size={36} color={PB.cream}>{gifterName} sent you a Meatlover Box.</Headline>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.5,
          color: PB.cream, opacity: 0.82, margin: '12px 0 0',
        }}>{voice.s1sub}</p>
        <div style={{ marginTop: 26 }}>
          <PrimaryButton onClick={handleClick} color={ctaColor}>Open the box →</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Step 2 — Note from gifter (butcher paper / recipe card)
// ─────────────────────────────────────────────────────────────
const Step2 = ({ onNext, voice, gifterName, ctaColor }) => (
  <div style={{
    flex: 1, background: PB.cream,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '28px 24px 24px', position: 'relative', overflow: 'hidden',
  }}>
    {/* butcher paper texture: faint vertical lines */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.3,
      backgroundImage: `repeating-linear-gradient(90deg, ${PB.kraft}11 0 1px, transparent 1px 8px)`,
    }} />

    <div style={{ textAlign: 'center', marginBottom: 16, position: 'relative', zIndex: 1 }}>
      <Eyebrow>From {gifterName}</Eyebrow>
      <Headline size={26}>A note tucked in the box</Headline>
    </div>

    {/* recipe card with twine */}
    <div style={{
      position: 'relative', width: '100%', maxWidth: 320,
      transform: 'rotate(-1.8deg)', marginTop: 20, zIndex: 2,
    }} className="mc-card-in">
      {/* twine that runs across, with knot */}
      <div style={{
        position: 'absolute', top: -10, left: -10, right: -10, height: 32,
        zIndex: 3, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 320 32" style={{ width: '100%', height: '100%' }}>
          <path d="M -4 22 Q 80 4 160 18 Q 240 26 324 12" fill="none"
                stroke={PB.ink} strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
          {/* small knot */}
          <ellipse cx="160" cy="18" rx="6" ry="4" fill={PB.ink} />
          <path d="M 156 22 L 152 30 M 164 22 L 168 30" stroke={PB.ink} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{
        background: PB.bone,
        border: `2px solid ${PB.ink}`,
        borderRadius: 4,
        padding: '34px 26px 24px',
        boxShadow: `5px 5px 0 ${PB.ink}, 0 22px 40px ${PB.ink}22`,
        position: 'relative',
      }}>
        {/* perforated top */}
        <div style={{
          position: 'absolute', top: 12, left: 8, right: 8, height: 1,
          borderTop: `1.5px dashed ${PB.ink}66`,
        }} />
        {/* horizontal recipe lines (faded) */}
        <div style={{
          position: 'absolute', inset: '36px 24px 20px',
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0 26px, ${PB.kraft}33 26px 27px)`,
          pointerEvents: 'none', zIndex: 0,
        }} />

        <p style={{
          fontFamily: '"Caveat", cursive', fontSize: 21, lineHeight: 1.32,
          color: PB.ink, margin: 0, position: 'relative', zIndex: 1,
        }}>{voice.s2note}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18, position: 'relative', zIndex: 1 }}>
          <ChefAvatar size={42} />
          <div>
            <div style={{ fontFamily: 'Archivo Narrow, Oswald, sans-serif', fontWeight: 800, fontSize: 15, color: PB.ink, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{gifterName} P.</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: PB.ink, opacity: 0.6 }}>Cooks weeknight, roasts Sundays</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 'auto', width: '100%', position: 'relative', zIndex: 2 }}>
      <PrimaryButton onClick={onNext} color={ctaColor}>What's inside →</PrimaryButton>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Step 3 — About you & your kitchen
// ─────────────────────────────────────────────────────────────
const Step3 = ({ onNext, voice, prefs, setPrefs, ctaColor }) => {
  const sizes = [
    { k: '1', label: 'Just me' },
    { k: '2', label: 'Two of us' },
    { k: '3-4', label: '3–4' },
    { k: '5+', label: '5 or more' },
  ];
  const confs = [
    { k: 'micro', label: 'Microwave hero', sub: 'Easy + fast wins' },
    { k: 'week',  label: 'Weeknight regular', sub: 'Pan, oven, done' },
    { k: 'sunday',label: 'Sunday-roast energy', sub: 'I baste. I rest.' },
  ];
  const avoid = [
    { k: 'none', label: 'None' },
    { k: 'pork', label: 'Pork' },
    { k: 'sea',  label: 'Seafood' },
    { k: 'red',  label: 'Red meat' },
  ];
  const freezers = [
    { k: 'small',  label: 'Small', sub: 'Top of fridge' },
    { k: 'medium', label: 'Medium', sub: 'Standalone' },
    { k: 'chest',  label: 'Chest-freezer life', sub: 'Bring it on' },
  ];

  const toggleAvoid = (k) => {
    if (k === 'none') return setPrefs({ ...prefs, avoid: ['none'] });
    const cur = prefs.avoid.filter(x => x !== 'none');
    const next = cur.includes(k) ? cur.filter(x => x !== k) : [...cur, k];
    setPrefs({ ...prefs, avoid: next.length ? next : ['none'] });
  };

  return (
    <div style={{
      flex: 1, background: PB.cream,
      display: 'flex', flexDirection: 'column',
      padding: '20px 22px 22px', overflow: 'auto',
    }}>
      <Eyebrow>Step 3 of 6</Eyebrow>
      <Headline size={28}>About you<br/>& your kitchen</Headline>
      <Sub>{voice.s3sub}</Sub>

      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Field label="Household size">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
            {sizes.map(s => {
              const sel = prefs.size === s.k;
              return (
                <button key={s.k} onClick={() => setPrefs({ ...prefs, size: s.k })} style={chipStyle(sel)}>
                  <div style={{ fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 900, fontSize: 18 }}>{s.k}</div>
                  <div style={{ fontSize: 9, fontWeight: 600, opacity: 0.7, letterSpacing: '0.04em' }}>{s.label}</div>
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Cooking confidence">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {confs.map(c => {
              const sel = prefs.conf === c.k;
              return (
                <button key={c.k} onClick={() => setPrefs({ ...prefs, conf: c.k })} style={rowChipStyle(sel)}>
                  <div>
                    <div style={{ fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 800, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c.label}</div>
                    <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{c.sub}</div>
                  </div>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%',
                    border: `2px solid ${PB.ink}`,
                    background: sel ? PB.accent : 'transparent',
                  }} />
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Anything you avoid?">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
            {avoid.map(a => {
              const sel = prefs.avoid.includes(a.k);
              return (
                <button key={a.k} onClick={() => toggleAvoid(a.k)} style={chipStyle(sel)}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13 }}>{a.label}</div>
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Freezer space">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
            {freezers.map(f => {
              const sel = prefs.freezer === f.k;
              return (
                <button key={f.k} onClick={() => setPrefs({ ...prefs, freezer: f.k })} style={chipStyle(sel)}>
                  <div style={{ fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 800, fontSize: 13, textTransform: 'uppercase' }}>{f.label}</div>
                  <div style={{ fontSize: 9, opacity: 0.7, marginTop: 2 }}>{f.sub}</div>
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 18 }}>
        <PrimaryButton onClick={onNext} color={ctaColor}>Pick the cuts →</PrimaryButton>
      </div>
    </div>
  );
};

const chipStyle = (sel) => ({
  background: sel ? PB.ink : PB.cream,
  color: sel ? PB.cream : PB.ink,
  border: `2px solid ${PB.ink}`,
  borderRadius: 12,
  padding: '12px 6px',
  fontFamily: 'Inter, sans-serif',
  cursor: 'pointer',
  transition: 'all 160ms',
  transform: sel ? 'translate(-1px,-1px)' : 'none',
  boxShadow: sel ? `3px 3px 0 ${PB.ink}` : `2px 2px 0 ${PB.ink}`,
  textAlign: 'center',
});

const rowChipStyle = (sel) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  background: sel ? PB.bone : PB.cream,
  color: PB.ink,
  border: `2px solid ${PB.ink}`,
  borderRadius: 12,
  padding: '12px 14px',
  fontFamily: 'Inter, sans-serif',
  cursor: 'pointer',
  transition: 'all 160ms',
  textAlign: 'left',
  boxShadow: `2px 2px 0 ${PB.ink}`,
});

// ─────────────────────────────────────────────────────────────
// Step 4 — The Menu (flippable cuts)
// ─────────────────────────────────────────────────────────────
const CUTS = [
  { name: 'Ribeye, properly aged', short: 'RIBEYE', illo: 'steak',
    detail: '100% grass-fed, never grain-finished. Dry-aged 21 days. Heritage cattle from family ranches in Vermont.' },
  { name: 'Wild Alaskan sockeye', short: 'SOCKEYE', illo: 'salmon',
    detail: 'Wild-caught in Bristol Bay, never farmed. Vacuum-sealed at sea, frozen on the same boat that pulled it.' },
  { name: 'Heritage breed bacon', short: 'BACON', illo: 'bacon',
    detail: 'Berkshire pigs, raised on pasture. Cured in small batches without added sugar. Cooks crisp, doesn\'t shrivel.' },
  { name: 'Free-range chicken thighs', short: 'CHICKEN', illo: 'chicken',
    detail: 'Slow-grown, pasture-raised, 100% air-chilled. The thigh actually tastes like chicken used to.' },
  { name: 'Heritage pork chops', short: 'PORK', illo: 'pork',
    detail: 'Bone-in loin chops from heritage Berkshire and Duroc pigs. Cooks like steak. Eats like a small ceremony.' },
  { name: 'Grass-fed ground beef', short: 'GROUND', illo: 'ground',
    detail: '85/15 from the same grass-fed cattle as the ribeye. Pasture, all the way down. Burgers, bolognese, both.' },
];

const cutIllo = (k, size) => {
  if (k === 'steak') return <Steak size={size} />;
  if (k === 'salmon') return <Salmon size={size} />;
  if (k === 'bacon') return <Bacon size={size} />;
  if (k === 'chicken') return <Chicken size={size} />;
  if (k === 'pork') return <Pork size={size} />;
  return <GroundBeef size={size} />;
};

const Step4 = ({ onNext, voice, ctaColor }) => {
  const [flipped, setFlipped] = React.useState(null);
  return (
    <div style={{
      flex: 1, background: PB.cream,
      display: 'flex', flexDirection: 'column',
      padding: '20px 20px 20px', overflow: 'auto',
    }}>
      <Eyebrow>Step 4 of 6 · The menu</Eyebrow>
      <Headline size={28}>What's in your box</Headline>
      <Sub>{voice.s4sub}</Sub>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 18 }}>
        {CUTS.map((c, i) => {
          const isFlip = flipped === i;
          return (
            <div key={c.name}
              onClick={() => setFlipped(isFlip ? null : i)}
              className="mc-stagger-in"
              style={{
                animationDelay: `${i * 80}ms`,
                cursor: 'pointer', perspective: 900, height: 168,
              }}>
              <div style={{
                position: 'relative', width: '100%', height: '100%',
                transformStyle: 'preserve-3d', transition: 'transform 480ms cubic-bezier(.34,1.56,.64,1)',
                transform: isFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* front — butcher paper card */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  background: PB.bone,
                  border: `2px solid ${PB.ink}`,
                  borderRadius: 12,
                  padding: '10px 10px 8px',
                  boxShadow: `3px 3px 0 ${PB.ink}`,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  overflow: 'hidden',
                }}>
                  {/* paper grain */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
                    backgroundImage: `repeating-linear-gradient(90deg, ${PB.kraft}11 0 1px, transparent 1px 6px)`,
                  }} />
                  {/* short tag */}
                  <div style={{
                    position: 'relative', zIndex: 1,
                    fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 9,
                    letterSpacing: '0.18em', color: PB.accent,
                  }}>{c.short}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, flex: 1, alignItems: 'center' }}>
                    {cutIllo(c.illo, 96)}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 800, fontSize: 12.5,
                      lineHeight: 1.1, color: PB.ink, textTransform: 'uppercase', letterSpacing: '0.02em',
                    }}>{c.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 600, color: PB.ink, opacity: 0.5, marginTop: 4 }}>tap for sourcing →</div>
                  </div>
                </div>
                {/* back — sourcing detail */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: PB.tealDark, color: PB.cream,
                  border: `2px solid ${PB.ink}`, borderRadius: 12,
                  padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  boxShadow: `3px 3px 0 ${PB.ink}`,
                }}>
                  <div style={{
                    fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 800, fontSize: 13,
                    textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.05,
                  }}>{c.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, lineHeight: 1.4, opacity: 0.92 }}>
                    {c.detail}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: PB.accent }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, opacity: 0.85, letterSpacing: '0.04em' }}>VERIFIED SOURCE</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* sourcing badge */}
      <div style={{
        marginTop: 14, padding: '12px 14px',
        background: PB.ink, color: PB.cream,
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg viewBox="0 0 24 24" width="20" height="20" style={{ flexShrink: 0 }}>
          <path d="M 12 2 L 20 6 L 20 13 Q 20 19 12 22 Q 4 19 4 13 L 4 6 Z" fill="none" stroke={PB.cream} strokeWidth="2" strokeLinejoin="round" />
          <path d="M 8 12 L 11 15 L 16 9" fill="none" stroke={PB.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>{voice.s4badge}</div>
      </div>

      <div style={{ marginTop: 14 }}>
        <PrimaryButton onClick={onNext} color={ctaColor}>Looks good →</PrimaryButton>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Step 5 — Address + packing line
// ─────────────────────────────────────────────────────────────
const PackingLine = () => {
  const [stage, setStage] = React.useState(0); // 0 fill 1 wrap 2 stamp
  React.useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1900);
    const t2 = setTimeout(() => setStage(2), 3400);
    const t3 = setTimeout(() => setStage(0), 5200);
    return () => [t1,t2,t3].forEach(clearTimeout);
  }, []);

  // Falling cuts into the box (stage 0)
  const dropping = stage === 0;
  const wrapping = stage === 1;
  const stamping = stage === 2;

  return (
    <div style={{
      marginTop: 14,
      background: PB.tealDark,
      border: `2px solid ${PB.ink}`,
      borderRadius: 14,
      position: 'relative', overflow: 'hidden',
      height: 188, flexShrink: 0,
    }}>
      {/* status pill */}
      <div style={{
        position: 'absolute', top: 10, left: 10, zIndex: 6,
        display: 'flex', alignItems: 'center', gap: 6,
        background: PB.cream, color: PB.ink,
        padding: '5px 10px', borderRadius: 999,
        fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        border: `1.5px solid ${PB.ink}`,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: stamping ? PB.accent : PB.mustard,
          animation: 'mc-pulse 1.4s ease-in-out infinite',
        }} />
        {stamping ? 'Ready to ship' : (wrapping ? 'Wrapping in butcher paper' : 'Packing your box')}
      </div>

      {/* faint title */}
      <div style={{
        position: 'absolute', top: 12, right: 12, zIndex: 5,
        fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 900,
        fontSize: 9, letterSpacing: '0.18em', color: PB.cream, opacity: 0.4,
      }}>PACKING LINE · 03</div>

      {/* counter */}
      <div style={{
        position: 'absolute', bottom: 18, left: 0, right: 0, height: 22,
        background: PB.ink,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 18,
        background: PB.kraftDeep,
        backgroundImage: `repeating-linear-gradient(90deg, ${PB.kraftDark} 0 18px, ${PB.kraftDeep} 18px 36px)`,
      }} />

      {/* dropping cuts (above the box) */}
      {dropping && (
        <>
          <div style={{ position: 'absolute', top: 26, left: '50%', transform: 'translateX(-72px)', animation: 'mc-drop 1.6s 0s ease-in forwards' }}>
            <VacPack size={36} fill={PB.meat} label="RIBEYE" />
          </div>
          <div style={{ position: 'absolute', top: 26, left: '50%', transform: 'translateX(-22px)', animation: 'mc-drop 1.6s 0.3s ease-in forwards' }}>
            <VacPack size={36} fill={PB.pinkSalmon} label="SOCKEYE" />
          </div>
          <div style={{ position: 'absolute', top: 26, left: '50%', transform: 'translateX(28px)', animation: 'mc-drop 1.6s 0.6s ease-in forwards' }}>
            <VacPack size={36} fill={PB.meatLight} label="BACON" />
          </div>
        </>
      )}

      {/* the kraft box on the counter */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        zIndex: 4,
      }}>
        <div style={{ position: 'relative', width: 130, height: 90 }}>
          {/* box body */}
          <div style={{
            position: 'absolute', bottom: 0, left: 6, right: 6, height: 70,
            background: PB.kraft, border: `2px solid ${PB.ink}`, borderRadius: '2px 2px 4px 4px',
          }}>
            {/* wordmark stamped */}
            <div style={{
              position: 'absolute', top: 18, left: 0, right: 0, textAlign: 'center',
              fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 900, color: PB.ink,
              fontSize: 11, lineHeight: 0.95, letterSpacing: '0.08em',
            }}>
              BUTCHER<br/>BOX
            </div>
            {/* butcher-paper wrap appears in stage 1+ */}
            {(wrapping || stamping) && (
              <div style={{
                position: 'absolute', inset: 4,
                background: PB.bone,
                border: `1.5px solid ${PB.ink}`,
                animation: 'mc-wrap 0.45s ease-out',
                opacity: 0.95,
              }}>
                {/* twine vertical */}
                <div style={{ position: 'absolute', top: -4, bottom: -4, left: '50%', width: 2, background: PB.ink }} />
                {/* twine horizontal */}
                <div style={{ position: 'absolute', left: -4, right: -4, top: '52%', height: 2, background: PB.ink }} />
                {/* knot */}
                <div style={{
                  position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%,-50%)',
                  width: 8, height: 6, background: PB.ink, borderRadius: '50%',
                }} />
              </div>
            )}
            {/* stamp lands in stage 2 */}
            {stamping && (
              <div style={{
                position: 'absolute', top: 28, left: '50%', transform: 'translate(-50%,0) rotate(-7deg)',
                animation: 'mc-stamp 0.5s cubic-bezier(.34,1.56,.64,1)',
                background: 'transparent', border: `2.5px solid ${PB.accent}`,
                padding: '4px 8px', borderRadius: 3,
                fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 900, fontSize: 9,
                color: PB.accent, letterSpacing: '0.12em',
              }}>READY TO SHIP</div>
            )}
          </div>
          {/* open flaps in stage 0 */}
          {dropping && (
            <>
              <div style={{
                position: 'absolute', top: 16, left: -2, width: 36, height: 12,
                background: PB.kraftDeep, border: `2px solid ${PB.ink}`,
                transform: 'rotate(-25deg)', transformOrigin: 'bottom right',
              }} />
              <div style={{
                position: 'absolute', top: 16, right: -2, width: 36, height: 12,
                background: PB.kraftDeep, border: `2px solid ${PB.ink}`,
                transform: 'rotate(25deg)', transformOrigin: 'bottom left',
              }} />
            </>
          )}
        </div>
      </div>

      {/* hand wrapping (stage 1) */}
      {wrapping && (
        <div style={{
          position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
          fontSize: 28, animation: 'mc-hand 0.8s ease-out',
        }}>
          <svg viewBox="0 0 60 80" width="50" height="60">
            {/* sleeve */}
            <rect x="20" y="50" width="20" height="30" fill={PB.cream} stroke={PB.ink} strokeWidth="2" rx="3" />
            {/* hand */}
            <ellipse cx="30" cy="50" rx="12" ry="10" fill={PB.chickenSkin} stroke={PB.ink} strokeWidth="2" />
            <path d="M 22 46 L 22 38 M 27 44 L 27 36 M 32 44 L 32 36 M 37 46 L 37 40" stroke={PB.ink} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* hanging twine spool */}
      <div style={{
        position: 'absolute', top: 6, right: 56, zIndex: 3,
      }}>
        <svg viewBox="0 0 40 32" width="40" height="32">
          <line x1="20" y1="0" x2="20" y2="6" stroke={PB.cream} strokeWidth="1" opacity="0.5" />
          <ellipse cx="20" cy="14" rx="14" ry="10" fill={PB.bone} stroke={PB.ink} strokeWidth="2" />
          <line x1="6" y1="14" x2="34" y2="14" stroke={PB.ink} strokeWidth="0.8" opacity="0.5" />
          <line x1="8" y1="10" x2="32" y2="10" stroke={PB.ink} strokeWidth="0.8" opacity="0.4" />
          <line x1="8" y1="18" x2="32" y2="18" stroke={PB.ink} strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

const Step5 = ({ onNext, voice, addr, setAddr, ctaColor }) => (
  <div style={{
    flex: 1, background: PB.cream,
    display: 'flex', flexDirection: 'column',
    padding: '20px 22px 22px', overflow: 'auto',
  }}>
    <Eyebrow>Step 5 of 6 · Shipping</Eyebrow>
    <Headline size={28}>Where's it going?</Headline>
    <Sub>{voice.s5sub}</Sub>

    <PackingLine />

    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Field label="Full name">
        <input value={addr.name} onChange={e => setAddr({ ...addr, name: e.target.value })} style={inputStyle} />
      </Field>
      <Field label="Address line 1">
        <input value={addr.line1} onChange={e => setAddr({ ...addr, line1: e.target.value })} style={inputStyle} />
      </Field>
      <Field label="Apt / Suite (optional)">
        <input value={addr.line2} onChange={e => setAddr({ ...addr, line2: e.target.value })} style={inputStyle} />
      </Field>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.7fr 0.9fr', gap: 8 }}>
        <Field label="City"><input value={addr.city} onChange={e => setAddr({ ...addr, city: e.target.value })} style={inputStyle} /></Field>
        <Field label="State"><input value={addr.state} onChange={e => setAddr({ ...addr, state: e.target.value.toUpperCase().slice(0,2) })} style={inputStyle} /></Field>
        <Field label="ZIP"><input value={addr.zip} onChange={e => setAddr({ ...addr, zip: e.target.value.replace(/\D/g,'').slice(0,5) })} style={inputStyle} inputMode="numeric" /></Field>
      </div>
      <Field label="Phone (delivery alerts)">
        <input value={addr.phone} onChange={e => setAddr({ ...addr, phone: e.target.value })} inputMode="tel" style={inputStyle} />
      </Field>
    </div>

    <div style={{
      marginTop: 14, padding: '11px 14px',
      background: PB.bone, border: `2px solid ${PB.ink}`,
      borderRadius: 12, fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
      color: PB.ink, letterSpacing: '0.04em',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 6,
    }}>
      <span>★ 70k+ 5-star</span>
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: PB.ink, opacity: 0.3 }} />
      <span>Humanely raised</span>
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: PB.ink, opacity: 0.3 }} />
      <span>Ships frozen</span>
    </div>

    <div style={{
      marginTop: 12,
      background: PB.cream,
      border: `2px solid ${PB.ink}`,
      borderRadius: 12,
      padding: 12,
      boxShadow: `2px 2px 0 ${PB.ink}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: PB.ink,
        opacity: 0.85,
      }}>Marketing updates</div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <input
          id="mc-marketing-optin"
          type="checkbox"
          checked={!!addr.marketingOptIn}
          onChange={(e) => setAddr({ ...addr, marketingOptIn: e.target.checked })}
          aria-describedby="mc-marketing-optin-help"
          style={{
            width: 18,
            height: 18,
            marginTop: 2,
            accentColor: PB.accent,
            cursor: 'pointer',
          }}
        />
        <div style={{ flex: 1 }}>
          <label
            htmlFor="mc-marketing-optin"
            style={{
              display: 'block',
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              color: PB.ink,
              cursor: 'pointer',
              lineHeight: 1.25,
            }}
          >
            Sign me up for marketing information & offers.
          </label>
          <div
            id="mc-marketing-optin-help"
            style={{
              marginTop: 4,
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              color: PB.ink,
              opacity: 0.65,
              lineHeight: 1.35,
            }}
          >
            Occasional emails about new cuts, deals, and updates. Unsubscribe anytime.
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="button"
          className="mc-btn-press"
          onClick={() => setAddr({ ...addr, marketingOptIn: true })}
          aria-label="Check the marketing sign-up box"
          style={{
            flex: 1,
            background: addr.marketingOptIn ? PB.ink : PB.cream,
            color: addr.marketingOptIn ? PB.cream : PB.ink,
            border: `2px solid ${PB.ink}`,
            borderRadius: 999,
            padding: '12px 14px',
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: `0 3px 0 ${PB.ink}`,
          }}
        >
          {addr.marketingOptIn ? 'Signed up' : 'Sign me up'}
        </button>
        {addr.marketingOptIn && (
          <button
            type="button"
            className="mc-btn-press"
            onClick={() => setAddr({ ...addr, marketingOptIn: false })}
            aria-label="Uncheck the marketing sign-up box"
            style={{
              background: PB.cream,
              color: PB.ink,
              border: `2px solid ${PB.ink}`,
              borderRadius: 999,
              padding: '12px 14px',
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: `0 3px 0 ${PB.ink}`,
              whiteSpace: 'nowrap',
            }}
          >
            No thanks
          </button>
        )}
      </div>
    </div>

    <div style={{ marginTop: 16 }}>
      <PrimaryButton onClick={onNext} color={ctaColor}>Claim my box →</PrimaryButton>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Step 6 — Confirmation
// ─────────────────────────────────────────────────────────────
const Step6 = ({ onRestart, voice, gifterName, addr }) => {
  const arriveDate = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }, []);
  return (
    <div style={{
      flex: 1, background: PB.teal,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '20px 22px 24px', position: 'relative', overflow: 'auto',
    }}>
      <Confetti active={true} />

      <div style={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 220, position: 'relative' }}>
        <div className="mc-wobble" style={{ transformOrigin: 'center bottom' }}>
          <SealedBox size={210} />
        </div>
      </div>

      <div style={{ textAlign: 'center', maxWidth: 320, position: 'relative', zIndex: 1 }}>
        <Headline size={32} color={PB.cream}>{voice.s6title}</Headline>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.5,
          color: PB.cream, opacity: 0.82, margin: '10px 0 0',
        }}>Arriving {arriveDate}. We'll text when it's out for delivery — frozen overnight, packed in dry ice.</p>
      </div>

      {/* summary card */}
      <div style={{
        width: '100%', maxWidth: 360, marginTop: 18,
        background: PB.cream,
        border: `2px solid ${PB.ink}`,
        borderRadius: 14,
        padding: 14,
        boxShadow: `4px 4px 0 ${PB.ink}`,
        display: 'flex', flexDirection: 'column', gap: 10,
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.16em', color: PB.accent, textTransform: 'uppercase' }}>Order summary</div>
          <ChefAvatar size={28} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 13, color: PB.ink }}>
          <span style={{ opacity: 0.7 }}>From</span><span style={{ fontWeight: 700 }}>{gifterName}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 13, color: PB.ink }}>
          <span style={{ opacity: 0.7 }}>Box</span><span style={{ fontWeight: 700 }}>8–10 lbs · Custom mix</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 13, color: PB.ink }}>
          <span style={{ opacity: 0.7 }}>Shipping</span><span style={{ fontWeight: 700, color: PB.teal }}>Free · Frozen overnight</span>
        </div>
        <div style={{ height: 1, background: PB.ink, opacity: 0.12 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Archivo Narrow, sans-serif', fontSize: 14, color: PB.ink, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          <span style={{ fontWeight: 700 }}>Arrives</span><span style={{ fontWeight: 900, color: PB.accent }}>{arriveDate}</span>
        </div>
      </div>

      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12, position: 'relative', zIndex: 1 }}>
        <SecondaryBtn>📅 Add to cal</SecondaryBtn>
        <SecondaryBtn>↩ Thank {gifterName}</SecondaryBtn>
      </div>

      <div style={{
        marginTop: 14, fontFamily: 'Inter, sans-serif', fontSize: 11, color: PB.cream, opacity: 0.55,
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={onRestart}>Replay demo</span>
      </div>
    </div>
  );
};

Object.assign(window, { Step1, Step2, Step3, Step4, Step5, Step6, ProgressPips });
