import Head from 'next/head'

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-br px-6 py-10'>
      <Head>
        <title>Firas Jerbi - Resume</title>
      </Head>

      <main className='mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl'>
        {/* Header Section */}
        <header className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-10 py-8 text-center text-white'>
          <h1 className='text-4xl font-extrabold'>Firas Jerbi</h1>
          <p className='mt-2 text-xl font-medium'>
            SOFTWARE ENGINEER · FRONT-END DEVELOPER
          </p>
          <p className='mt-4'>
            Schillerstraße 1, 08056 Zwickau, Germany
            <br />
            📞 (+49) 1573 5424557 | ✉️{' '}
            <a
              href='mailto:firas.jerbi.engineer@gmail.com?subject=First%20Contact%20%7C%20Collaboration'
              className='text-teal-400 underline'
            >
              firas.jerbi.engineer@gmail.com
            </a>
          </p>
          <p className='mt-4'>
            🌐{' '}
            <a
              href='https://fjerbi.github.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-400 underline'
            >
              Portfolio
            </a>{' '}
            | 💻{' '}
            <a
              href='https://github.com/fjerbi'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-400 underline'
            >
              GitHub
            </a>
          </p>
        </header>

        {/* Education Section */}
        <section className='px-10 py-8'>
          <h2 className='mb-6 text-2xl font-bold text-gray-700'>
            🎓 Education
          </h2>
          {[
            {
              institution: 'Westsächsische Hochschule Zwickau',
              degree: 'MASTER IN MANAGEMENT AND INFORMATION TECHNOLOGY',
              dates: 'Oct. 2023 - Sep. 2025'
            },
            {
              institution: 'ASUE (Erasmus+ Scholarship)',
              degree: 'MASTER IN MANAGEMENT AND INFORMATION TECHNOLOGY',
              dates: 'Oct. 2024 - Feb. 2025'
            },
            {
              institution: 'ESPRIT',
              degree: 'ENGINEERING DEGREE IN SOFTWARE ENGINEERING',
              dates: 'Sep. 2018 - Aug. 2021'
            },
            {
              institution: 'ISET Djerba',
              degree: 'BACHELOR IN COMPUTER SCIENCE',
              dates: 'Sep. 2015 - Jun. 2018'
            }
          ].map((edu, idx) => (
            <div key={idx} className='mb-6'>
              <h3 className='text-lg font-semibold'>{edu.institution}</h3>
              <p className='italic'>{edu.degree}</p>
              <p>{edu.dates}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className='bg-gray-50 px-10 py-8'>
          <h2 className='mb-6 text-2xl font-bold text-gray-700'>
            💼 Professional Experience
          </h2>
          {[
            {
              company: 'Westsächsische Hochschule Zwickau',
              role: 'Research Assistant',
              dates: 'Oct. 2024 - Dec. 2024',
              tasks: [
                'Organized workshops and two conferences, including one in Tunisia',
                'Project management and achievement of project results'
              ]
            },
            {
              company: 'Treibstoff Evolution GmbH',
              role: 'Front-End Developer',
              dates: 'Jan. 2024 - May 2024',
              tasks: [
                'Developed new features for the iQuest mobile application',
                'Fixed bugs and improved performance'
              ]
            },
            {
              company: 'Gaea21',
              role: 'Full Stack Developer',
              dates: 'Jan. 2021 - Jul 2021',
              tasks: [
                'Development of the mobile and web application of the "Green Index"',
                'Lead the team and project process'
              ]
            }
          ].map((job, idx) => (
            <div key={idx} className='mb-6'>
              <h3 className='text-lg font-semibold'>{job.company}</h3>
              <p className='italic'>{job.role}</p>
              <p>{job.dates}</p>
              <ul className='ml-6 list-disc text-gray-600'>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className='px-10 py-8'>
          <h2 className='mb-6 text-2xl font-bold text-gray-700'>🚀 Projects</h2>
          <ul className='ml-6 list-disc text-gray-600'>
            <li>
              <span className='badge mr-2 rounded-md bg-teal-100 px-2 py-1 font-medium text-teal-800'>
                2024
              </span>
              Campi, an AI-based app for organizing camping trips
            </li>
            <li>
              <span className='badge mr-2 rounded-md bg-teal-100 px-2 py-1 font-medium text-teal-800'>
                2024
              </span>
              DreamTales, an AI-powered mobile app for creating children’s
              stories
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        {/* Skills Section */}
        <section className='bg-gray-50 px-10 py-8'>
          <h2 className='mb-6 text-2xl font-bold text-gray-700'>🛠️ Skills</h2>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Programmiersprachen
            </h3>
            <p className='text-gray-600'>PHP, JavaScript, TypeScript</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Frameworks & Libraries
            </h3>
            <p className='text-gray-600'>
              Laravel, Symfony, CodeIgniter, ReactJs, React Native, Angular,
              Ionic, NodeJs, Redux, GraphQL, LeafletJs, MapBox
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Web‑Technologien
            </h3>
            <p className='text-gray-600'>HTML, CSS, TailwindCSS</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800'>Datenbanken</h3>
            <p className='text-gray-600'>
              MongoDB, Firebase, MySQL, PostgreSQL
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800'>Tools</h3>
            <p className='text-gray-600'>Git, Docker, Jira</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Sprachen</h3>
            <p className='text-gray-600'>
              French: C2, English: C1, German: C1, Arabic:
              Mother Language
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className='bg-gray-800 py-6 text-center text-white'>
          <p>© {new Date().getFullYear()} Firas Jerbi · All Rights Reserved</p>
        </footer>
      </main>
    </div>
  )
}
