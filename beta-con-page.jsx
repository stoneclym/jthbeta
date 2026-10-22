// beta-con-page.jsx — NC State Beta Convention page for the JTH Beta Club site.

// =============================================================== BETA CON
function BetaConPage({ fonts }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  const facts = [
    ['When', 'Jan 28–30, 2027'],
    ['Where', 'Koury Convention Center, Greensboro'],
    ['Division', 'Senior'],
    ['Theme', 'Legends in the Making'],
  ];

  const dates = [
    { d: 'Dec 2', what: 'Convention registration deadline' },
    { d: 'Dec 3–10', what: 'Testing window' },
    { d: 'Dec 30', what: 'Hotel deadline' },
    { d: 'Jan 28–30', what: 'NC State Beta Convention' },
  ];

  const links = [
    { label: 'National Beta: State Conventions', href: 'https://beta.org/state-conventions/' },
  ];

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Beta Con</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 12px' : '0 0 16px' }}>
        Legends in<br/><MarkerHighlight animate={true}>the making.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 16 : 18, lineHeight: 1.5, maxWidth: 640, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        Every January, Beta Clubs from across North Carolina meet for the NC State Beta Convention to compete, connect, and celebrate service and leadership.
      </p>

      {/* Quick facts */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', border: `2.5px solid ${navy}` }}>
        {facts.map(([k, v], i) => (
          <div key={k} style={{
            padding: 24, background: i % 2 === 0 ? yellow : '#fff',
            borderRight: mobile ? 'none' : (i < facts.length - 1 ? `2.5px solid ${navy}` : 'none'),
            borderBottom: mobile && i < facts.length - 1 ? `2.5px solid ${navy}` : 'none',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', opacity: .7, marginBottom: 8 }}>{k}</div>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Key dates */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>Key dates</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />}
        </div>
        <div style={{ border: `2.5px solid ${navy}` }}>
          {dates.map((r, i) => (
            <div key={r.d} style={{
              display: 'grid', gridTemplateColumns: mobile ? '110px 1fr' : '200px 1fr', alignItems: 'center',
              borderBottom: i < dates.length - 1 ? `2px solid ${navy}` : 'none',
              background: i === dates.length - 1 ? yellow : '#fff',
            }}>
              <div style={{ padding: mobile ? '16px' : '20px 28px', fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 18 : 24, textTransform: 'uppercase', borderRight: `2px solid ${navy}` }}>{r.d}</div>
              <div style={{ padding: mobile ? '16px' : '20px 28px', fontSize: 15, fontWeight: 600 }}>{r.what}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hoggard trip info */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>Going with Hoggard</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
          <div style={{ padding: mobile ? 24 : 36, background: '#fff', borderRight: mobile ? 'none' : `2.5px solid ${navy}`, borderBottom: mobile ? `2.5px solid ${navy}` : 'none' }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, textTransform: 'uppercase', marginBottom: 12 }}>Registration</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              The registration fee is $30 (or $45 — check with your advisors which applies to you). Registration closes <strong>Dec 2</strong>, and testing runs <strong>Dec 3–10</strong>. Hotel arrangements are due <strong>Dec 30</strong>.
            </p>
          </div>
          <div style={{ padding: mobile ? 24 : 36, background: navy, color: '#fff' }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, textTransform: 'uppercase', marginBottom: 12, color: yellow }}>Trip cost</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              The total cost of the trip isn't posted here yet. Ask Hoggard's Beta Club advisors for the latest details.
            </p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>Links</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none', color: navy, background: yellow, border: `2.5px solid ${navy}`,
              boxShadow: `5px 5px 0 ${navy}`, padding: '12px 20px', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: '.04em',
            }}>{l.label} →</a>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 16 }}>
          {[1, 2, 3, 4].map((n) => <PhotoSlot key={n} label={`Photo: Beta Con ${n}`} />)}
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { BetaConPage });
