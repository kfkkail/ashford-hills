export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ashford Hills</h3>
            <p className="text-gray-400">Homeowners Association</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <p className="text-gray-400">
              Email: <a href="mailto:info@ashfordhills.org" className="hover:text-white transition-colors">info@ashfordhills.org</a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-gray-400">Granger, Indiana</p>
            <p className="text-gray-400">Near Ironwood and Adams Road</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Ashford Hills – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

