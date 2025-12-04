import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Ashford Hills neighborhood with beautiful autumn foliage"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Welcome to Ashford Hills
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl leading-relaxed">
            A beautiful residential neighborhood in Granger, Indiana
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg w-fit"
          >
            Learn More About Our Neighborhood
          </Link>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-tight">About Ashford Hills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">32 Beautiful Homes</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our neighborhood consists of 32 unique homes developed in the early to mid 1990s, 
                each with mature trees and beautiful landscaping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Prime Location</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Located near Ironwood and Adams Road in Granger, Indiana. Close to shopping, 
                restaurants, and excellent schools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Active HOA</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our Homeowners Association works to maintain the integrity and beauty of 
                our neighborhood. Annual dues: $300 (as of 2023).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-tight">Neighborhood Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Location Benefits</h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-600 leading-relaxed">
                <li>• Close to University of Notre Dame</li>
                <li>• Near quality schools and parks</li>
                <li>• Easy access to shopping and dining</li>
                <li>• Short drive to Michigan border</li>
                <li>• Convenient to 80/90 Toll Road</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Community Features</h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Have Questions?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">Get in touch with the Ashford Hills HOA</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
