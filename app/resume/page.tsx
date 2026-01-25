import { loadResumeData } from '@/lib/data';
import { Experience, Education, Skills, Skill } from '@/types';
import PrintButton from '@/components/PrintButton';
import * as Icons from 'lucide-react';

// Map icon names to Lucide React icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2: Icons.Code2,
  Code: Icons.Code,
  FileCode: Icons.FileCode,
  Palette: Icons.Palette,
  Cpu: Icons.Cpu,
  Terminal: Icons.Terminal,
  Hash: Icons.Hash,
  FileJson: Icons.FileJson,
  Database: Icons.Database,
  GitBranch: Icons.GitBranch,
  Layout: Icons.Layout,
  Globe: Icons.Globe,
};

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {
  const IconComponent = skill.icon ? iconMap[skill.icon] : null;
  
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg border border-primary-200 dark:border-primary-800 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pop-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {IconComponent && (
        <IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
      )}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </div>
  );
}

export default async function ResumePage() {
  const data = await loadResumeData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            Resume
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Software Engineer
            </p>
            <PrintButton />
          </div>
        </div>

        {/* Contact Information */}
        <section className="card p-6 mb-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-4">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
              <a
                href={`mailto:${data.contact.email}`}
                className="text-lg text-primary-600 dark:text-primary-400 hover:underline"
              >
                {data.contact.email}
              </a>
            </div>
            {data.contact.location && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  {data.contact.location}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp: Experience, index: number) => (
              <article
                key={index}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary-600 dark:text-primary-400">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-accent-600 dark:text-accent-400 font-medium">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  {exp.company} — {exp.location}
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  {exp.description.map((item: string, descIndex: number) => (
                    <li key={descIndex} className="text-gray-700 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10" aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.education.map((edu: Education, index: number) => (
              <article key={index} className="card p-6">
                <h3 className="text-xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                  {edu.school}
                </p>
                {edu.gpa && (
                  <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">
                    GPA: {edu.gpa}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Graduated: {edu.graduationDate}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Skills
          </h2>
          <div className="space-y-6">
            {/* Programming Languages */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Programming Languages
              </h3>
              <div className="space-y-3">
                {data.skills.programming.intermediate && (
                  <div>
                    <p className="text-sm font-bold text-accent-600 dark:text-accent-400 mb-2">
                      Intermediate
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.programming.intermediate.map((skill: Skill, i: number) => (
                        <SkillIcon key={i} skill={skill} index={i} />
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.programming.novice && (
                  <div>
                    <p className="text-sm font-bold text-accent-600 dark:text-accent-400 mb-2">
                      Novice
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.programming.novice.map((skill: Skill, i: number) => (
                        <SkillIcon key={i} skill={skill} index={i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.databases.map((skill: Skill, i: number) => (
                  <SkillIcon key={i} skill={skill} index={i} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.tools.map((skill: Skill, i: number) => (
                  <SkillIcon key={i} skill={skill} index={i} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Natural Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.languages.map((skill: Skill, i: number) => (
                  <SkillIcon key={i} skill={skill} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
