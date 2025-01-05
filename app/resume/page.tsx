import Head from 'next/head';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br  py-10 px-6">
      <Head>
        <title>Firas Jerbi - Resume</title>
      </Head>

      <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-8 px-10 text-center">
          <h1 className="text-4xl font-extrabold">Firas Jerbi</h1>
          <p className="text-xl font-medium mt-2">SOFTWARE ENGINEER · FRONT-END DEVELOPER</p>
          <p className="mt-4">
            Schillerstraße 1, 08056 Zwickau, Germany
            <br />
            📞 (+49) 1573 5424557 | ✉️{' '}
            <a
              href="mailto:firas.jerbi.engineer@gmail.com?subject=First%20Contact%20%7C%20Collaboration"
              className="underline text-teal-400"
            >
              firas.jerbi.engineer@gmail.com
            </a>
          </p>
          <p className="mt-4">
            🌐{' '}
            <a
              href="https://fjerbi.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-400"
            >
              Portfolio
            </a>{' '}
            | 💻{' '}
            <a
              href="https://github.com/fjerbi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-400"
            >
              GitHub
            </a>
          </p>
        </header>

        {/* Education Section */}
        <section className="py-8 px-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">🎓 Education</h2>
          {[
            {
              institution: 'Westsächsische Hochschule Zwickau',
              degree: 'MASTER IN MANAGEMENT AND INFORMATION TECHNOLOGY',
              dates: 'Oct. 2023 - Sep. 2025',
            },
            {
              institution: 'ASUE (Erasmus+ Scholarship)',
              degree: 'MASTER IN MANAGEMENT AND INFORMATION TECHNOLOGY',
              dates: 'Oct. 2024 - Feb. 2025',
            },
            {
              institution: 'ESPRIT',
              degree: 'ENGINEERING DEGREE IN SOFTWARE ENGINEERING',
              dates: 'Sep. 2018 - Aug. 2021',
            },
            {
              institution: 'ISET Djerba',
              degree: 'BACHELOR IN COMPUTER SCIENCE',
              dates: 'Sep. 2015 - Jun. 2018',
            },
          ].map((edu, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold text-lg">{edu.institution}</h3>
              <p className="italic">{edu.degree}</p>
              <p>{edu.dates}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="py-8 px-10 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">💼 Professional Experience</h2>
          {[
            {
              company: 'Westsächsische Hochschule Zwickau',
              role: 'Research Assistant',
              dates: 'Oct. 2024 - Dec. 2024',
              tasks: [
                'Organized workshops and two conferences, including one in Tunisia',
                'Project management and achievement of project results',
              ],
            },
            {
              company: 'Treibstoff Evolution GmbH',
              role: 'Front-End Developer',
              dates: 'Jan. 2024 - May 2024',
              tasks: [
                'Developed new features for the iQuest mobile application',
                'Fixed bugs and improved performance',
              ],
            },
            {
              company: 'Gaea21',
              role: 'Full Stack Developer',
              dates: 'Jan. 2021 - Jul 2021',
              tasks: [
                'Development of the mobile and web application of the "Green Index"',
                'Lead the team and project process',
              ],
            },
          ].map((job, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold text-lg">{job.company}</h3>
              <p className="italic">{job.role}</p>
              <p>{job.dates}</p>
              <ul className="list-disc ml-6 text-gray-600">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="py-8 px-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">🚀 Projects</h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>
              <span className="badge bg-teal-100 text-teal-800 px-2 py-1 rounded-md font-medium mr-2">
                2024
              </span>
              Campi, an AI-based app for organizing camping trips
            </li>
            <li>
              <span className="badge bg-teal-100 text-teal-800 px-2 py-1 rounded-md font-medium mr-2">
                2024
              </span>
              DreamTales, an AI-powered mobile app for creating children’s stories
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="py-8 px-10 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">🛠️ Skills</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'PHP',
              'JavaScript',
              'TypeScript',
              'ReactJs',
              'React Native',
              'Laravel',
              'Symfony',
              'MongoDB',
              'Firebase',
              'TailwindCSS',
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center py-6 bg-gray-800 text-white">
          <p>© {new Date().getFullYear()} Firas Jerbi · All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}
