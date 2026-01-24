'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn btn-primary no-print"
      aria-label="Print resume"
    >
      Print / Download PDF
    </button>
  );
}
