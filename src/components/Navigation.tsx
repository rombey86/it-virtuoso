import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-blue-600 text-xl font-bold">IT-Virtuoso</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                Lösungen <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  <a href="/kmu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">KMU-Lösungen</a>
                  <a href="/privat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Privatanwender</a>
                  <a href="/bildung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Bildungseinrichtungen</a>
                </div>
              </div>
            </div>
            <a href="/about" className="text-gray-700 hover:text-blue-600">Über uns</a>
            <a href="/referenzen" className="text-gray-700 hover:text-blue-600">Referenzen</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="/kontakt" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</a>
            <a href="/kmu" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">KMU-Lösungen</a>
            <a href="/privat" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Privatanwender</a>
            <a href="/bildung" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Bildungseinrichtungen</a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Über uns</a>
            <a href="/referenzen" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Referenzen</a>
            <a href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Blog</a>
            <a href="/kontakt" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;