import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, ExternalLink, Copy, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);
  const [errors, setErrors] = useState({ email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, email: value && !emailRegex.test(value) ? 'Please enter a valid email' : '' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rmemdanib@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) { console.error('Failed to copy:', error); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.email) return;
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:rmemdanib@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-full section-padding relative noise-bg overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', filter: 'blur(100px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Sparkles size={12} /> Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in Full-Stack Development, Data Engineering & Analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info Column - 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact cards */}
            {[
              { icon: <Mail className="w-5 h-5" />, title: "Email", value: "rmemdanib@gmail.com", href: "mailto:rmemdanib@gmail.com", gradient: "from-blue-500 to-indigo-500" },
              { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Mumbai, Maharashtra, IN", href: "https://maps.app.goo.gl/FsgoLuXWCT2Yzswj8", gradient: "from-violet-500 to-purple-500" },
            ].map((info, i) => (
              <div key={i} className="card-glass group p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground">{info.title}</p>
                  <a href={info.href} target={info.title === 'Location' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors truncate block">
                    {info.value}
                  </a>
                </div>
                {info.title === 'Email' && (
                  <button onClick={handleCopyEmail} className="p-2 rounded-lg hover:bg-muted/50 transition-colors" aria-label="Copy email">
                    {emailCopied ? <CheckCircle size={14} className="text-green-500" /> : <Copy size={14} className="text-muted-foreground" />}
                  </button>
                )}
              </div>
            ))}

            {/* Social */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">// social</h4>
              <div className="flex gap-3">
                {[
                  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/rahil-memdani-8968681ab", gradient: "from-blue-500 to-cyan-500" },
                  { name: "GitHub", icon: <Github className="w-4 h-4" />, href: "https://github.com/rahilmemdani", gradient: "from-violet-500 to-purple-500" },
                ].map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300`}
                    aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-primary">Open to opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Seeking roles in Full-Stack Development, Data Engineering & Analytics (remote/hybrid)
              </p>
            </div>
          </div>

          {/* Form - 3 cols */}
          <div className="lg:col-span-3 card-glass p-6 md:p-8">
            <h3 className="text-xl font-display font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-muted/30 dark:bg-muted/20 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm outline-none"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-muted/30 dark:bg-muted/20 border ${errors.email ? 'border-red-400' : 'border-border/50'} rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm outline-none`}
                    placeholder="your@email.com" />
                  {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium mb-1.5">Subject *</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-muted/30 dark:bg-muted/20 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm outline-none"
                  placeholder="Project discussion, Job opportunity…" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1.5">
                  Message * <span className="text-muted-foreground">({formData.message.length}/500)</span>
                </label>
                <textarea id="message" name="message" required rows={4} maxLength={500}
                  value={formData.message} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-muted/30 dark:bg-muted/20 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm resize-none outline-none"
                  placeholder="Tell me about your project or opportunity…" />
              </div>
              <button type="submit" disabled={isSubmitting || !!errors.email}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Opening Mail Client…</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-xs text-center">
                  Mail client opened! Complete sending in your email app.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs text-center">
                  Unable to open mail client. Email me at <a href="mailto:rmemdanib@gmail.com" className="underline">rmemdanib@gmail.com</a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;