export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Ashford Hills</h1>
          <p className="text-xl">A Knollwood Subdivision in Granger, Indiana</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Neighborhood</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ashford Hills is a residential neighborhood in Granger, Indiana, located near Ironwood and Adams Road. 
              It consists of 32 beautiful homes developed in the early to mid 1990s. Our neighborhood is part of the 
              Knollwood Development on Adams Road and is one of Granger's popular neighborhoods.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The homes in our neighborhood are each unique, boasting mature trees and foliage. The neighborhood is 
              governed by our covenants and restrictions in an effort to maintain the integrity of the neighborhood 
              and keep Ashford Hills a highly desirable place to live.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Average home prices in Ashford Hills range from $400,000 to $600,000, reflecting the quality and 
              desirability of our community.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Location & Amenities</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a resident of Granger, Indiana, you'll have access to quality schools, parks, golf courses, shopping, 
              and amazing dining options. The University of Notre Dame is also nearby in the neighboring city of South 
              Bend, which isn't a very far drive from Ashford Hills. Notre Dame provides entertainment with football 
              games, basketball games, hockey, and other sports contests as well as tailgating during football season.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Nearby Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• University of Notre Dame</li>
                  <li>• Knollwood Country Club</li>
                  <li>• University Park Mall</li>
                  <li>• Lake Michigan</li>
                  <li>• Grape Road shopping district</li>
                  <li>• Ironwood Road restaurants</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Accessibility</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5-10 minute drive to Mishawaka</li>
                  <li>• Easy access to 80/90 Toll Road</li>
                  <li>• Close to Michigan border</li>
                  <li>• Near Northern Indiana cities: Elkhart, Mishawaka, South Bend</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">School District</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ashford Hills is located in the South Bend Community School District, providing access to quality 
              educational opportunities for families.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-700">
                <li><strong className="text-gray-900">Elementary School:</strong> Swanson</li>
                <li><strong className="text-gray-900">Middle School:</strong> Clay</li>
                <li><strong className="text-gray-900">High School:</strong> Clay</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Homeowners Association</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ashford Hills has an active Homeowners Association that works to maintain the quality and integrity 
              of our neighborhood. The HOA fees for Ashford Hills are $300.00 annually (as of 2023) but are subject 
              to change.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our HOA helps ensure that all properties are well-maintained and that the neighborhood continues to 
              be a desirable place to call home. The association manages common areas, enforces covenants and restrictions, 
              and works to preserve the character of our community.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Utilities & Services</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
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

