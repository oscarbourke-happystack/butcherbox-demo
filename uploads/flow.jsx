// Flow steps for Pawthentic gift unboxing

// ============ Shared chrome ============
const PALETTE = {
  yellow: '#F2C744',
  ink: '#2A1F14',
  cream: '#FDF6E3',
  plum: '#6B2845',
  coral: '#E0573B',
  peach: '#F4A582',
  sage: '#8FA86B',
};

// Progress: 6 paws, fill plum as you advance
const ProgressPaws = ({ step, total = 6, voiceColor = PALETTE.plum }) => (
  <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', padding: '14px 0 8px' }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{
        opacity: i <= step ? 1 : 0.22,
        transform: i === step ? 'scale(1.18)' : 'scale(1)',
        transition: 'all 360ms cubic-bezier(.34,1.56,.64,1)',
      }}>
        <Paw size={18} color={i <= step ? voiceColor : PALETTE.ink} />
      </div>
    ))}
  </div>
);

const PrimaryButton = ({ children, onClick, color = PALETTE.plum, full = true }) => (
  <button
    onClick={onClick}
    className="pa-btn-press"
    style={{
      width: full ? '100%' : 'auto',
      background: color,
      color: PALETTE.cream,
      border: 'none',
      borderRadius: 999,
      padding: '18px 28px',
      fontSize: 17,
      fontWeight: 700,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '-0.01em',
      cursor: 'pointer',
      boxShadow: `0 6px 0 ${PALETTE.ink}1a, 0 12px 24px ${PALETTE.ink}1a`,
    }}
  >
    {children}
  </button>
);

const Headline = ({ children, color = PALETTE.ink, size = 40 }) => (
  <h1 style={{
    fontFamily: '"Fraunces", serif',
    fontWeight: 900,
    fontSize: size,
    lineHeight: 0.98,
    letterSpacing: '-0.035em',
    color,
    margin: 0,
    textWrap: 'balance',
  }}>{children}</h1>
);

const Sub = ({ children, color = PALETTE.ink }) => (
  <p style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 1.4,
    color,
    opacity: 0.78,
    margin: '12px 0 0',
    textWrap: 'pretty',
  }}>{children}</p>
);

// ============ Confetti & paw rain ============
const Confetti = ({ active, includePaws = true }) => {
  const pieces = React.useMemo(() => {
    return Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 1.6 + Math.random() * 1.2,
      rotate: Math.random() * 720 - 360,
      shape: ['circle', 'square', 'rect', 'tri'][i % 4],
      color: [PALETTE.yellow, PALETTE.coral, PALETTE.plum, PALETTE.sage, PALETTE.peach][i % 5],
      drift: (Math.random() - 0.5) * 80,
    }));
  }, [active]);
  const paws = React.useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: 0.1 + Math.random() * 0.6,
    duration: 1.8 + Math.random() * 1.0,
    rotate: Math.random() * 60 - 30,
    color: [PALETTE.plum, PALETTE.coral, PALETTE.ink][i % 3],
  })), [active]);

  if (!active) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 50 }}>
      {pieces.map(p => (
        <div key={p.id}
          style={{
            position: 'absolute', top: -20, left: `${p.left}%`,
            animation: `pa-fall ${p.duration}s ${p.delay}s cubic-bezier(.4,.6,.6,1) forwards`,
            ['--pa-rot']: `${p.rotate}deg`, ['--pa-drift']: `${p.drift}px`,
          }}>
          <ConfettiPiece color={p.color} shape={p.shape} />
        </div>
      ))}
      {includePaws && paws.map(p => (
        <div key={'p'+p.id}
          style={{
            position: 'absolute', top: -30, left: `${p.left}%`,
            animation: `pa-fall ${p.duration}s ${p.delay}s cubic-bezier(.4,.6,.6,1) forwards`,
            ['--pa-rot']: `${p.rotate}deg`, ['--pa-drift']: `${(Math.random()-0.5)*60}px`,
          }}>
          <Paw size={22} color={p.color} />
        </div>
      ))}
    </div>
  );
};

