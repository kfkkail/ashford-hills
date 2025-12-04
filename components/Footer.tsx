export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Ashford Hills</h3>
            <p className="text-stone-400">Homeowners Association</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-stone-200">Contact Information</h4>
            <p className="text-stone-400">
              Email: <a href="mailto:info@ashfordhills.org" className="text-teal-400 hover:text-teal-300 transition-colors">info@ashfordhills.org</a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-stone-200">Location</h4>
            <p className="text-stone-400">Granger, Indiana</p>
            <p className="text-stone-400">Near Ironwood and Adams Road</p>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
          <p>Copyright © {new Date().getFullYear()} Ashford Hills – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

