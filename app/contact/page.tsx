import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Contact Ashford Hills HOA</h1>
          <p className="text-lg md:text-xl leading-relaxed">Get in touch with the Homeowners Association</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Email</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    <a href="mailto:info@ashfordhills.org" className="text-blue-700 hover:text-cyan-500 transition-colors">
                      info@ashfordhills.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Location</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    Ashford Hills HOA<br />
                    Granger, Indiana<br />
                    Near Ironwood and Adams Road
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">HOA Dues</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    Annual dues: $300.00 (as of 2023)<br />
                    <span className="text-sm text-slate-600">Subject to change</span>
                  </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Questions?</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
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

