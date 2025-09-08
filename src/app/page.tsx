import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">On-site Support Request</h1>
          <p className="text-xl text-gray-600">Streamline your on-site support process</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to the On-site Support Request System</h2>
            <p className="text-gray-600 mb-6">
              This platform helps you efficiently manage on-site support requests. Submit new requests, 
              track their status, and communicate with support personnel all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="/request/new" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
              >
                Submit New Request
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md text-center transition-colors"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Easy Submission" 
              description="Submit support requests with all necessary details in one simple form."
              icon="📝"
            />
            <FeatureCard 
              title="Real-time Tracking" 
              description="Monitor the status of your requests in real-time through our intuitive dashboard."
              icon="📊"
            />
            <FeatureCard 
              title="Communication" 
              description="Direct communication with support staff for faster resolution."
              icon="💬"
            />
          </div>
        </main>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} OSR System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