// ============ Step 1: Reveal ============
const Step1 = ({ onNext, voice }) => {
  const [opening, setOpening] = React.useState(false);
  const handleClick = () => {
    setOpening(true);
    setTimeout(() => onNext(), 900);
  };
  return (
    <div style={{
      flex: 1, background: PALETTE.yellow,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '24px 24px 40px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* decorative dotted paws */}
      <div style={{ position: 'absolute', top: 80, left: 20, opacity: 0.18 }}><Paw size={28} color={PALETTE.ink} /></div>
      <div style={{ position: 'absolute', top: 140, right: 30, opacity: 0.18, transform: 'rotate(20deg)' }}><Paw size={22} color={PALETTE.ink} /></div>
      <div style={{ position: 'absolute', bottom: 220, left: 40, opacity: 0.15, transform: 'rotate(-15deg)' }}><Paw size={20} color={PALETTE.ink} /></div>
      <div style={{ position: 'absolute', bottom: 140, right: 24, opacity: 0.15 }}><Paw size={26} color={PALETTE.ink} /></div>

      <Confetti active={opening} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div className={opening ? 'pa-pop' : 'pa-wobble'} style={{ transformOrigin: 'center bottom' }}>
          <GiftBox size={220} />
        </div>
      </div>

      <div style={{ textAlign: 'center', maxWidth: 320 }}>
        <div style={{
          display: 'inline-block', padding: '6px 12px', borderRadius: 999,
          background: PALETTE.ink, color: PALETTE.yellow,
          fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', marginBottom: 16,
        }}>A gift just for you</div>
        <Headline size={38}>Sarah sent you a gift!</Headline>
        <Sub>{voice.s1sub}</Sub>
        <div style={{ marginTop: 32 }}>
          <PrimaryButton onClick={handleClick} color={PALETTE.plum}>Open it →</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

// ============ Step 2: Note from Sarah ============
const Step2 = ({ onNext, voice }) => (
  <div style={{
    flex: 1, background: PALETTE.cream,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '32px 24px 28px', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ textAlign: 'center', marginBottom: 18 }}>
      <Headline size={28}>A note from Sarah</Headline>
    </div>

    {/* sticky note */}
    <div style={{
      position: 'relative', width: '100%', maxWidth: 320,
      transform: 'rotate(-2.4deg)', marginTop: 20,
    }} className="pa-card-in">
      {/* tape */}
      <div style={{
        position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%) rotate(-4deg)',
        width: 90, height: 26, background: '#ffffff8a', border: `1px dashed ${PALETTE.ink}33`,
        zIndex: 2,
      }} />
      <div style={{
        background: PALETTE.yellow,
        borderRadius: 8,
        padding: '32px 26px 26px',
        boxShadow: `0 18px 40px ${PALETTE.ink}26, 0 4px 0 ${PALETTE.ink}10`,
        // torn-edge bottom via clip-path
        clipPath: 'polygon(0 0, 100% 0, 100% 96%, 95% 100%, 88% 96%, 80% 100%, 72% 97%, 64% 100%, 56% 96%, 48% 100%, 40% 97%, 32% 100%, 24% 96%, 16% 100%, 8% 97%, 0 100%)',
      }}>
        <p style={{
          fontFamily: '"Caveat", cursive',
          fontSize: 22,
          lineHeight: 1.3,
          color: PALETTE.ink,
          margin: 0,
          textWrap: 'pretty',
        }}>{voice.s2note}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
          <SarahDog size={42} />
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, color: PALETTE.ink }}>Sarah & Bonnie</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: PALETTE.ink, opacity: 0.6 }}>Pawthentic since Oct '25</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 'auto', width: '100%' }}>
      <PrimaryButton onClick={onNext}>Aww, what's inside? →</PrimaryButton>
    </div>
  </div>
);

