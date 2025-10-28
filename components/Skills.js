const SKILLS = {
  "Top Skills": ["Architecture", "Finance", "Cloud Computing"],
  "Programming": ["Java", "TypeScript", "Python", "Spring Boot", "Node.js"],
  "Cloud & DevOps": ["AWS", "GCP", "Kubernetes", "CI/CD (Jenkins)"],
  "Data & ML": ["NumPy", "Pandas", "Supervised Learning"],
  "Tools & Quality": ["Jira", "Splunk", "Veracode", "Test Automation"]
}

export default function Skills() {
  return (
    <section className="py-12" id="skills">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="p-4 border rounded-md bg-white/60 dark:bg-gray-900/40">
              <div className="font-semibold mb-2">{category}</div>
              <ul className="list-disc list-inside text-sm opacity-90">
                {items.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
