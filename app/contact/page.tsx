import { loadContactData } from '@/lib/data';
import { SocialLink } from '@/types';
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

export default async function ContactPage() {
  const data = await loadContactData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {data.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div className="card p-8 mb-10">
          <ContactForm data={data} />
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {data.socialLinks.map((link: SocialLink) => {
            const getIcon = () => {
              switch (link.icon) {
                case 'github':
                  return <Github className="w-5 h-5" />;
                case 'linkedin':
                  return <Linkedin className="w-5 h-5" />;
                case 'email':
                  return <Mail className="w-5 h-5" />;
                default:
                  return null;
              }
            };
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.icon === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
              >
                {getIcon()}
                <span className="font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
