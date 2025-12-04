import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Ashford Hills HOA</h1>
          <p className="text-xl">Get in touch with the Homeowners Association</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@ashfordhills.org" className="text-blue-600 hover:text-blue-800">
                      info@ashfordhills.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Location</h3>
                  <p className="text-gray-700">
                    Ashford Hills HOA<br />
                    Granger, Indiana<br />
                    Near Ironwood and Adams Road
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">HOA Dues</h3>
                  <p className="text-gray-700">
                    Annual dues: $300.00 (as of 2023)<br />
                    <span className="text-sm text-gray-600">Subject to change</span>
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Questions?</h3>
                  <p className="text-gray-700 text-sm">
                    If you have questions about the neighborhood, HOA policies, or need assistance, 
                    please don't hesitate to reach out. We're here to help maintain our wonderful 
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

