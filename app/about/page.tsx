import { loadAboutData } from '@/lib/data';
import { AboutData, Interest, Milestone } from '@/types';
import Link from 'next/link';
import { Cpu, Book, Dumbbell, Heart, Palette, Mountain } from 'lucide-react';

export default async function AboutPage() {
  const data = await loadAboutData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Professional background, interests, and journey
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="card p-8 mb-10 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-3">
            {data.hero.name}
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
            {data.hero.title}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {data.hero.tagline}
          </p>
        </section>

        {/* Who I Am */}
        <section className="card p-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-labelledby="who-heading">
          <h2 id="who-heading" className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-4">
            Who I Am
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {data.about.summary}
          </p>
          
          {/* Values */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">My Values</h3>
            <div className="flex flex-wrap gap-2">
              {data.about.values.map((value, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Unique */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-primary-500">
            <p className="text-gray-700 dark:text-gray-300 italic">
              "{data.about.unique}"
            </p>
          </div>
        </section>

        {/* What I Do */}
        <section className="card p-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }} aria-labelledby="what-heading">
          <h2 id="what-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            What I Do
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Current Focus</h3>
            <p className="text-gray-700 dark:text-gray-300">{data.currentFocus.role}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {data.currentFocus.learning.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {data.currentFocus.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="card p-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }} aria-labelledby="story-heading">
          <h2 id="story-heading" className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-4">
            My Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {data.story.journey}
          </p>

          {/* Timeline */}
          <div className="space-y-6">
            {data.story.milestones.map((milestone: Milestone, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-gray-200 dark:border-gray-700 pl-4 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Code */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }} aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Beyond Code
          </h2>
          <div className="grid gap-4">
            {data.interests.map((interest: Interest, index: number) => {
              const getIcon = () => {
                switch (interest.title) {
                  case 'Creative Coding': return <Cpu className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  case 'Continuous Learning': return <Book className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  case 'Fitness': return <Dumbbell className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  case 'Philanthropy': return <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  case 'Art': return <Palette className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  case 'Nature': return <Mountain className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
                  default: return null;
                }
              };
              return (
                <article
                  key={index}
                  className="card p-4 flex items-center justify-between hover:shadow-soft-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3">
                    {getIcon()}
                    <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-100">
                      {interest.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-1 max-w-md">
                    {interest.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Let's Connect CTA */}
        <section className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {data.lookingFor.collaboration}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {data.lookingFor.opportunities.map((opportunity, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {opportunity}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="btn btn-primary inline-block"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
