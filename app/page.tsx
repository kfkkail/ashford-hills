import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Ashford Hills</h1>
          <p className="text-xl mb-8">A beautiful residential neighborhood in Granger, Indiana</p>
          <Link
            href="/about"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More About Our Neighborhood
          </Link>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Ashford Hills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">32 Beautiful Homes</h3>
              <p className="text-gray-600">
                Our neighborhood consists of 32 unique homes developed in the early to mid 1990s, 
                each with mature trees and beautiful landscaping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Prime Location</h3>
              <p className="text-gray-600">
                Located near Ironwood and Adams Road in Granger, Indiana. Close to shopping, 
                restaurants, and excellent schools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Active HOA</h3>
              <p className="text-gray-600">
                Our Homeowners Association works to maintain the integrity and beauty of 
                our neighborhood. Annual dues: $300 (as of 2023).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Neighborhood Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Location Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Close to University of Notre Dame</li>
                <li>• Near quality schools and parks</li>
                <li>• Easy access to shopping and dining</li>
                <li>• Short drive to Michigan border</li>
                <li>• Convenient to 80/90 Toll Road</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Well-maintained properties</li>
                <li>• Mature trees and foliage</li>
                <li>• Active homeowners association</li>
                <li>• Friendly, welcoming community</li>
                <li>• Well water & septic sewer systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl mb-8">Get in touch with the Ashford Hills HOA</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
