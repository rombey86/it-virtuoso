import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontaktieren Sie uns</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wir beraten Sie gerne zu allen Fragen rund um Ihre IT-Infrastruktur
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-gray-600">+49 (0) 89 123456789</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <p className="text-gray-600">info@it-virtuoso.de</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Servicezeiten</p>
                  <p className="text-gray-600">Mo-Fr: 08:00 - 18:00 Uhr</p>
                  <p className="text-gray-600">24/7 Notfallsupport für Vertragskunden</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ihr Name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ihre@email.de"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Nachricht</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Ihre Nachricht an uns"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;