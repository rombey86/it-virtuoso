import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServicesPage from './pages/Services';
import ConsultationPage from './pages/Consultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-16">
              <Hero />
              <Services />
              <Testimonials />
              <Contact />
            </main>
            
            <footer className="bg-gray-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">IT-Virtuoso</h3>
                    <p className="text-gray-400">
                      Ihr vertrauenswürdiger Partner für IT-Dienstleistungen
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                    <p className="text-gray-400">
                      Musterstraße 123<br />
                      80123 München<br />
                      Tel: +49 (0) 89 123456789<br />
                      info@it-virtuoso.de
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
                      <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
                      <li><a href="/agb" className="hover:text-white">AGB</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Zertifizierungen</h3>
                    <p className="text-gray-400">
                      ISO 27001<br />
                      Microsoft Gold Partner<br />
                      VMware Professional
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                  <p>&copy; 2024 IT-Virtuoso. Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </Router>
  );
}

export default App;