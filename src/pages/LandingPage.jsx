import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function CodeBlock() {
  return (
    <div className="lp-code-block reveal">
      <div className="lp-code-topbar">
        <div className="lp-code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="lp-code-filename">app.ts</span>
      </div>
      <pre className="lp-code-body">
        <div className="code-line">
          <span className="ck">import</span>
          <span className="cp">{' { '}</span>
          <span className="ct">Ferri</span>
          <span className="cp">{' }'}</span>
          <span> </span>
          <span className="ck">from</span>
          <span> </span>
          <span className="cs">'@ferri/sdk'</span>
        </div>
        <div className="code-line code-blank" />
        <div className="code-line">
          <span className="ck">const</span>
          <span> ferri </span>
          <span className="cp">=</span>
          <span> </span>
          <span className="ck">new</span>
          <span> </span>
          <span className="ct">Ferri</span>
          <span className="cp">{'({'}</span>
          <span> db</span>
          <span className="cp">:</span>
          <span> pool </span>
          <span className="cp">{'}'}</span>
          <span className="cp">)</span>
        </div>
        <div className="code-line code-blank" />
        <div className="code-line">
          <span className="ck">const</span>
          <span> allowed </span>
          <span className="cp">=</span>
          <span> </span>
          <span className="ck">await</span>
          <span> ferri</span>
          <span className="cp">.</span>
          <span>check</span>
          <span className="cp">{'({'}</span>
        </div>
        <div className="code-line">
          <span>{'  '}</span>
          <span className="cp">user</span>
          <span className="cp">:</span>
          <span>{'       '}</span>
          <span className="cp">{'{ '}</span>
          <span className="cp">type</span>
          <span className="cp">:</span>
          <span> </span>
          <span className="cs">'user'</span>
          <span className="cp">,</span>
          <span> </span>
          <span className="cp">id</span>
          <span className="cp">:</span>
          <span> userId </span>
          <span className="cp">{'}'}</span>
          <span className="cp">,</span>
        </div>
        <div className="code-line">
          <span>{'  '}</span>
          <span className="cp">permission</span>
          <span className="cp">:</span>
          <span>{'  '}</span>
          <span className="cs">'can_edit'</span>
          <span className="cp">,</span>
        </div>
        <div className="code-line">
          <span>{'  '}</span>
          <span className="cp">resource</span>
          <span className="cp">:</span>
          <span>{'    '}</span>
          <span className="cp">{'{ '}</span>
          <span className="cp">type</span>
          <span className="cp">:</span>
          <span> </span>
          <span className="cs">'document'</span>
          <span className="cp">,</span>
          <span> </span>
          <span className="cp">id</span>
          <span className="cp">:</span>
          <span> docId </span>
          <span className="cp">{'}'}</span>
          <span className="cp">,</span>
        </div>
        <div className="code-line">
          <span className="cp">{'}'}</span>
          <span className="cp">)</span>
        </div>
        <div className="code-line code-blank" />
        <div className="code-line">
          <span className="cc">{'// allowed: true | latency: 0.4ms | event: evt_a8f3...'}</span>
        </div>
      </pre>
    </div>
  )
}

