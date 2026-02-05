'use client';

import { useState, useEffect, useRef } from 'react';
import { loadResumeData, formatDate } from '@/lib/data';
import { Experience, Internship, Education, Skills, Skill } from '@/types';
import ShareButton from '@/components/ShareButton';
import ScrollToTop from '@/components/ScrollToTop';
import { ChevronDown, ChevronUp } from 'lucide-react';

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg border border-primary-200 dark:border-primary-800 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pop-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </div>
  );
}

function CollapsibleSectionHeader({ 
  id, 
  title, 
  isCollapsed, 
  onToggle,
  ref 
}: { 
  id: string; 
  title: string; 
  isCollapsed: boolean; 
  onToggle: () => void;
  ref: (el: HTMLElement | null) => void;
}) {
  return (
    <div 
      className="flex items-center justify-between cursor-pointer group" 
      onClick={onToggle}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isCollapsed}
    >
      <h2 
        id={id} 
        ref={ref}
        className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex-1"
      >
        {title}
      </h2>
      <button
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-print"
        aria-expanded={!isCollapsed}
        aria-controls={id}
      >
        {isCollapsed ? (
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200" />
        ) : (
          <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
}

export default function ResumePage() {
  const [data, setData] = useState<any>(null);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    loadResumeData().then(setData);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Track which section is currently visible (for future use)
          console.log('Section visible:', entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref: HTMLElement | null) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [mounted, sectionRefs, data]);

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev: Record<string, boolean>) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current[sectionId] = el;
    }
  };

  if (!data) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto flex gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Krystal Elliott
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Software Engineer
              </p>
              <ShareButton className="no-print" />
            </div>
          </div>

          {/* Experience */}
          <section className="mb-10" aria-labelledby="experience-heading">
            <CollapsibleSectionHeader
              id="experience-heading"
              title="Experience"
              isCollapsed={collapsedSections['experience-heading']}
              onToggle={() => toggleSection('experience-heading')}
              ref={setSectionRef('experience-heading')}
            />
            <div 
              className={`collapsible-content space-y-6 overflow-hidden transition-all duration-300 ${
                collapsedSections['experience-heading'] ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
              }`}
            >
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
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
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

          {/* Internships */}
          <section className="mb-10" aria-labelledby="internships-heading">
            <CollapsibleSectionHeader
              id="internships-heading"
              title="Internships"
              isCollapsed={collapsedSections['internships-heading']}
              onToggle={() => toggleSection('internships-heading')}
              ref={setSectionRef('internships-heading')}
            />
            <div 
              className={`collapsible-content space-y-6 overflow-hidden transition-all duration-300 ${
                collapsedSections['internships-heading'] ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
              }`}
            >
              {data.internships.map((internship: Internship, index: number) => (
                <article
                  key={index}
                  className="card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-primary-600 dark:text-primary-400">
                      {internship.position}
                    </h3>
                    <span className="text-sm text-accent-600 dark:text-accent-400 font-medium">
                      {formatDate(internship.startDate)} - {formatDate(internship.endDate)}
                    </span>
                  </div>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    {internship.company} — {internship.location}
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    {internship.description.map((item: string, descIndex: number) => (
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
            <h2 
              id="education-heading" 
              ref={setSectionRef('education-heading')}
              className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
            >
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
                    Graduated: {formatDate(edu.graduationDate)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10" aria-labelledby="skills-heading">
            <h2 
              id="skills-heading"
              ref={setSectionRef('skills-heading')}
              className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
            >
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
      <ScrollToTop className="no-print" />
    </div>
  );
}
