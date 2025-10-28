const PROJECTS = [
  {
    title: 'Abeille Assurances — Backend & Frontend',
    role: 'Software Engineer',
    thumb: '/projects/abeille.svg',
    problem: 'Support high-volume insurance platform serving millions of users with secure, scalable features.',
    approach: 'Developed backend services with Spring Boot and responsive frontends with Angular; automated pipelines with Jenkins and applied secure coding practices.',
    outcome: 'Delivered scalable features in CI/CD environment for 3.1M+ users, improved release velocity and reduced vulnerabilities through code reviews and Veracode.',
    stack: ['Java', 'Spring Boot', 'Angular', 'Jenkins', 'Veracode', 'Splunk']
  },
  {
    title: 'Price Prediction Model (dpointgroup)',
    role: 'Machine Learning Engineer',
    thumb: '/projects/price-model.svg',
    problem: 'Improve accuracy of accommodation price predictions.',
    approach: 'Built a supervised regression model, performed preprocessing with NumPy/Pandas and tuned model hyperparameters.',
    outcome: 'Achieved a ~4.2% improvement in prediction accuracy over baseline.',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn']
  },
  {
    title: 'BROKER (BIG4COM)',
    role: 'Full-stack Engineer',
    thumb: '/projects/broker.svg',
    problem: 'Build a mobile/web platform for accommodation rentals and taxi bookings.',
    approach: 'Implemented mobile front-end in Flutter and back-end services with Symfony; integrated secure network communication and delivered production-ready features.',
    outcome: 'Launched a multi-platform product showcased at Innovation City Marrakech.',
    stack: ['Flutter', 'Symfony', 'React Native', 'PHP']
  },
  {
    title: 'Samabcom — E-commerce',
    role: 'Software Developer',
    thumb: '/projects/samabcom.svg',
    problem: 'Create an e-commerce presence and responsive company website.',
    approach: 'Built website with HTML/CSS/JS and an e-commerce back-end using Symfony 4 and SQL database.',
    outcome: 'Delivered a responsive site and full-stack e-commerce application to improve digital presence.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Symfony', 'SQL']
  }
]

export default function Projects() {
  return (
    <section className="py-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold">Projects & Case Studies</h3>
        <div className="mt-6 space-y-6">
          {PROJECTS.map(p => (
            <article key={p.title} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="md:w-48 mb-4 md:mb-0">
                  {p.thumb && <img src={p.thumb} alt={`${p.title} thumbnail`} className="project-thumb" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{p.title}</h4>
                    <span className="text-sm opacity-80">{p.role}</span>
                  </div>
                  <div className="mt-3 grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium">Problem</div>
                      <p className="text-sm opacity-90 mt-1">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Approach</div>
                      <p className="text-sm opacity-90 mt-1">{p.approach}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Outcome & Stack</div>
                      <p className="text-sm opacity-90 mt-1">{p.outcome}</p>
                      <div className="mt-2 text-xs opacity-80">{p.stack.join(' • ')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