function SchemaBlock() {
  return (
    <div className="lp-code-block lp-schema-block">
      <div className="lp-code-topbar">
        <div className="lp-code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="lp-code-filename">schema.fga</span>
      </div>
      <pre className="lp-code-body">
        <div className="code-line"><span className="ck">model</span></div>
        <div className="code-line"><span>{'  '}</span><span className="cp">schema 1.1</span></div>
        <div className="code-line code-blank" />
        <div className="code-line"><span className="ck">type</span><span> </span><span className="ct">user</span></div>
        <div className="code-line code-blank" />
        <div className="code-line"><span className="ck">type</span><span> </span><span className="ct">organization</span></div>
        <div className="code-line"><span>{'  '}</span><span className="cp">relations</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">owner</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">admin</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span><span> </span><span className="cs">or</span><span> </span><span className="ct">owner</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">member</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span><span> </span><span className="cs">or</span><span> </span><span className="ct">admin</span></div>
        <div className="code-line code-blank" />
        <div className="code-line"><span className="ck">type</span><span> </span><span className="ct">repository</span></div>
        <div className="code-line"><span>{'  '}</span><span className="cp">relations</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">org</span><span className="cp">:</span><span> </span><span className="ct">{'[organization]'}</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">owner</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">admin</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span><span> </span><span className="cs">or</span><span> </span><span className="ct">owner</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">can_read</span><span className="cp">:</span><span> </span><span className="ct">member</span><span> </span><span className="cs">from</span><span> </span><span className="ct">org</span><span> </span><span className="cs">or</span><span> </span><span className="ct">admin</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">can_write</span><span className="cp">:</span><span> </span><span className="ct">admin</span></div>
        <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">can_delete</span><span className="cp">:</span><span> </span><span className="ct">owner</span></div>
      </pre>
    </div>
  )
}

const BELT_ITEMS = ['Supabase', 'Neon', 'AWS RDS', 'Railway', 'Render', 'Fly.io', 'DigitalOcean', 'Any Postgres']

