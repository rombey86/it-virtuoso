import React from 'react';
import { Monitor, Cloud, Shield, Server, Users, BookOpen } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Dienstleistungen</h2>
          <p className="text-lg text-gray-600">
            Professionelle IT-Lösungen für jeden Bedarf
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Monitor className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open-Source-Lösungen</h3>
            <p className="text-gray-600">
              Kosteneffiziente und flexible Lösungen basierend auf bewährten Open-Source-Technologien
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Server className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Windows Server & Active Directory</h3>
            <p className="text-gray-600">
              Professionelle Verwaltung und Optimierung Ihrer Windows-Infrastruktur
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Cloud className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Virtualisierung & Container</h3>
            <p className="text-gray-600">
              Moderne Container-Lösungen für maximale Flexibilität und Skalierbarkeit
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">IT-Sicherheit</h3>
            <p className="text-gray-600">
              Umfassende Sicherheitslösungen zum Schutz Ihrer Unternehmensdaten
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">KMU-Lösungen</h3>
            <p className="text-gray-600">
              Maßgeschneiderte IT-Konzepte für kleine und mittlere Unternehmen
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bildungseinrichtungen</h3>
            <p className="text-gray-600">
              Spezialisierte IT-Lösungen für Schulen und Bildungsinstitutionen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;