// ============ Step 3: About Biscuit ============
const Step3 = ({ onNext, voice, dog, setDog }) => {
  const activity = ['Chill', 'Average', 'Zoomies'];
  const activityEmoji = ['😴', '🐕', '🔥'];
  return (
    <div style={{
      flex: 1, background: PALETTE.cream,
      display: 'flex', flexDirection: 'column',
      padding: '24px 22px 24px', position: 'relative', overflow: 'hidden',
    }}>
      {/* spaniel removed */}

      <Headline size={30}>Let's make this perfect for Biscuit 🐾</Headline>
      <Sub>{voice.s3sub}</Sub>

      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', zIndex: 1 }}>
        <Field label="What breed is Biscuit?">
          <input value={dog.breed} onChange={e => setDog({ ...dog, breed: e.target.value })}
            style={inputStyle} />
        </Field>

        <Field label="How old is the little legend?">
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={dog.age} onChange={e => setDog({ ...dog, age: e.target.value.replace(/\D/g, '').slice(0,2) })}
              style={{ ...inputStyle, flex: 1 }} inputMode="numeric" />
            <select value={dog.ageUnit} onChange={e => setDog({ ...dog, ageUnit: e.target.value })}
              style={{ ...inputStyle, flex: 1.2 }}>
              <option>years</option>
              <option>months</option>
            </select>
          </div>
        </Field>

        <Field label="How active is Biscuit?">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {activity.map((a, i) => {
              const sel = dog.activity === a;
              return (
                <button key={a} onClick={() => setDog({ ...dog, activity: a })}
                  style={{
                    background: sel ? PALETTE.plum : PALETTE.cream,
                    color: sel ? PALETTE.cream : PALETTE.ink,
                    border: `2px solid ${PALETTE.ink}`,
                    borderRadius: 14,
                    padding: '12px 4px',
                    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13,
                    cursor: 'pointer', transition: 'all 180ms',
                    transform: sel ? 'translateY(-2px)' : 'none',
                    boxShadow: sel ? `0 4px 0 ${PALETTE.ink}` : `0 2px 0 ${PALETTE.ink}`,
                  }}>
                  <div style={{ fontSize: 22, lineHeight: 1, marginBottom: 4 }}>{activityEmoji[i]}</div>
                  {a}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Any allergies or fussy bits? (optional)">
          <input value={dog.notes} onChange={e => setDog({ ...dog, notes: e.target.value })}
            placeholder="e.g. no chicken, sensitive tummy"
            style={inputStyle} />
        </Field>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 18, position: 'relative', zIndex: 2 }}>
        <PrimaryButton onClick={onNext}>Next →</PrimaryButton>
      </div>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div>
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13,
      color: PALETTE.ink, marginBottom: 6, opacity: 0.85,
    }}>{label}</div>
    {children}
  </div>
);

const inputStyle = {
  width: '100%',
  background: '#ffffff',
  border: `2px solid ${PALETTE.ink}`,
  borderRadius: 14,
  padding: '14px 14px',
  fontFamily: 'Inter, sans-serif',
  fontSize: 15,
  color: PALETTE.ink,
  outline: 'none',
  boxShadow: `0 2px 0 ${PALETTE.ink}`,
  boxSizing: 'border-box',
};

// ============ Step 4: Menu ============
const MEALS = [
  { name: 'Beef It Up', ing: 'Beef · sweet potato · kale', bg: '#E0573B', label: 'BEEF', textOnDark: true },
  { name: 'Chicken You Out', ing: 'Chicken · carrots · peas', bg: '#F2C744', label: 'CHICK', textOnDark: false },
  { name: 'Salmon Says', ing: 'Salmon · rice · spinach', bg: '#F4A582', label: 'SALMON', textOnDark: false },
  { name: 'Turkey & Tickle', ing: 'Turkey · squash · broccoli', bg: '#E8B98F', label: 'TURKEY', textOnDark: false },
];

const Step4 = ({ onNext, voice }) => {
  const [flipped, setFlipped] = React.useState(null);
  return (
    <div style={{
      flex: 1, background: PALETTE.cream,
      display: 'flex', flexDirection: 'column',
      padding: '24px 22px 24px', overflow: 'auto',
    }}>
      <Headline size={30}>Here's what Biscuit's tucking into 🍽️</Headline>
      <Sub>{voice.s4sub}</Sub>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 22 }}>
        {MEALS.map((m, i) => {
          const isFlip = flipped === i;
          const fg = m.textOnDark ? PALETTE.cream : PALETTE.ink;
          return (
            <div key={m.name}
              onClick={() => setFlipped(isFlip ? null : i)}
              className="pa-stagger-in"
              style={{
                animationDelay: `${i * 90}ms`,
                cursor: 'pointer', perspective: 800, height: 170,
              }}>
              <div style={{
                position: 'relative', width: '100%', height: '100%',
                transformStyle: 'preserve-3d', transition: 'transform 480ms cubic-bezier(.34,1.56,.64,1)',
                transform: isFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* front */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  background: m.bg,
                  border: `2.5px solid ${PALETTE.ink}`,
                  borderRadius: 18,
                  padding: 12,
                  boxShadow: `0 4px 0 ${PALETTE.ink}`,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}>
                  <div style={{
                    fontFamily: '"Fraunces", serif', fontWeight: 900, fontSize: 17, lineHeight: 1,
                    color: fg, letterSpacing: '-0.03em',
                  }}>{m.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Bowl size={88} fill={m.textOnDark ? '#FFFFFF22' : PALETTE.ink + '12'} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600,
                    color: fg, opacity: 0.85, textAlign: 'right',
                  }}>tap to peek →</div>
                </div>
                {/* back */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: PALETTE.ink, color: PALETTE.cream,
                  border: `2.5px solid ${PALETTE.ink}`, borderRadius: 18,
                  padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  boxShadow: `0 4px 0 ${PALETTE.ink}`,
                }}>
                  <div style={{
                    fontFamily: '"Fraunces", serif', fontWeight: 900, fontSize: 15, lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>{m.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.4, opacity: 0.9 }}>
                    {m.ing}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: PALETTE.sage }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, opacity: 0.75 }}>vet-formulated</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 18, padding: '12px 14px',
        background: PALETTE.sage + '22',
        border: `1.5px solid ${PALETTE.sage}`,
        borderRadius: 14,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ fontSize: 16 }}>🌱</div>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: PALETTE.ink,
        }}>{voice.s4badge}</div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 22 }}>
        <PrimaryButton onClick={onNext}>Looks delish, next →</PrimaryButton>
      </div>
    </div>
  );
};