function WorksBelt() {
  return (
    <div className="lp-works-with">
      <p className="lp-works-label">Works with your Postgres</p>
      <div className="lp-belt" aria-hidden="true">
        <div className="lp-belt-track">
          {[...BELT_ITEMS, ...BELT_ITEMS].map((name, i) => (
            <span key={i} className="lp-belt-item">{name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  useReveal()

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xreanybq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // no-op
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="landing-page">

      {/* ── NAV ── */}
      <nav className="lp-nav">
        <div className="container lp-nav-inner">
          <span className="lp-nav-wordmark">ferri</span>
          <a href="#contact" className="lp-nav-cta">Talk to us</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-glow" aria-hidden="true" />
        <div className="container lp-hero-inner">
          <div className="lp-hero-label reveal">
            <span className="lp-hero-dot" aria-hidden="true" />
            Authorization infrastructure
          </div>
          <h1 className="lp-hero-headline reveal">
            Authorization that lives<br />in your database
          </h1>
          <p className="lp-hero-subhead reveal">
            Ferri compiles fine-grained permissions into SQL functions that run inside your existing Postgres. No separate service. No data sync. Every check logged.
          </p>
          <div className="lp-hero-actions reveal">
            <a href="#contact" className="lp-btn-primary">Talk to us</a>
            <Link to="/demo" className="lp-btn-ghost">See the demo →</Link>
          </div>
          <CodeBlock />
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="lp-section lp-difference">
        <div className="container">
          <div className="lp-section-label reveal">The difference</div>
          <div className="lp-diff-grid">
            <div className="lp-diff-card lp-diff-old reveal">
              <div className="lp-diff-card-header">
                <span className="lp-diff-dot lp-diff-dot-red" />
                <span className="lp-diff-card-title">Everyone else</span>
              </div>
              <ul className="lp-diff-list">
                {[
                  'Deploy and maintain a separate authorization service',
                  'Sync your data to an external tuple store',
                  'Network hop on every permission check',
                  'Stale permissions when sync lags',
                  'Another service to monitor at 2am',
                ].map((item) => (
                  <li key={item}>
                    <span className="lp-diff-prefix lp-diff-cross">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lp-diff-card lp-diff-ferri reveal">
              <div className="lp-diff-card-header">
                <span className="lp-diff-dot lp-diff-dot-green" />
                <span className="lp-diff-card-title">Ferri</span>
              </div>
              <ul className="lp-diff-list">
                {[
                  'SQL functions inside your existing Postgres',
                  'Queries your tables directly — nothing to sync',
                  'Sub-millisecond checks, no network overhead',
                  'Always consistent with your live data',
                  'Every check logged from day one',
                ].map((item) => (
                  <li key={item}>
                    <span className="lp-diff-prefix lp-diff-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOT BUILD IT YOURSELF? ── */}
      <section className="lp-section lp-diy">
        <div className="container">
          <div className="lp-section-label reveal">Why not build it yourself?</div>
          <div className="lp-diy-grid">
            <div className="lp-diy-left reveal">
              <h2 className="lp-diy-headline">You can. Most teams do.</h2>
              <p className="lp-diy-para">
                Then the engineer who built it leaves. The logic is scattered across three services. Nobody can answer a compliance question without searching the codebase.
              </p>
              <p className="lp-diy-para">
                Ferri is built on Melange, an open-source authorization compiler that generates specialised PostgreSQL functions from a declarative schema. Your permission model is version-controlled, readable, and survives team changes.
              </p>
              <a
                href="https://melange.sh/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="lp-diy-link"
              >
                Learn more about Melange →
              </a>
            </div>
            <div className="lp-diy-right reveal">
              <SchemaBlock />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="lp-section lp-personas">
        <div className="lp-personas-glow" aria-hidden="true" />
        <div className="container">
          <div className="lp-section-label reveal">Who this is for</div>
          <div className="lp-personas-grid">
            {[
              {
                label: 'Engineering leads',
                body: "You know the auth code is a mess. You inherited it, or you wrote it three years ago and it grew. Rewriting it means a quarter of eng time and a project nobody wants to sponsor. You need something that slots in without a rewrite.",
              },
              {
                label: 'CTOs',
                body: "The SOC 2 auditor is going to ask who has access to what, and right now the honest answer involves grep and a prayer. You need an audit trail that exists before the audit, not one you build in a panic the week before.",
              },
              {
                label: 'Heads of sales and CISOs',
                body: "Your biggest prospect just sent a security questionnaire asking you to describe your access control model. You need a real answer, not a paragraph your engineer wrote in 10 minutes that you hope nobody follows up on.",
              },
            ].map((persona) => (
              <div className="lp-persona-block reveal" key={persona.label}>
                <div className="lp-persona-label">{persona.label}</div>
                <p className="lp-persona-body">{persona.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-section lp-how">
        <div className="container">
          <div className="lp-section-label reveal">How it works</div>
          <div className="lp-how-grid">

            <div className="lp-how-step reveal">
              <div className="lp-how-num">01</div>
              <div className="lp-how-title">Define your model</div>
              <p className="lp-how-desc">Write your permission rules in a schema file. Version-controlled, readable, declarative.</p>
              <pre className="lp-how-snippet">
                <div className="code-line"><span className="ck">model</span></div>
                <div className="code-line"><span>{'  '}</span><span className="cp">schema 1.1</span></div>
                <div className="code-line code-blank" />
                <div className="code-line"><span className="ck">type</span><span> </span><span className="ct">document</span></div>
                <div className="code-line"><span>{'  '}</span><span className="cp">relations</span></div>
                <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">owner</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span></div>
                <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">editor</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span><span> </span><span className="cs">or</span><span> </span><span className="ct">owner</span></div>
                <div className="code-line"><span>{'    '}</span><span className="cp">define</span><span> </span><span className="ct">viewer</span><span className="cp">:</span><span> </span><span className="ct">{'[user]'}</span><span> </span><span className="cs">or</span><span> </span><span className="ct">editor</span></div>
              </pre>
            </div>

            <div className="lp-how-step reveal">
              <div className="lp-how-num">02</div>
              <div className="lp-how-title">Compile to Postgres</div>
              <p className="lp-how-desc">Run one command. Ferri generates optimised SQL functions, one per relation. Nothing new to deploy.</p>
              <pre className="lp-how-snippet">
                <div className="code-line"><span className="ct">$ melange migrate --database $DATABASE_URL</span></div>
                <div className="code-line"><span className="cc">Compiling schema... 3 types, 6 relations</span></div>
                <div className="code-line"><span className="cc">Installing functions... done</span></div>
              </pre>
            </div>

            <div className="lp-how-step reveal">
              <div className="lp-how-num">03</div>
              <div className="lp-how-title">Check and log</div>
              <p className="lp-how-desc">Call check() from any language. Sub-millisecond. Transaction-aware. Every decision recorded automatically.</p>
              <pre className="lp-how-snippet">
                <div className="code-line"><span className="ck">SELECT</span><span> check_permission(</span></div>
                <div className="code-line"><span>{'  '}</span><span className="cs">'user'</span><span>, </span><span className="cs">'alice'</span><span>,</span></div>
                <div className="code-line"><span>{'  '}</span><span className="cs">'can_read'</span><span>,</span></div>
                <div className="code-line"><span>{'  '}</span><span className="cs">'document'</span><span>, </span><span className="cs">'42'</span></div>
                <div className="code-line"><span>);</span></div>
                <div className="code-line"><span className="cc">-- returns: 1 (allowed)</span></div>
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* ── BUILT FOR COMPLIANCE ── */}
      <section className="lp-section lp-compliance">
        <div className="container">
          <div className="lp-section-label reveal">Built for compliance</div>
          <h2 className="lp-section-headline reveal">
            Authorization your auditor will understand.
          </h2>
          <div className="lp-compliance-list">
            {[
              {
                title: 'Audit logging',
                body: 'Every permission check, grant, and denial logged automatically. Structured, queryable, retained.',
              },
              {
                title: 'SOC 2 ready',
                body: 'Access control evidence generated without engineering involvement. Stop scrambling when the audit window opens.',
              },
              {
                title: 'Access reports',
                body: 'Who has access to what, right now. Exportable, timestamped, readable by anyone. No SQL required.',
              },
            ].map((item) => (
              <div className="lp-compliance-row reveal" key={item.title}>
                <div className="lp-compliance-title">{item.title}</div>
                <p className="lp-compliance-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POWERED BY MELANGE ── */}
      <section className="lp-section lp-melange">
        <div className="container">
          <div className="lp-melange-card reveal">
            <div className="lp-melange-left">
              <h3 className="lp-melange-heading">Powered by Melange</h3>
              <p className="lp-melange-body">
                Ferri is built on Melange, an open-source OpenFGA-to-SQL compiler that generates PL/pgSQL functions from authorization schemas. MIT licensed. Schema 1.1 compliant. Actively maintained.
              </p>
              <div className="lp-melange-links">
                <a
                  href="https://github.com/pthm/melange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-melange-link lp-melange-link-accent"
                >
                  View on GitHub →
                </a>
                <a
                  href="https://melange.sh/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-melange-link lp-melange-link-muted"
                >
                  Read the docs →
                </a>
              </div>
            </div>
            <div className="lp-melange-right">
              {[
                { label: 'GitHub stars', value: '60+' },
                { label: 'Latest release', value: 'v0.7.4' },
                { label: 'License', value: 'MIT' },
              ].map((stat) => (
                <div className="lp-melange-stat" key={stat.label}>
                  <div className="lp-melange-stat-value">{stat.value}</div>
                  <div className="lp-melange-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKS WITH (animated belt) ── */}
      <WorksBelt />

      {/* ── CTA ── */}
      <section className="lp-section lp-contact" id="contact">
        <div className="lp-contact-glow" aria-hidden="true" />
        <div className="container lp-contact-inner">
          <h2 className="lp-contact-headline reveal">
            We're looking for design partners.
          </h2>
          <p className="lp-contact-body reveal">
            We're working with a small number of teams before public launch. If you run Postgres and your permission model is holding you back, we want to talk.
          </p>
          {submitted ? (
            <div className="lp-contact-success">We'll be in touch.</div>
          ) : (
            <form className="lp-contact-form reveal" onSubmit={handleSubmit}>
              <input
                type="email"
                className="lp-contact-input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button
                type="submit"
                className="lp-btn-primary"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Get in touch'}
              </button>
            </form>
          )}
          <p className="lp-contact-note reveal">No spam. We'll reach out personally.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="container lp-footer-inner">
          <span className="lp-footer-wordmark">ferri</span>
          <span>© 2026 Ferri</span>
        </div>
      </footer>

    </div>
  )
}
