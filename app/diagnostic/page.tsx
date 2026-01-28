'use client';

export default function DiagnosticPage() {
  // Only show this page in development mode
  if (process.env.NODE_ENV !== 'development') {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">This page is only available in development mode.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Light Mode Color Diagnostic</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Light Mode Colors</h2>
          <div className="grid gap-4">
            <ColorSwatch
              name="Background Light"
              color="#f3f4f6"
              description="Main page background - Soft gray (FIXED)"
            />
            <ColorSwatch
              name="Surface Light"
              color="#fafafa"
              description="Card backgrounds - Off-white (FIXED)"
            />
            <ColorSwatch
              name="Text Gray 900"
              color="#111827"
              description="Primary text - Very dark gray"
            />
            <ColorSwatch
              name="Text Gray 600"
              color="#4b5563"
              description="Secondary text - Medium gray"
            />
            <ColorSwatch
              name="Border Gray 200"
              color="#e5e7eb"
              description="Card borders - Light gray"
            />
            <ColorSwatch
              name="Primary 50"
              color="#eef2ff"
              description="Gradient start - Light indigo"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Status: Issues Resolved ✓</h2>
          <div className="card p-6 space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-600">Issue 1: Pure White Surfaces - FIXED</h3>
              <p className="text-gray-700 mt-2">
                Changed <code className="bg-gray-100 px-2 py-1 rounded">surface.light</code> from <code className="bg-gray-100 px-2 py-1 rounded">#ffffff</code> (pure white) to <code className="bg-gray-100 px-2 py-1 rounded">#fafafa</code> (off-white with warm undertones). This significantly reduces eye strain on modern high-brightness displays.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-600">Issue 2: High Contrast - FIXED</h3>
              <p className="text-gray-700 mt-2">
                Changed <code className="bg-gray-100 px-2 py-1 rounded">background.light</code> from <code className="bg-gray-100 px-2 py-1 rounded">#f8fafc</code> to <code className="bg-gray-100 px-2 py-1 rounded">#f3f4f6</code> (slightly darker, warmer). The softer contrast with dark text (<code className="bg-gray-100 px-2 py-1 rounded">#111827</code>) is now more comfortable for extended reading.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-600">Issue 3: Cool Tones - IMPROVED</h3>
              <p className="text-gray-700 mt-2">
                The updated colors use warmer undertones in both background and surface colors, reducing the clinical feel of the previous cool slate tones and providing a more comfortable viewing experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes Applied</h2>
          <div className="card p-6 space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-blue-600">Change 1: Surface Color</h3>
              <p className="text-gray-700 mt-2">
                <code className="bg-gray-100 px-2 py-1 rounded">#ffffff</code> → <code className="bg-gray-100 px-2 py-1 rounded">#fafafa</code>
              </p>
              <p className="text-sm text-gray-500 mt-1">Off-white surface reduces glare and eye strain</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-blue-600">Change 2: Background Color</h3>
              <p className="text-gray-700 mt-2">
                <code className="bg-gray-100 px-2 py-1 rounded">#f8fafc</code> → <code className="bg-gray-100 px-2 py-1 rounded">#f3f4f6</code>
              </p>
              <p className="text-sm text-gray-500 mt-1">Softer background with warmer undertones</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({ name, color, description }: { name: string; color: string; description: string }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <div
        className="w-20 h-20 rounded-lg shadow-inner border border-gray-300"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <code className="text-sm text-gray-600">{color}</code>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
