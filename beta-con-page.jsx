// beta-con-page.jsx — NC State Beta Convention page for the JTH Beta Club site.

function BetaConHeading({ fonts, navy, mobile, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
      <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>{children}</h2>
      {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />}
    </div>
  );
}

// =============================================================== BETA CON
function BetaConPage({ fonts }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();
  const H = (p) => <BetaConHeading fonts={fonts} navy={navy} mobile={mobile} {...p} />;

  const facts = [
    ['When', 'Jan 28–30, 2027'],
    ['Where', 'Joseph S. Koury Convention Center, Greensboro, NC'],
    ['Division', 'Senior'],
    ['Theme', 'Legends in the Making'],
  ];

  const trip = [
    { d: 'Thursday', what: 'Arrive in the afternoon. Competition begins.' },
    { d: 'Friday', what: 'Compete. Thursday and Friday are excused absences.' },
    { d: 'Saturday', what: 'Depart after the award ceremony and new state officer reveal.' },
  ];

  const requirements = [
    <>Participate in at least <strong>one</strong> individual event (academic, performance, art, etc.).</>,
    'Participate in a short skit for our state officer candidate. It won’t be hard or time consuming!',
    'Participate in a group event.',
  ];

  const groupEvents = [
    ['Living Lit', 'Taking a scene from a book and recreating it in real life with people, props, and a set. You stand completely still while being judged.'],
    ['Performing Arts', 'Small group of performers on stage dancing, singing, and acting in a musical number.'],
    ['Musicology', 'A team of 4 students competing in a competition of general music knowledge.'],
    ['Quiz Bowl', 'A team of 4 students competing in a competition of general knowledge (great variety of questions).'],
    ['Engineering', 'A team of 3–5 students constructing an invention onsite. This year, inventions are related to the engineer Rube Goldberg.'],
    ['Service Learning', 'Creating a tri-fold that features the club’s service projects throughout the year. It doesn’t have to follow the theme!'],
    ['Scrapbook', 'Putting together a scrapbook of everything we did as a club in the year that follows the theme. The meaning of scrapbook is very broad, so you can get pretty creative. If you love anything artsy, this is right up your alley.'],
  ];

  const dates = [
    { d: 'Dec 2', what: 'Convention registration deadline' },
    { d: 'Dec 3–10', what: 'Testing window' },
    { d: 'Dec 30', what: 'Hotel deadline' },
    { d: 'Jan 28–30', what: 'NC State Beta Convention' },
  ];

  const links = [
    { label: 'State Convention Handbook', href: 'https://support.betaclub.org/support/solutions/folders/153000761069/page/1', sub: 'All information about the competitions. We are in the senior division, so events marked junior or elementary only are not for us.' },
    { label: 'Convention Schedule', href: 'https://www.betaclub.org/conv_schedule/nc-s/', sub: 'Full timeline of the convention.' },
    { label: 'Beta State Convention Website', href: 'https://www.betaclub.org/know_before_you_go/north-carolina/#ncsenior', sub: 'Everything about Beta Con. Make sure to click on the senior division.' },
  ];

  const contacts = [
    ['Aubree O’Rourke', 'aubree.orourke@student.nhcs.net'],
    ['Cailyn Freeman', 'cailyn.freeman@student.nhcs.net'],
    ['Beta Email', 'jthbetaclub@gmail.com'],
  ];

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Beta Con</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 12px' : '0 0 16px' }}>
        Legends in<br/><MarkerHighlight animate={true}>the making.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 16 : 18, lineHeight: 1.5, maxWidth: 680, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        Beta Convention (aka Beta Con) is a state convention where high schools all around North Carolina with Beta Clubs come together and compete in different events to win awards. Events span from academic tests (English or math) to art creations (cake decorating or performing arts groups). There is a little something for everyone!
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

      {/* Trip timeline */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>The trip</H>
        <div style={{ border: `2.5px solid ${navy}` }}>
          {trip.map((r, i) => (
            <div key={r.d} style={{
              display: 'grid', gridTemplateColumns: mobile ? '110px 1fr' : '200px 1fr', alignItems: 'center',
              borderBottom: i < trip.length - 1 ? `2px solid ${navy}` : 'none',
              background: i % 2 === 1 ? yellow : '#fff',
            }}>
              <div style={{ padding: mobile ? 16 : '20px 28px', fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 18 : 24, textTransform: 'uppercase', borderRight: `2px solid ${navy}` }}>{r.d}</div>
              <div style={{ padding: mobile ? 16 : '20px 28px', fontSize: 15, fontWeight: 600 }}>{r.what}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Requirements</H>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', border: `2.5px solid ${navy}` }}>
          {requirements.map((r, i) => (
            <div key={i} style={{
              padding: 28, background: i === 1 ? yellow : '#fff', fontSize: 16, lineHeight: 1.5, fontWeight: 500,
              borderRight: mobile ? 'none' : (i < 2 ? `2.5px solid ${navy}` : 'none'),
              borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 32, marginBottom: 8 }}>{i + 1}</div>
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* Group events */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Group events</H>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {groupEvents.map(([t, d], i) => (
            <div key={t} style={{ border: `2.5px solid ${navy}`, background: i % 3 === 1 ? yellow : '#fff', padding: 24, boxShadow: `5px 5px 0 ${navy}` }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, textTransform: 'uppercase', marginBottom: 10 }}>{t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', border: `2.5px solid ${navy}` }}>
          <div style={{ padding: 28, background: navy, color: '#fff', borderRight: mobile ? 'none' : `2.5px solid ${navy}` }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', color: yellow, marginBottom: 8 }}>Signing up: one entry per event</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
              You can only participate in <strong>one</strong> academic event, and the school can only give <strong>one</strong> entry for each division, regardless of event. For example, 2 people cannot both compete in the English academic test.
            </p>
          </div>
          <div style={{ padding: 28, background: '#fff' }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>A note on commitment</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
              For any event you sign up for (especially group events), please try your best to participate as much as possible. We want our school to show its best, and that takes hard work from all of us. If you know you can’t give an event the time it requires, let someone else who has the time have the spot.
            </p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Good to know</H>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', border: `2.5px solid ${navy}` }}>
          {[
            ['Rooming', 'This is an overnight trip. You will be rooming with 3 other people, sorted out later.'],
            ['Absences', 'Thursday and Friday are excused absences. Academic events online count as participation.'],
            ['Cost & food', 'Some of you might have money from last year’s cancelled convention. We’ll stop for food at a mall with a food court on the way to Greensboro, so bring money for that. There is also a mall next to the convention center with food, as well as food in the center.'],
          ].map(([t, d], i) => (
            <div key={t} style={{
              padding: 28, background: i === 1 ? yellow : '#fff',
              borderRight: mobile ? 'none' : (i < 2 ? `2.5px solid ${navy}` : 'none'),
              borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>{t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key dates */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Key dates</H>
        <div style={{ border: `2.5px solid ${navy}` }}>
          {dates.map((r, i) => (
            <div key={r.d} style={{
              display: 'grid', gridTemplateColumns: mobile ? '110px 1fr' : '200px 1fr', alignItems: 'center',
              borderBottom: i < dates.length - 1 ? `2px solid ${navy}` : 'none',
              background: i === dates.length - 1 ? yellow : '#fff',
            }}>
              <div style={{ padding: mobile ? 16 : '20px 28px', fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 18 : 24, textTransform: 'uppercase', borderRight: `2px solid ${navy}` }}>{r.d}</div>
              <div style={{ padding: mobile ? 16 : '20px 28px', fontSize: 15, fontWeight: 600 }}>{r.what}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Important links</H>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none', color: navy, background: yellow, border: `2.5px solid ${navy}`,
              boxShadow: `5px 5px 0 ${navy}`, padding: 24, display: 'block',
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>{l.label} →</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>{l.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <H>Questions? Reach out</H>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', border: `2.5px solid ${navy}` }}>
          {contacts.map(([n, e], i) => (
            <div key={n} style={{
              padding: 28, background: '#fff',
              borderRight: mobile ? 'none' : (i < 2 ? `2.5px solid ${navy}` : 'none'),
              borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 6 }}>{n}</div>
              <a href={`mailto:${e}`} style={{ color: navy, fontSize: 14, fontWeight: 600, wordBreak: 'break-all' }}>{e}</a>
            </div>
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
