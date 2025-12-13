import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-[3rem] md:text-[4rem] font-bold mb-4 leading-tight">Contact Ashford Hills HOA</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-100">Get in touch with the Homeowners Association</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 leading-tight">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-8 text-stone-900 leading-tight">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[1.5rem] font-semibold mb-3 text-stone-900 leading-tight">Email</h3>
                  <p className="text-[1.125rem] text-stone-700 leading-relaxed">
                    <a href="mailto:info@ashfordhills.org" className="text-teal-600 hover:text-teal-700 transition-colors font-medium">
                      info@ashfordhills.org
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.5rem] font-semibold mb-3 text-stone-900 leading-tight">Location</h3>
                  <p className="text-[1.125rem] text-stone-700 leading-relaxed">
                    Ashford Hills HOA<br />
                    Granger, Indiana<br />
                    Near Ironwood and Adams Road
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.5rem] font-semibold mb-3 text-stone-900 leading-tight">HOA Dues</h3>
                  <p className="text-[1.125rem] text-stone-700 leading-relaxed">
                    Annual dues are $300 per year.
                  </p>
                </div>

                <div className="bg-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-teal-100">
                  <h3 className="text-[1.5rem] font-semibold mb-3 text-stone-900 leading-tight">Questions?</h3>
                  <p className="text-[1.125rem] text-stone-700 leading-relaxed">
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
