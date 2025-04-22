import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Das sagen unsere Kunden</h2>
          <p className="text-lg text-gray-600">
            Erfahren Sie, warum Unternehmen uns vertrauen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Die Zusammenarbeit mit IT-Virtuoso hat unsere IT-Infrastruktur komplett transformiert. Professionell, zuverlässig und immer erreichbar."
            </p>
            <div>
              <p className="font-semibold">Michael Schmidt</p>
              <p className="text-sm text-gray-500">Geschäftsführer, Schmidt & Partner GmbH</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Endlich eine IT-Firma, die auch komplexe Themen verständlich erklärt. Die Betreuung ist erstklassig."
            </p>
            <div>
              <p className="font-semibold">Sandra Weber</p>
              <p className="text-sm text-gray-500">IT-Leiterin, Bildungszentrum München</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Schnelle Reaktionszeiten und kompetente Lösungen. Genau das, was wir für unsere IT-Sicherheit gesucht haben."
            </p>
            <div>
              <p className="font-semibold">Thomas Bauer</p>
              <p className="text-sm text-gray-500">Inhaber, Bauer Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;