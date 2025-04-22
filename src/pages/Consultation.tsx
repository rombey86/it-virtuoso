import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    participants: '1',
    topic: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Beratungsgespräch vereinbaren</h1>
            <p className="text-xl text-blue-100">
              Lassen Sie uns gemeinsam Ihre IT-Herausforderungen besprechen
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unternehmen</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datum *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Uhrzeit *</label>
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teilnehmer</label>
                    <select
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gesprächsthema *</label>
                  <input
                    type="text"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. IT-Sicherheit, Cloud Migration, Digitalisierung"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ihre Nachricht</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Weitere Details zu Ihrem Anliegen..."
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Beratungstermin anfragen
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Flexible Terminwahl</h3>
                <p className="text-gray-600">
                  Wählen Sie einen Termin, der Ihnen am besten passt. Wir bestätigen Ihren Wunschtermin innerhalb eines Werktages.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Beratungszeit</h3>
                <p className="text-gray-600">
                  Planen Sie etwa 60 Minuten für das erste Gespräch ein. Bei Bedarf vereinbaren wir gerne Folgetermine.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Teilnehmer</h3>
                <p className="text-gray-600">
                  Gerne können auch mehrere Entscheidungsträger am Gespräch teilnehmen. Bitte geben Sie die Anzahl an.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vorbereitung</h3>
                <p className="text-gray-600">
                  Je mehr Details Sie uns vorab mitteilen, desto gezielter können wir uns auf das Gespräch vorbereiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;