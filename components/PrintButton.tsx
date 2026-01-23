'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn btn-primary no-print"
      aria-label="Print resume"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 01-2 2v3a2 2 0 012 2h3a2 2 0 012-2v-3a2 2 0 01-2-2h-1m-7 2a2 2 0 11-4 0 2 2 0 014 0zM9 11V9a2 2 0 012-2H7a2 2 0 00-2v5a2 2 0 002 2h5a2 2 0 002-2V9a2 2 0 00-2H9z"
        />
      </svg>
      Print / Download PDF
    </button>
  );
}
