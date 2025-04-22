import React from 'react';
import { Shield, Server, Cloud, Users, Wrench, HeartHandshake } from 'lucide-react';
import Navigation from '../components/Navigation';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Unsere IT-Dienstleistungen</h1>
            <p className="text-xl text-blue-100">
              Maßgeschneiderte Lösungen für Ihren digitalen Erfolg
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">IT-Sicherheit</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Endpoint Security & Antivirus-Lösungen</li>
                <li>• Firewall-Management</li>
                <li>• Backup & Disaster Recovery</li>
                <li>• Security Awareness Training</li>
                <li>• Penetrationstests & Sicherheitsaudits</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Server className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Infrastruktur & Netzwerke</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Netzwerkplanung & -implementation</li>
                <li>• Server-Administration</li>
                <li>• Storage-Lösungen</li>
                <li>• Virtualisierung</li>
                <li>• IT-Monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Cloud Services</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Cloud Migration</li>
                <li>• Microsoft 365 & Google Workspace</li>
                <li>• Cloud Backup</li>
                <li>• Hybrid Cloud Lösungen</li>
                <li>• Cloud Security</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Managed Services</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• 24/7 IT-Support</li>
                <li>• Proaktives Monitoring</li>
                <li>• Patch Management</li>
                <li>• Remote Support</li>
                <li>• IT-Dokumentation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Wrench className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">IT-Consulting</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• IT-Strategie & Roadmap</li>
                <li>• Digitalisierungsberatung</li>
                <li>• IT-Kostenoptimierung</li>
                <li>• Compliance & Datenschutz</li>
                <li>• IT-Projektmanagement</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <HeartHandshake className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Support & Wartung</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Vor-Ort-Service</li>
                <li>• Hardware-Wartung</li>
                <li>• Software-Updates</li>
                <li>• Helpdesk</li>
                <li>• Präventive Wartung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;