// ============ Step 5: Address + packing animation ============
// Mini box on the conveyor belt — visually progresses based on `packed` count
const ConveyorBox = ({ stage, packed }) => {
  // stage 0 = box just appeared (open, empty)
  // stage 1 = filling (some pouches in)
  // stage 2 = sealed (taped, ready)
  const isFilling = stage === 1;
  const isSealed = stage === 2;
  const fillCount = Math.min(packed, 4);
  return (
    <div style={{ position: 'relative', width: 56, height: 50 }}>
      {/* box body */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 38,
        background: '#D9A36B',
        border: `2px solid ${PALETTE.ink}`,
        borderRadius: '2px 2px 4px 4px',
      }}>
        {/* yellow front panel */}
        <div style={{
          position: 'absolute', top: 6, left: 8, right: 8, bottom: 6,
          background: PALETTE.yellow,
          border: `1.5px solid ${PALETTE.ink}`,
        }}>
          {/* mini paw stamp */}
          <div style={{
            position: 'absolute', top: 4, right: 3,
            width: 4, height: 4, borderRadius: '50%', background: PALETTE.plum,
          }}></div>
        </div>
      </div>
      {/* open flaps (stages 0 + 1) */}
      {!isSealed && (
        <>
          <div style={{
            position: 'absolute', bottom: 34, left: -2, width: 32, height: 10,
            background: '#C68A4F',
            border: `2px solid ${PALETTE.ink}`,
            transform: 'skewX(-30deg)',
            transformOrigin: 'bottom right',
          }}></div>
          <div style={{
            position: 'absolute', bottom: 34, right: -2, width: 32, height: 10,
            background: '#C68A4F',
            border: `2px solid ${PALETTE.ink}`,
            transform: 'skewX(30deg)',
            transformOrigin: 'bottom left',
          }}></div>
        </>
      )}
      {/* tape (sealed) */}
      {isSealed && (
        <div style={{
          position: 'absolute', bottom: 30, left: 8, right: 8, height: 6,
          background: PALETTE.cream,
          border: `1.5px solid ${PALETTE.ink}`,
          opacity: 0.95,
        }}></div>
      )}
      {/* pouches stacked inside (stage 1 only) */}
      {isFilling && fillCount > 0 && (
        <div style={{
          position: 'absolute', bottom: 18, left: 10, right: 10,
          display: 'flex', gap: 1.5, justifyContent: 'center',
        }}>
          {[PALETTE.coral, PALETTE.peach, PALETTE.yellow, '#E8B98F'].slice(0, fillCount).map((c, i) => (
            <div key={i} style={{
              width: 6, height: 14, background: c,
              border: `1px solid ${PALETTE.ink}`, borderRadius: 1,
            }}></div>
          ))}
        </div>
      )}
    </div>
  );
};

