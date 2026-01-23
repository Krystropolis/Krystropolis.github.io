import { loadAboutData } from '@/lib/data';
import { Interest } from '@/types';

export default async function AboutPage() {
  const data = await loadAboutData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Interests, hobbies and habits
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="card p-6 mb-10" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            Get to Know Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.intro}
          </p>
        </section>

        {/* Interests Grid */}
        <section className="mb-10" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            My Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.interests.map((interest: Interest, index: number) => (
              <article
                key={index}
                className="card p-6 flex flex-col hover:shadow-soft-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {interest.title}
                </h3>

                {/* Interest Image */}
                {interest.image && (
                  <div className="mb-4">
                    <img
                      src={interest.image}
                      alt={interest.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}

                {/* Interest Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="card p-8 text-center hover:shadow-soft-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm always interested in hearing about new opportunities, collaborations, or just having a great conversation about technology and development.
          </p>
          <a
            href="mailto:e.krystal@gmail.com"
            className="btn btn-primary inline-block"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
