export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-[3rem] md:text-[4rem] font-bold mb-4 leading-tight">About Ashford Hills</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-100">A Knollwood Subdivision in Granger, Indiana</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 leading-tight">Our Neighborhood</h2>
            <p className="text-[1.125rem] text-stone-700 mb-6 leading-relaxed">
              Ashford Hills is a residential neighborhood in Granger, Indiana, located near Ironwood and Adams Road. 
              It consists of 32 beautiful homes developed in the early to mid 1990s. Our neighborhood is part of the 
              Knollwood Development on Adams Road and is one of Granger's popular neighborhoods, offering larger lots 
              than most nearby subdivisions for extra room to breathe.
            </p>
            <p className="text-[1.125rem] text-stone-700 mb-6 leading-relaxed">
              The homes in our neighborhood are each unique, boasting mature trees and foliage. Our covenants and 
              restrictions keep Ashford Hills a highly desirable place to live and preserve the classic, all-brick curb 
              appeal that defines the community.
            </p>
            <p className="text-[1.125rem] text-stone-700 mb-12 leading-relaxed">
              Average home prices in Ashford Hills range from $400,000 to $600,000, reflecting the quality and 
              desirability of our community.
            </p>

            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 mt-16 leading-tight">Location & Amenities</h2>
            <p className="text-[1.125rem] text-stone-700 mb-8 leading-relaxed">
              As a resident of Granger, Indiana, you'll have access to quality schools, parks, golf courses, shopping, 
              and amazing dining options. The University of Notre Dame is also nearby in the neighboring city of South 
              Bend, which isn't a very far drive from Ashford Hills. Notre Dame provides entertainment with football 
              games, basketball games, hockey, and other sports contests as well as tailgating during football season.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200">
                <h3 className="text-[1.5rem] font-semibold mb-4 text-stone-900 leading-tight">Nearby Attractions</h3>
                <ul className="space-y-3 text-[1.125rem] text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>University of Notre Dame</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Knollwood Country Club</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>University Park Mall</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Lake Michigan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Grape Road shopping district</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ironwood Road restaurants</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200">
                <h3 className="text-[1.5rem] font-semibold mb-4 text-stone-900 leading-tight">Accessibility</h3>
                <ul className="space-y-3 text-[1.125rem] text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>5-10 minute drive to Mishawaka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Easy access to 80/90 Toll Road</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Close to Michigan border</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Near Northern Indiana cities: Elkhart, Mishawaka, South Bend</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 mt-16 leading-tight">School District</h2>
            <p className="text-[1.125rem] text-stone-700 mb-6 leading-relaxed">
              Ashford Hills is located in the South Bend Community School District, providing access to quality 
              educational opportunities for families.
            </p>
            <div className="bg-teal-50 p-8 rounded-xl shadow-lg mb-12 border border-teal-100">
              <ul className="space-y-3 text-[1.125rem] text-stone-700 leading-relaxed">
                <li><strong className="text-stone-900">Elementary School:</strong> Swanson</li>
                <li><strong className="text-stone-900">Middle School:</strong> Clay</li>
                <li><strong className="text-stone-900">High School:</strong> Clay</li>
              </ul>
            </div>

            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 mt-16 leading-tight">Homeowners Association</h2>
            <p className="text-[1.125rem] text-stone-700 mb-6 leading-relaxed">
              Ashford Hills has an active Homeowners Association that works to maintain the quality and integrity 
              of our neighborhood. The HOA fees for Ashford Hills are $300.00 annually (as of 2023) but are subject 
              to change.
            </p>
            <p className="text-[1.125rem] text-stone-700 mb-12 leading-relaxed">
              Our HOA helps ensure that all properties are well-maintained and that the neighborhood continues to 
              be a desirable place to call home. The association manages common areas, enforces covenants and restrictions, 
              and works to preserve the character of our community.
            </p>

            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 mt-16 leading-tight">Utilities & Services</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <p className="text-[1.125rem] text-stone-700 mb-4 leading-relaxed">
                Ashford Hills properties are on <strong>Well Water & Septic Sewer</strong> systems, which is common 
                for homes in this area of Granger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
