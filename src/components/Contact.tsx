
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rmemdanib@gmail.com",
      href: "mailto:rmemdanib@gmail.com",
      color: "from-primary to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91-9167156829",
      href: "tel:+919167156829",
      color: "from-secondary to-green-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, Maharashtra, IN",
      href: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/rahil-memdani",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rahilmemdani",
      color: "hover:text-purple-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to opportunities in Predictive Analytics, Data Engineering, and Full-Stack Development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in data science and software engineering. Whether you're 
                looking to build predictive analytics solutions or scale enterprise applications, 
                let's connect!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  className="card-glass flex items-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {info.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                  {info.title === "Location" && (
                    <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glassmorphism rounded-lg text-muted-foreground ${social.color} transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-glass bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold text-primary">Available for New Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently seeking roles in Predictive Analytics, Data Engineering, and Full-Stack Development. 
                Open to both remote and hybrid positions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Project discussion, Job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </div>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Rahil Memdani. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Transforming data into intelligent solutions, one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
