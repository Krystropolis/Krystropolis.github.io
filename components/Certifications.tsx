import Image from 'next/image';
import { Certificate } from '@/types';
import { formatDate } from '@/lib/data';

interface CertificationsProps {
  certificates: Certificate[];
}

export default function Certifications({ certificates }: CertificationsProps) {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section className="mb-10" aria-labelledby="certifications-heading">
      <h2
        id="certifications-heading"
        className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
      >
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <article
            key={cert.id}
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="w-full mb-4">
              <Image
                src={cert.imageUrl}
                alt={`${cert.name} certificate`}
                width={300}
                height={128}
                className="h-32 w-auto object-contain mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
              {cert.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {cert.issuer}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
              Issued: {formatDate(cert.issueDate)}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Certificate
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
