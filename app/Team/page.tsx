'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Users, ArrowRight, X } from 'lucide-react';

// Import the team data
import { teamData, type TeamMember } from '@/data/team';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-8">
            <Users className="w-8 h-8 text-gray-700" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Meet Our Team
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            A passionate group of engineers and innovators building the future of embedded systems and IoT solutions
          </p>
          
          <div className="flex items-center justify-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Based in Kochi, Kerala</span>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamData.map((member, index) => (
              <div
                key={member.id}
                className="group cursor-pointer"
                onClick={() => openModal(member)}
              >
                <div className="bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl">
                  {/* Avatar */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        {member.avatar}
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs rounded-full">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Action */}
                      <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                        <span className="text-sm">View profile</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">2</div>
              <div className="text-gray-600 text-sm">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">4+</div>
              <div className="text-gray-600 text-sm">Combined Years</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">4</div>
              <div className="text-gray-600 text-sm">Core Specialties</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">∞</div>
              <div className="text-gray-600 text-sm">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100/50 animate-in slide-in-from-bottom-8 duration-500">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl">
                    {selectedMember.avatar}
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium text-gray-900 mb-2">{selectedMember.name}</h2>
                    <p className="text-gray-600 font-medium text-lg">{selectedMember.role}</p>
                    <p className="text-gray-500 text-sm mt-1">{selectedMember.experience} experience</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Member Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedMember.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700 text-sm text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember.github && (
                      <a
                        href={selectedMember.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-400 text-sm">
                    Joined Ecocee in {new Date(selectedMember.joinedDate).getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}