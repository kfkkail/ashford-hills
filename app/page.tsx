import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[600px] sm:min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
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
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-teal-900/60 to-emerald-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-start md:justify-center text-white py-16">
          <div className="max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[45%]">
            <h1 className="text-[clamp(1.65rem,7vw,3.25rem)] sm:text-[clamp(2.25rem,6vw,4rem)] md:text-[clamp(3rem,5vw,5rem)] lg:text-[5.5rem] font-bold mb-6 leading-tight tracking-tight drop-shadow-2xl whitespace-nowrap">
              Discover Ashford Hills
            </h1>
            <p className="text-xl md:text-2xl mb-10 drop-shadow-lg leading-relaxed text-gray-100">
              A beautiful residential neighborhood in Granger, Indiana where community and excellence meet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pb-6 sm:pb-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar - NEW */}
      <section className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-600 mb-2">32</div>
              <div className="text-lg text-stone-700 font-medium">Beautiful Homes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-600 mb-2">$300</div>
              <div className="text-lg text-stone-700 font-medium">Annual HOA Dues</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-600 mb-2">1990s</div>
              <div className="text-lg text-stone-700 font-medium">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned with Icons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-4 text-stone-900 leading-tight">
              Why Choose <span className="text-teal-600">Ashford Hills</span>?
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Part of the Knollwood community in Granger, Ashford Hills pairs quiet streets with easy access to everything nearby.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-[1.5rem] font-bold mb-4 text-stone-900 leading-tight">Thoughtful Architecture</h3>
              <p className="text-[1.125rem] text-stone-600 leading-relaxed">
                Thirty-two custom homes, built in the early to mid 1990s, sit on larger lots with mature trees, all-brick exteriors, and cohesive landscaping that keep curb appeal timeless.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[1.5rem] font-bold mb-4 text-stone-900 leading-tight">Prime Location</h3>
              <p className="text-[1.125rem] text-stone-600 leading-relaxed">
                Located near Ironwood and Adams Road in Granger, Indiana. Close to shopping, 
                restaurants, excellent schools, and just minutes from Notre Dame.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[1.5rem] font-bold mb-4 text-stone-900 leading-tight">Active HOA</h3>
              <p className="text-[1.125rem] text-stone-600 leading-relaxed">
                Our Homeowners Association works diligently to maintain the integrity and beauty of 
                our neighborhood. Annual dues are $300 per year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Content Section - Benefits */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-teal-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-6 text-stone-900 leading-tight">
                Neighborhood <span className="text-teal-600">Highlights</span>
              </h2>
              <p className="text-[1.125rem] text-stone-600 mb-8 leading-relaxed">
                Everything you need for a wonderful lifestyle is right here in Ashford Hills, from Notre Dame game days to quiet cul-de-sacs. We’re minutes from Mishawaka, South Bend, and the Michigan border while still feeling tucked away.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-stone-900">Lifestyle & Amenities</h3>
                    <ul className="space-y-2 text-[1.125rem] text-stone-600">
                      <li>• Close to University of Notre Dame</li>
                      <li>• Knollwood Country Club & golf</li>
                      <li>• University Park Mall & Grape Road dining</li>
                      <li>• Ironwood Road restaurants & local parks</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-stone-900">Connected & Convenient</h3>
                    <ul className="space-y-2 text-[1.125rem] text-stone-600">
                      <li>• 5–10 minute drive to Mishawaka</li>
                      <li>• Easy access to 80/90 Toll Road</li>
                      <li>• Short hop to South Bend & Elkhart</li>
                      <li>• Close to the Michigan border</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-stone-900">Schools & Services</h3>
                    <ul className="space-y-2 text-[1.125rem] text-stone-600">
                      <li>• South Bend Community School District</li>
                      <li>• Swanson Elementary, Clay Middle & High</li>
                      <li>• Well water & septic utilities</li>
                      <li>• Active HOA keeping properties pristine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Visual Element (Card) */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-stone-200">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Granger, Indiana</h3>
                    <p className="text-stone-600">Near Ironwood and Adams Road</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <h4 className="text-lg font-semibold mb-4 text-stone-900">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-stone-600">Homes:</span>
                      <span className="font-semibold text-stone-900">32</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">HOA Dues:</span>
                      <span className="font-semibold text-stone-900">$300/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Established:</span>
                      <span className="font-semibold text-stone-900">Early 1990s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Schools:</span>
                      <span className="font-semibold text-stone-900 text-right">Swanson (Elem)<br />Clay (Middle & High)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-4 leading-tight">Have Questions?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Get in touch with the Ashford Hills HOA. We're here to help maintain our wonderful community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
          >
            Contact Us Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
