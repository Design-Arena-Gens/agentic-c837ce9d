export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      {/* NAV */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent.cyan shadow-neon" />
          <span className="uppercase tracking-widest text-xs text-white/70">LIGHT GLOBAL</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <a href="#vision" className="hover:text-white">Vision</a>
          <a href="#hub" className="hover:text-white">Operational Hub</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#tech" className="hover:text-white">Tech</a>
          <a href="#reach" className="hover:text-white">Global</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="section pt-12" aria-labelledby="hero-title">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-semibold leading-tight">
              TOMASZ W?ADYS?AW <span className="led-accent">BARCZYK</span>
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-white/80">
              CEO ?WIAT?A | ARCHITEKT STRATEGICZNEJ DYWERSYFIKACJI
            </h2>
            <p className="mt-6 text-white/70 max-w-2xl">
              ?Przewaga konkurencyjna to synergia operacyjna i technologia, kt?ra wyprzedza jutro.?
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#portfolio" className="card px-5 py-3 text-sm hover:shadow-neon transition">Zobacz portfolio</a>
              <a href="#reach" className="px-5 py-3 text-sm border border-white/15 rounded-md hover:bg-white/5 transition">Global reach</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent.cyan/20 to-accent.green/10" />
              <svg viewBox="0 0 400 400" className="absolute inset-0 m-auto h-full w-full opacity-80" role="img" aria-label="Sylwetka Lidera">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#00FF88" />
                  </linearGradient>
                </defs>
                <path d="M200 80c-30 0-50 20-50 50s20 50 50 50 50-20 50-50-20-50-50-50zm0 120c-60 0-100 30-100 80v20h200v-20c0-50-40-80-100-80z" fill="none" stroke="url(#g)" strokeWidth="2.5" />
                <g opacity="0.35">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <circle key={i} cx={20 + i * 18} cy={20 + (i * 7) % 180} r="1.2" fill="#00E5FF" />
                  ))}
                </g>
              </svg>
              <div className="absolute -inset-1 rounded-2xl ring-1 ring-accent.cyan/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CEO & VISION */}
      <section id="vision" className="section" aria-labelledby="vision-title">
        <h3 id="vision-title" className="text-2xl md:text-3xl font-semibold">CEO & Vision</h3>
        <p className="mt-4 text-white/75 max-w-3xl">
          Kierunek: wysokowydajne, skonsolidowane operacje oraz inwestycje w technologie, kt?re tworz?
          mierzaln? warto??. Strategia oparta na faktach, czasie i dyscyplinie egzekucji.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Synergia operacyjna', desc: 'Centralizacja funkcji, standaryzacja proces?w, KPI i transparentno?? danych.' },
            { title: 'Dywersyfikacja strategiczna', desc: 'Portfel wzajemnie uzupe?niaj?cych si? aktyw?w w automotive i agritech.' },
            { title: 'Technologia', desc: 'In?ynieria, automatyzacja, platformy danych ? przewaga kosztowa i czasowa.' },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <div className="text-sm uppercase tracking-widest text-accent.cyan/90">{item.title}</div>
              <div className="mt-2 text-white/80">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h4 className="text-sm uppercase tracking-widest text-white/60">O? czasu</h4>
          <ol className="mt-4 relative border-l border-white/10 pl-6 space-y-6">
            {[
              { year: '2016?2018', fact: 'Konsolidacja operacyjna i budowa centralnego hubu.' },
              { year: '2019?2021', fact: 'Skalowanie portfolio i wdro?enie platform danych.' },
              { year: '2022?2024', fact: 'Ekspansja globalna, automotive i agritech (Growspec).' },
            ].map((f) => (
              <li key={f.year} className="">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-accent.cyan shadow-neon" />
                <div className="text-white/90 font-medium">{f.year}</div>
                <div className="text-white/70">{f.fact}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OPERATIONAL HUB */}
      <section id="hub" className="section" aria-labelledby="hub-title">
        <h3 id="hub-title" className="text-2xl md:text-3xl font-semibold">Operational Hub (Centralizacja)</h3>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            { k: 'Planowanie', v: 'S&OP, MRP, prognozowanie' },
            { k: 'Jako??', v: 'APQP, PPAP, traceability' },
            { k: 'Automatyzacja', v: 'MES, IIoT, robotyka' },
            { k: 'Finanse', v: 'KPI, cash discipline, CAPEX gates' },
          ].map(x => (
            <div key={x.k} className="card p-5">
              <div className="text-white/90 font-medium">{x.k}</div>
              <div className="text-white/70 text-sm mt-1">{x.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC PORTFOLIO */}
      <section id="portfolio" className="section" aria-labelledby="portfolio-title">
        <h3 id="portfolio-title" className="text-2xl md:text-3xl font-semibold">Strategic Portfolio</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Lighting Systems', desc: 'Zaawansowane systemy LED dla automotive i infrastruktury.' },
            { name: 'Controls & Software', desc: 'Sterowanie, sensory, integracja z platformami danych.' },
            { name: 'Sustainability', desc: 'Efektywno?? energetyczna, LCA, circularity.' },
          ].map(p => (
            <article key={p.name} className="card p-6">
              <div className="text-accent.cyan/90 text-sm uppercase tracking-widest">{p.name}</div>
              <p className="mt-2 text-white/80">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TECH INNOVATION */}
      <section id="tech" className="section" aria-labelledby="tech-title">
        <h3 id="tech-title" className="text-2xl md:text-3xl font-semibold">Tech Innovation</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6 border-accent.cyan/30">
            <div className="text-sm uppercase tracking-widest text-accent.cyan/90">Automotive</div>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              <li>Opto-mechanika i termika wysokiej precyzji</li>
              <li>Homologacja, funkcjonalne bezpiecze?stwo, traceability</li>
              <li>Integracja ADAS i komunikacja V2X</li>
            </ul>
          </div>
          <div className="card p-6 border border-green-400/30">
            <div className="text-sm uppercase tracking-widest text-green-400">Agritech ? Growspec</div>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              <li>Spektrogramy wzrostu i receptury ?wiat?a</li>
              <li>Sterowanie mikroklimatem i analityka plon?w</li>
              <li>Efektywno?? energetyczna i ROI w cyklach upraw</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section id="reach" className="section" aria-labelledby="reach-title">
        <h3 id="reach-title" className="text-2xl md:text-3xl font-semibold">Global Reach</h3>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            { r: 'Europa', m: 'Operacje + R&D' },
            { r: 'Ameryka P?n.', m: 'Partnerstwa i klienci OEM' },
            { r: 'Bliski Wsch?d', m: 'Infrastruktura i projekty smart' },
            { r: 'Azja', m: '?a?cuch dostaw i skalowanie' },
          ].map((x) => (
            <div key={x.r} className="card p-5">
              <div className="text-white/90 font-medium">{x.r}</div>
              <div className="text-white/70 text-sm mt-1">{x.m}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 card p-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { k: 'Projekty', v: '120+' },
              { k: 'Rynki', v: '18' },
              { k: 'Dostawy on-time', v: '98.7%' },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-2xl font-semibold led-accent">{s.v}</div>
                <div className="text-white/70 text-sm">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-white/50 text-sm">
        ? {new Date().getFullYear()} LIGHT GLOBAL ? Strategia. Technologia. Wykonanie.
      </footer>
    </main>
  )
}
