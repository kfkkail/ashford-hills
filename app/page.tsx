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
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg w-fit"
          >
            Learn More About Our Neighborhood
          </Link>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-tight">About Ashford Hills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">32 Beautiful Homes</h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Our neighborhood consists of 32 unique homes developed in the early to mid 1990s, 
                each with mature trees and beautiful landscaping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Prime Location</h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Located near Ironwood and Adams Road in Granger, Indiana. Close to shopping, 
                restaurants, and excellent schools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Active HOA</h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
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
              <ul className="space-y-3 text-base md:text-lg text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Close to University of Notre Dame</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Near quality schools and parks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Easy access to shopping and dining</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Short drive to Michigan border</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Convenient to 80/90 Toll Road</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">Community Features</h3>
              <ul className="space-y-3 text-base md:text-lg text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Well-maintained properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mature trees and foliage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Active homeowners association</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Friendly, welcoming community</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Well water & septic sewer systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Have Questions?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">Get in touch with the Ashford Hills HOA</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
