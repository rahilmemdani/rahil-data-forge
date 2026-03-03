import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Copy, Sparkles, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import ScheduleConsultationModal from './ScheduleConsultationModal';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showBookingOptions, setShowBookingOptions] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rmemdanib@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) { console.error('Failed to copy:', error); }
  };

  return (
    <section id="contact" className="py-8 md:py-12 px-4 md:px-8 lg:px-16 relative noise-bg overflow-hidden flex items-center justify-center">
      {/* Decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(100px)' }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 -translate-x-1/2 translate-y-1/2 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, var(--gradient-end), var(--gradient-start))', filter: 'blur(100px)' }}
      />

      <div className="container-custom relative z-10 w-full max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary mb-4 border border-primary/20">
            <Sparkles size={12} className="text-primary" /> Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Want to work with <br className="hidden sm:block" />
            <span className="gradient-text">Rahil Memdani?</span>
          </h2>
        </div>

        {/* Action Center - Simplified View */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          {/* Primary Action Button */}
          <a href="mailto:rmemdanib@gmail.com" className="relative group/btn overflow-hidden rounded-2xl p-[1px] inline-block cursor-pointer transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-2xl" />
            <div className="relative flex items-center justify-center gap-3 bg-background/90 backdrop-blur-md rounded-[15px] px-8 sm:px-12 py-4 sm:py-5 font-bold text-sm sm:text-base transition-all duration-300 group-hover/btn:bg-background/50 text-black dark:text-white group-hover/btn:text-white">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>Mail him here</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform ml-1 flex-shrink-0" />
            </div>
          </a>

          {/* Schedule a call Button */}
          <Button
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-7 rounded-[16px] text-sm sm:text-base font-bold bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 border border-primary/50"
            onClick={() => setShowBookingOptions(true)}
          >
            <Calendar className="w-5 h-5" /> Schedule a call
          </Button>
        </div>

        {/* Schedule Consultation Modal */}
        {showBookingOptions && (
          <ScheduleConsultationModal open={showBookingOptions} onClose={() => setShowBookingOptions(false)} />
        )}

      </div>
    </section>
  );
};

export default Contact;