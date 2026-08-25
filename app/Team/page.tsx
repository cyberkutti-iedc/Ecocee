'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Users, ArrowRight, X } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <AnimatedSection variant="fade-up" delay={0.1}>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-8">
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 tracking-tight font-display">
              Meet Our Team
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              A passionate group of engineers and innovators building the future of embedded systems and IoT solutions
            </p>
            
            <div className="flex items-center justify-center text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Based in Kochi, Kerala</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Grid */}
      <AnimatedSection variant="fade-up" delay={0.2}>
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {teamData.map((member, index) => (
                <div
                  key={member.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(member)}
                >
                  <div className="bg-card border border-border/50 rounded-3xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 h-full">
                    {/* Avatar */}
                    <div className="flex items-start space-x-6 h-full flex-col sm:flex-row">
                      <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <div className="w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          {member.avatar}
                        </div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="flex-1 flex flex-col h-full">
                        <h3 className="text-2xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors font-display">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {member.bio}
                        </p>
                        
                        <div className="flex-1"></div>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6 mt-2">
                          {member.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 3 && (
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                              +{member.skills.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Action */}
                        <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                          <span className="text-sm font-medium">View profile</span>
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
      </AnimatedSection>

      {/* Company Stats */}
      <AnimatedSection variant="fade-up" delay={0.3}>
        <section className="border-t border-border py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-foreground mb-2 font-display">6</div>
                <div className="text-muted-foreground text-sm font-medium">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2 font-display">2+</div>
                <div className="text-muted-foreground text-sm font-medium">Combined Years</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2 font-display">4</div>
                <div className="text-muted-foreground text-sm font-medium">Core Specialties</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2 font-display">∞</div>
                <div className="text-muted-foreground text-sm font-medium">Possibilities</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-start space-x-6 flex-col sm:flex-row">
                  <div className="w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center text-3xl shrink-0 mb-4 sm:mb-0">
                    {selectedMember.avatar}
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium text-foreground mb-1 font-display">{selectedMember.name}</h2>
                    <p className="text-primary font-medium text-lg mb-1">{selectedMember.role}</p>
                    <p className="text-muted-foreground text-sm">{selectedMember.experience}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Member Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3 font-display">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4 font-display">Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedMember.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 bg-secondary/50 rounded-xl text-secondary-foreground text-sm text-center font-medium border border-border/50"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-medium text-foreground mb-4 font-display">Connect</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedMember.email && selectedMember.email !== "#" && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium shadow-sm"
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
                        className="flex items-center space-x-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#0A66C2]/90 transition-colors font-medium shadow-sm"
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
                        className="flex items-center space-x-2 px-6 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors font-medium shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-muted-foreground text-sm">
                    Joined Ecocee in {new Date(selectedMember.joinedDate).getFullYear() || selectedMember.joinedDate}
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