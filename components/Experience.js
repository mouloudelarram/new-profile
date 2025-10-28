const TIMELINE = [
  { year: 'Sep 2025 – Present', title: 'Software Quality Engineer', org: 'Bpifrance (apprenticeship) — Maisons-Alfort' },
  { year: 'Sep 2025 – Present', title: 'Software Quality Engineer', org: 'Capgemini (BPI France projects) — Issy-les-Moulineaux' },
  { year: 'Sep 2023 – Aug 2025', title: 'Software Engineer', org: 'Abeille Assurances — Bois-Colombes' },
  { year: 'Jun 2024 – Sep 2024', title: 'Machine Learning Engineer', org: 'dpointgroup — Barcelona' },
  { year: 'Apr 2022 – Sep 2022', title: 'Software Engineer', org: 'BIG4COM — Marrakech' },
  { year: 'Jun 2021 – Jul 2021', title: 'Software Developer', org: 'Samabcom — Tangier' }
]

export default function Experience() {
  return (
    <section className="py-12" id="experience">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold">Experience & Education</h3>
        <div className="mt-6 space-y-4">
          {TIMELINE.map(item => (
            <div key={item.title + item.year} className="p-4 border rounded-md bg-white/60 dark:bg-gray-900/40">
              <div className="flex justify-between items-baseline">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm opacity-80">{item.year}</div>
              </div>
              <div className="text-sm opacity-90 mt-1">{item.org}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-semibold">Education</h4>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md bg-white/60 dark:bg-gray-900/40">
              <div className="font-medium">Télécom Paris</div>
              <div className="text-sm opacity-80">Master’s in Enterprise Digital Architecture (Sep 2025 – Nov 2026)</div>
            </div>
            <div className="p-4 border rounded-md bg-white/60 dark:bg-gray-900/40">
              <div className="font-medium">Sup Galilée</div>
              <div className="text-sm opacity-80">Engineering degree, Computer Software Engineering (Sep 2022 – Sep 2025)</div>
            </div>
            <div className="p-4 border rounded-md bg-white/60 dark:bg-gray-900/40">
              <div className="font-medium">Higher School of Technology of Essaouira</div>
              <div className="text-sm opacity-80">Technical University degree, Computer Software Engineering (Sep 2020 – Sep 2022)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
