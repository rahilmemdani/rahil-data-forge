import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, ExternalLink, Copy } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);
  const [errors, setErrors] = useState({ email: '' });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rmemdanib@gmail.com",
      href: "mailto:rmemdanib@gmail.com",
      color: "from-primary to-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, Maharashtra, IN",
      href: "https://maps.app.goo.gl/FsgoLuXWCT2Yzswj8",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/rahil-memdani-8968681ab",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rahilmemdani",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: value && !emailRegex.test(value) ? 'Please enter a valid email address' : ''
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rmemdanib@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.email) return;

    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:rmemdanib@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/20 min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-gradient-bg pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborate on innovative projects in Data Science, Analytics, or Full-Stack Development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
                Reach out to discuss opportunities or projects in predictive analytics and software engineering.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="card-glass group rounded-lg p-4 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeIn 0.5s ease-in-out' }}
                >
                  <div className="relative">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    {info.title === "Location" && (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`View ${info.title} on map`}
                      >
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                      </a>
                    )}
                    {info.title === "Email" && (
                      <button
                        onClick={handleCopyEmail}
                        className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy email address"
                      >
                        <Copy size={16} className="text-muted-foreground group-hover:text-primary" />
                      </button>
                    )}
                  </div>
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {info.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {info.value}
                  </p>
                  {info.title === "Email" && emailCopied && (
                    <span className="absolute bottom-0 right-2 text-xs text-green-400 animate-fadeIn">Copied!</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-3 text-sm">Connect on Social Media</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-glass p-2.5 rounded-lg bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative group/social`}
                    style={{ animationDelay: `${(contactInfo.length + index) * 0.1}s`, animation: 'fadeIn 0.5s ease-in-out' }}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background text-foreground text-xs rounded px-2 py-1 opacity-0 group-hover/social:opacity-100 transition-opacity duration-200">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-glass p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-primary">Available for Opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Seeking roles in Predictive Analytics, Data Engineering, and Full-Stack (remote/hybrid).
              </p>
            </div>

            {/* Live Chat Placeholder */}
            <div className="card-glass p-4 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-500/20">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-teal-400">Live Chat (Coming Soon)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Stay tuned for real-time chat support to discuss projects instantly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-6 bg-gradient-to-br from-card to-muted/20 ring-2 ring-primary/20 hover:ring-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-muted/30 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Your name"
                    aria-describedby="name-error"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-muted/30 border ${errors.email ? 'border-red-500/50' : 'border-border/50'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm`}
                    placeholder="your.email@example.com"
                    aria-describedby="email-error"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1 animate-fadeIn">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-muted/30 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Project discussion, Job opportunity, etc."
                  aria-describedby="subject-error"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                  Message * <span className="text-muted-foreground">({formData.message.length}/500)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-muted/30 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  aria-describedby="message-error"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !!errors.email}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary to-blue-500 hover:from-primary/80 hover:to-blue-500/80 transition-all duration-300"
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Opening Mail Client...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center animate-fadeIn">
                  Mail client opened! Complete sending the message in your email app.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center animate-fadeIn">
                  Unable to open mail client. Please contact me at <a href="mailto:rmemdanib@gmail.com" className="underline">rmemdanib@gmail.com</a>.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2025 Rahil Memdani. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Transforming data into intelligent solutions, one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;