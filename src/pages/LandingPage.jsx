import { useState, useEffect } from 'react'
import './LandingPage.css'
import ferriLogo from '../assets/brand/ferri.png'
import logoSupabase    from '../assets/logos/supabase.png'
import logoNeon        from '../assets/logos/neon.png'
import logoAwsRds      from '../assets/logos/aws-rds.png'
import logoRender      from '../assets/logos/render.jpeg'
import logoFlyio       from '../assets/logos/flyio.png'
import logoDigitalOcean from '../assets/logos/digitalocean.gif'
import logoPostgresql  from '../assets/logos/postgresql.jpeg'

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

function QueriesBlock() {
  return (
    <div className="lp-code-block lp-fga-code reveal">
      <div className="lp-code-topbar">
        <div className="lp-code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="lp-code-filename">queries.sql</span>
      </div>
      <pre className="lp-code-body">
        <div className="code-line"><span className="cc">-- Check: is this allowed?</span></div>
        <div className="code-line">
          <span className="ck">SELECT</span><span> check_permission(</span>
          <span className="cs">'user'</span><span>, </span>
          <span className="cs">'alice'</span><span>, </span>
          <span className="cs">'can_read'</span><span>, </span>
          <span className="cs">'document'</span><span>, </span>
          <span className="cs">'42'</span><span>);</span>
        </div>
        <div className="code-line"><span className="cc">-- returns 1</span></div>
        <div className="code-line code-blank" />
        <div className="code-line"><span className="cc">-- List: what can they access?</span></div>
        <div className="code-line"><span className="ck">SELECT</span><span> d.*</span></div>
        <div className="code-line"><span className="ck">FROM</span><span> documents d</span></div>
        <div className="code-line">
          <span className="ck">JOIN</span><span> list_accessible_objects(</span>
          <span className="cs">'user'</span><span>, </span>
          <span className="cs">'alice'</span><span>, </span>
          <span className="cs">'can_read'</span><span>, </span>
          <span className="cs">'document'</span><span>, </span>
          <span className="ck">NULL</span><span>, </span>
          <span className="ck">NULL</span><span>) a</span>
        </div>
        <div className="code-line">
          <span>{'  '}</span><span className="ck">ON</span><span> d.id::text = a.object_id;</span>
        </div>
      </pre>
    </div>
  )
}

const PERSONAS = [
  {
    label: 'Engineering leads',
    body: 'Your authorization logic has outgrown role checks scattered across the codebase. Ferri runs in shadow mode beside your existing logic, so you migrate one resource type at a time with no rewrite and no cutover.',
  },
  {
    label: 'CTOs and security leads',
    body: 'A SOC 2 audit requires evidence of who can access what, and when that changed. Ferri logs every check as a structured event from day one and exports access reports without engineering involvement.',
  },
  {
    label: 'Commercial and CISO stakeholders',
    body: "Enterprise security reviews ask you to describe your access control model. Ferri's model is a versioned schema, enforced in your database, and provable with a single export.",
  },
]

const BELT_LOGOS = [
  { name: 'Supabase',     src: logoSupabase     },
  { name: 'Neon',         src: logoNeon         },
  { name: 'AWS RDS',      src: logoAwsRds       },
  { name: 'Render',       src: logoRender       },
  { name: 'Fly.io',       src: logoFlyio        },
  { name: 'DigitalOcean', src: logoDigitalOcean },
  { name: 'PostgreSQL',   src: logoPostgresql   },
]