const Step5 = ({ onNext, voice, addr, setAddr }) => {
  const [packed, setPacked] = React.useState(0);
  React.useEffect(() => {
    const timers = [];
    [600, 1300, 2000, 2700].forEach((t, i) => {
      timers.push(setTimeout(() => setPacked(p => Math.max(p, i + 1)), t));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      flex: 1, background: PALETTE.cream,
      display: 'flex', flexDirection: 'column',
      padding: '24px 22px 24px', overflow: 'auto',
    }}>
      <Headline size={30}>Where's Biscuit's bowl going? 📦</Headline>
      <Sub>{voice.s5sub}</Sub>

      {/* conveyor belt packing scene */}
      <div style={{
        marginTop: 18,
        background: `linear-gradient(180deg, ${PALETTE.yellow}cc 0%, ${PALETTE.yellow} 100%)`,
        border: `2.5px solid ${PALETTE.ink}`,
        borderRadius: 18,
        position: 'relative', overflow: 'hidden',
        height: 170, minHeight: 170, flexShrink: 0,
      }}>
        {/* tiny status pill */}
        <div style={{
          position: 'absolute', top: 10, left: 10, zIndex: 5,
          display: 'flex', alignItems: 'center', gap: 6,
          background: PALETTE.ink, color: PALETTE.cream,
          padding: '5px 10px', borderRadius: 999,
          fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: PALETTE.sage,
            animation: 'pa-pulse 1.4s ease-in-out infinite',
          }}></span>
          {packed >= 4 ? 'Ready to ship' : 'Packing your gift'}
        </div>

        {/* sparkles in bg */}
        <div style={{ position: 'absolute', top: 22, right: 30, opacity: 0.5, fontSize: 10 }}>✦</div>
        <div style={{ position: 'absolute', top: 50, right: 80, opacity: 0.35, fontSize: 8 }}>✦</div>

        {/* conveyor belt structure */}
        {/* belt surface (dark band) */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 18,
          height: 36, background: PALETTE.ink,
          borderTop: `2px solid ${PALETTE.ink}`,
          borderBottom: `2px solid ${PALETTE.ink}`,
          overflow: 'hidden',
        }}>
          {/* moving tread stripes */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              ${PALETTE.cream}66 0 14px,
              transparent 14px 28px
            )`,
            animation: 'pa-belt 1.4s linear infinite',
          }}></div>
        </div>
        {/* belt rollers (circles at each end) */}
        {[8, 332].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', bottom: 8, left: x,
            width: 28, height: 28, borderRadius: '50%',
            background: PALETTE.cream,
            border: `2.5px solid ${PALETTE.ink}`,
            zIndex: 2,
          }}>
            <div style={{
              position: 'absolute', inset: 4, borderRadius: '50%',
              border: `2px dashed ${PALETTE.ink}`,
              animation: 'pa-spin 1.4s linear infinite',
            }}></div>
          </div>
        ))}

        {/* boxes on the belt — travel L→R, each with different state */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute', bottom: 50,
              animation: `pa-belt-move 6s linear infinite`,
              animationDelay: `${i * -2}s`,
              willChange: 'transform',
            }}>
              <ConveyorBox stage={i} packed={packed} />
            </div>
          ))}
        </div>

        {/* gantry — horizontal dark rail at top of scene */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 14, background: PALETTE.ink,
          borderBottom: `2px solid ${PALETTE.ink}`,
          zIndex: 1,
        }}>
          {/* rail texture — light dashes to suggest a track */}
          <div style={{
            position: 'absolute', left: 0, right: 0, top: 5, height: 4,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              ${PALETTE.cream}55 0 8px,
              transparent 8px 16px
            )`,
          }}></div>
          {/* mounting bolts at each end */}
          <div style={{ position: 'absolute', left: 4, top: 3, width: 6, height: 6, borderRadius: '50%', background: PALETTE.cream, border: `1.5px solid ${PALETTE.cream}` }}></div>
          <div style={{ position: 'absolute', right: 4, top: 3, width: 6, height: 6, borderRadius: '50%', background: PALETTE.cream, border: `1.5px solid ${PALETTE.cream}` }}></div>
        </div>

        {/* "loader" arm above belt — drops a pouch */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 60, height: 90, zIndex: 2,
        }}>
          {/* arm — extends downward with the claw */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: 6, background: PALETTE.ink, borderRadius: 3,
            transformOrigin: 'top center',
            animation: 'pa-arm-extend 2s ease-in-out infinite',
          }}></div>
          {/* claw — rides at the bottom of the arm */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: 22, height: 14,
            background: PALETTE.coral,
            border: `2px solid ${PALETTE.ink}`,
            borderRadius: '4px 4px 8px 8px',
            animation: 'pa-claw 2s ease-in-out infinite',
          }}></div>
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Field label="Full name">
          <input value={addr.name} onChange={e => setAddr({ ...addr, name: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Address line 1">
          <input value={addr.line1} onChange={e => setAddr({ ...addr, line1: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Address line 2 (optional)">
          <input value={addr.line2} onChange={e => setAddr({ ...addr, line2: e.target.value })} style={inputStyle} />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 10 }}>
          <Field label="City"><input value={addr.city} onChange={e => setAddr({ ...addr, city: e.target.value })} style={inputStyle} /></Field>
          <Field label="Postcode"><input value={addr.post} onChange={e => setAddr({ ...addr, post: e.target.value.toUpperCase() })} style={inputStyle} /></Field>
        </div>
        <Field label="Phone (for delivery updates)">
          <input value={addr.phone} onChange={e => setAddr({ ...addr, phone: e.target.value })} inputMode="tel" style={inputStyle} />
        </Field>
      </div>

      <div style={{
        marginTop: 16, padding: '12px 14px',
        background: PALETTE.ink, color: PALETTE.cream,
        borderRadius: 14, fontFamily: 'Inter, sans-serif', fontSize: 11.5, fontWeight: 600,
        textAlign: 'center', letterSpacing: '0.01em',
      }}>
        ⭐ 4.8 on Trustpilot · 38,000+ reviews · 🌱 B Corp · 🇬🇧 British
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 18 }}>
        <PrimaryButton onClick={onNext}>Claim my gift →</PrimaryButton>
      </div>
    </div>
  );
};

