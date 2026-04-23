"use client";

import { ShieldCheck, Users, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Parole Supervision",
    description: "Monitoring and supporting individuals transitioning back into the community.",
    icon: ShieldCheck,
  },
  {
    title: "Probation Assistance",
    description: "Helping probationers comply with court requirements and rehabilitation programs.",
    icon: HeartHandshake,
  },
  {
    title: "Community Outreach",
    description: "Engaging with local organizations to promote safety and reintegration.",
    icon: Users,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-zinc-900 relative">
          Our Services
          <span className="block w-20 h-1 bg-maroon-dark mx-auto mt-4 rounded-full" />
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-maroon-dark/10 rounded-xl flex items-center justify-center mb-6 text-maroon-dark group-hover:bg-maroon-dark group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-800">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
