import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: "Kavinesh",
      role: "Team Leader"
    },
    {
      name: "Dharshan Kumar",
      role: "Member"
    },
    {
      name: "Dharshan Balaji",
      role: "Member"
    },
    {
      name: "Prakash",
      role :"Member"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 p-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}