function WorksBelt() {
  return (
    <div className="lp-works-with">
      <p className="lp-works-label">Works with your Postgres</p>
      <div className="lp-belt" aria-hidden="true">
        <div className="lp-belt-track">
          {[...BELT_LOGOS, ...BELT_LOGOS].map((logo, i) => (
            <span key={i} className="lp-belt-item">
              <img
                src={logo.src}
                alt={logo.name}
                className="lp-belt-logo"
              />
            </span>
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
          <a href="#" className="lp-nav-brand" aria-label="Ferri">
            <img src={ferriLogo} alt="" className="lp-nav-logo" />
            <span className="lp-nav-wordmark">ferri</span>
          </a>
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
            Authorization that runs<br />inside your database
          </h1>
          <p className="lp-hero-subhead reveal">
            Ferri compiles a relationship-based authorization model into PostgreSQL functions that execute directly in your existing database. No separate authorization service. No tuple store to sync. Every check recorded as a structured event.
          </p>
          <div className="lp-hero-actions reveal">
            <a href="#contact" className="lp-btn-primary">Talk to us</a>
            <a href="https://demo.ferri.sh" className="lp-btn-ghost">See the demo →</a>
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
                <span className="lp-diff-card-title">The conventional approach</span>
              </div>
              <ul className="lp-diff-list">
                {[
                  'A dedicated authorization service runs alongside your application',
                  'Relationship data is replicated into an external tuple store',
                  'Every permission check is a network round-trip away from your data',
                  'Replication lag means checks can evaluate against stale state',
                  'Another service to deploy, scale, and keep highly available',
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
                  'Permission logic compiled to SQL functions in your existing Postgres',
                  'Checks read your tables directly, with no tuple store and nothing to replicate',
                  'Single in-database query, no network hop',
                  'Transaction-aware, so checks are always consistent with your live data',
                  'Every check logged as a structured event from the first deploy',
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
              <h2 className="lp-diy-headline">The engine is open source. The operational surface is the work.</h2>
              <p className="lp-diy-para">
                Melange, the compiler that powers Ferri, is MIT licensed and available today. It compiles an OpenFGA-compatible schema into PostgreSQL functions.
              </p>
              <p className="lp-diy-para">
                What it does not give you is the layer a production deployment needs. An immutable, queryable audit trail. Access reports an auditor can read without involving engineering. Visibility for stakeholders who do not write SQL. Continuity when the person who modelled your permissions moves on. That layer is Ferri.
              </p>
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
            {PERSONAS.map((persona) => (
              <div className="lp-persona reveal" key={persona.label}>
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

            <div className="lp-how-step reveal">
              <div className="lp-how-num">04</div>
              <div className="lp-how-title">Hand off the maintenance</div>
              <p className="lp-how-desc">Ferri manages the audit trail, generates compliance evidence, and keeps permissions visible to your whole team. You stop thinking about authorization.</p>
              <pre className="lp-how-snippet">
                <div className="code-line"><span className="ct">$ ferri status</span></div>
                <div className="code-line"><span className="cc">{'Schema:     3 types, 8 relations'}</span></div>
                <div className="code-line"><span className="cc">{'Checks:     14,203 today'}</span></div>
                <div className="code-line"><span className="cc">{'Audit log:  active (365d retention)'}</span></div>
                <div className="code-line"><span className="cc">{'Status:     healthy'}</span></div>
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTH QUESTIONS FGA HAS TO ANSWER ── */}
      <section className="lp-section lp-fga">
        <div className="container">
          <h2 className="lp-section-headline reveal">Both questions FGA has to answer</h2>
          <p className="lp-fga-body reveal">
            Fine-grained authorization comes down to two queries. The check asks whether a user can perform an action on a resource. The list asks which resources a user can access. Ferri answers both as in-database functions.
          </p>
          <QueriesBlock />
        </div>
      </section>

      {/* ── WORKS WITH YOUR POSTGRES ── */}
      <section className="lp-section lp-postgres">
        <div className="container">
          <div className="lp-section-label reveal">Works with your Postgres</div>
          <h2 className="lp-section-headline reveal">Works with your Postgres, hosted or self-managed</h2>
          <p className="lp-postgres-intro reveal">
            Ferri runs anywhere Postgres runs. A database you manage yourself or a hosted platform such as Supabase. Because the compiled functions live in your database, there is no provider to integrate against and no data leaving your environment.
          </p>

          <h3 className="lp-postgres-subhead reveal">Where RLS and RBAC stop</h3>
          <p className="lp-postgres-para reveal">
            If you build on Supabase, you already have two authorization tools. Role-Based Access Control assigns coarse roles such as anon and authenticated. Row Level Security attaches SQL policies to tables, which Postgres applies as a filter on every query. Both are excellent inside their range, and Ferri is designed to sit on top of them rather than replace them.
          </p>
          <p className="lp-postgres-para reveal">
            The range runs out when access depends on relationships rather than ownership. RLS answers {'"this user owns this row"'} cleanly with user_id = auth.uid(). It answers {'"this user can read this document because they belong to a team that is assigned to the project the document lives in"'} only with nested subqueries that grow harder to read, index, and trust as the graph deepens. That relationship traversal is what the Zanzibar model, OpenFGA, and Ferri exist to express.
          </p>
          <p className="lp-postgres-para reveal">
            Supabase{"'"}s own guidance points the same way. Its documentation notes that RLS policies{' '}
            <a
              href="https://supabase.com/docs/guides/api/securing-your-api"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-postgres-link"
            >
              may not always be adequate or sufficient
            </a>
            {' '}on their own, and common practice is to keep RLS for row ownership while handling complex authorization in a dedicated layer.
          </p>

          <div className="lp-callout reveal">
            RLS keeps enforcing row ownership at the table. Ferri resolves the relationship graph through compiled functions in the same database. One Postgres connection, two complementary jobs.
          </div>

          <h3 className="lp-postgres-subhead reveal">Adopting Ferri</h3>
          <ol className="lp-postgres-steps reveal">
            <li>
              <span className="lp-postgres-step-title">Define your model.</span> Write an OpenFGA-compatible schema describing your types and relations. It lives in your repository under version control.
            </li>
            <li>
              <span className="lp-postgres-step-title">Compile into your database.</span> Run melange migrate against your connection string. Ferri installs one SQL function per relation. Nothing new to deploy.
            </li>
            <li>
              <span className="lp-postgres-step-title">Run in shadow mode.</span> Call Ferri alongside your existing checks and log the comparison. Your current logic stays in control until you choose to switch.
            </li>
            <li>
              <span className="lp-postgres-step-title">Migrate one resource type at a time.</span> Move resources across as you gain confidence. RLS and your existing checks keep running on everything you have not moved.
            </li>
          </ol>
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
                body: 'Every permission check, every grant, every denial — logged as a structured event with timestamp, user, resource, and decision. Queryable in seconds. Retained for 365 days by default. When your auditor asks who had access to a specific resource on a specific date, you have the answer before they finish the question.',
              },
              {
                title: 'SOC 2 ready',
                body: 'Access control evidence is one of the most painful parts of a SOC 2 audit. Ferri generates the reports automatically — who has access to what, when permissions changed, and a full history of denied access attempts. No engineering time. No last-minute scramble.',
              },
              {
                title: 'Access reports',
                body: 'Exportable, timestamped, human-readable. Filter by user, resource, team, or time range. Hand it to a CISO, an auditor, or a non-technical stakeholder. They can read it without asking an engineer to translate.',
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
                { label: 'Latest release', value: 'v0.8.2' },
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