// ============ Step 6: Confirmation ============
const Step6 = ({ onRestart, voice, dog }) => (
  <div style={{
    flex: 1, background: PALETTE.yellow,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '24px 22px 28px', position: 'relative', overflow: 'hidden',
  }}>
    <Confetti active={true} />

    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 220 }}>
      <div className="pa-wobble" style={{ transformOrigin: 'center bottom' }}>
        <BrandBox size={220} withBow={true} />
      </div>
    </div>

    <div style={{ textAlign: 'center', maxWidth: 320, position: 'relative', zIndex: 1 }}>
      <Headline size={36}>{voice.s6title.replace('{name}', dog.name || 'Biscuit')}</Headline>
      <Sub>Arriving Tuesday. We'll text you when it's out for delivery.</Sub>
    </div>

    {/* summary card */}
    <div style={{
      width: '100%', maxWidth: 360, marginTop: 22,
      background: PALETTE.cream,
      border: `2.5px solid ${PALETTE.ink}`,
      borderRadius: 18,
      padding: 16,
      boxShadow: `0 6px 0 ${PALETTE.ink}`,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: PALETTE.plum, textTransform: 'uppercase' }}>Your gift</div>
        <SarahDog size={28} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 14, color: PALETTE.ink }}>
        <span>From Sarah</span><span style={{ fontWeight: 700 }}>2 weeks fresh</span>
      </div>
      <div style={{ height: 1, background: PALETTE.ink, opacity: 0.12 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 14, color: PALETTE.ink }}>
        <span>Delivery</span><span style={{ fontWeight: 700, color: PALETTE.sage }}>Free · Tue 12 May</span>
      </div>
    </div>

    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
      <SecondaryBtn>📅 Add to calendar</SecondaryBtn>
      <SecondaryBtn>💛 Thank Sarah</SecondaryBtn>
    </div>

    <div style={{
      marginTop: 18, fontFamily: 'Inter, sans-serif', fontSize: 11, color: PALETTE.ink, opacity: 0.6,
      textAlign: 'center',
    }}>
      Powered by <span style={{ fontWeight: 700, color: PALETTE.plum }}>GiftFlow</span> · <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={onRestart}>Replay demo</span>
    </div>
  </div>
);

const SecondaryBtn = ({ children }) => (
  <button className="pa-btn-press" style={{
    background: PALETTE.cream,
    border: `2px solid ${PALETTE.ink}`,
    borderRadius: 14,
    padding: '12px 8px',
    fontFamily: 'Inter, sans-serif', fontSize: 12.5, fontWeight: 700,
    color: PALETTE.ink, cursor: 'pointer',
    boxShadow: `0 3px 0 ${PALETTE.ink}`,
  }}>{children}</button>
);

Object.assign(window, { Step1, Step2, Step3, Step4, Step5, Step6, ProgressPaws, PALETTE });
