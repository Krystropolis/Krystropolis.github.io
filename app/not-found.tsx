import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Compass Animation */}
        <div className="mb-4 flex justify-center">
          <Compass />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2 animate-fade-in-up">
          <span className="text-gray-900 dark:text-gray-100">
            404:
          </span>{' '}
          <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Trail Not Found
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Looks like you&#39;ve wandered off the path
        </p>
      </div>
    </div>
  );
}

function Compass() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Compass Outer Ring */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow"
        style={{ animationDuration: '12s' }}
      >
        {/* Outer Circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-gray-300 dark:text-gray-700"
        />
        
        {/* Inner Circle */}
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400 dark:text-gray-600"
        />
        
        {/* Direction Markers */}
        <g className="text-gray-500 dark:text-gray-500">
          {/* N */}
          <text x="100" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">N</text>
          {/* S */}
          <text x="100" y="185" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">S</text>
          {/* E */}
          <text x="170" y="108" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">E</text>
          {/* W */}
          <text x="30" y="108" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">W</text>
        </g>
        
        {/* Compass Needle */}
        <g className="animate-needle-spin" style={{ transformOrigin: '100px 100px' }}>
          {/* North Needle (Primary) */}
          <polygon
            points="100,25 95,100 100,90 105,100"
            fill="#4f46e5"
            className="drop-shadow-md"
          />
          {/* South Needle (Accent) */}
          <polygon
            points="100,175 95,100 100,110 105,100"
            fill="#f43f5e"
            className="drop-shadow-md"
          />
          {/* Center Point */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="#1e1b4b"
            className="drop-shadow-md"
          />
        </g>
      </svg>
    </div>
  );
}
