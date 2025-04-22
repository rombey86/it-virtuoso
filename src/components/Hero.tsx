import React from 'react';
import { Shield, Server, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT-Virtuoso - Ihre IT-Infrastruktur in sicheren Händen
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Maßgeschneiderte IT-Lösungen für Ihren Erfolg - von Experten entwickelt und betreut
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kontakt"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Beratungsgespräch vereinbaren
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sicherheit</h3>
            <p className="text-blue-100">
              Umfassender Schutz Ihrer IT-Systeme durch modernste Sicherheitslösungen
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Server className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Zuverlässigkeit</h3>
            <p className="text-blue-100">
              24/7 Monitoring und Support für Ihre geschäftskritischen Systeme
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-blue-100">
              Erfahrene Spezialisten mit umfassendem Know-how in allen IT-Bereichen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;