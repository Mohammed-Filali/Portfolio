import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 100],
              x: [null, (Math.random() - 0.5) * 100],
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeIn}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 rounded-full text-blue-400 border border-blue-500/30">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">Email Me</h3>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/30 rounded-full text-purple-400 border border-purple-500/30">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">Location</h3>
                  <p className="text-gray-400">Casablanca, Morocco</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-900/30 rounded-full text-green-400 border border-green-500/30">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">Call Me</h3>
                  <a 
                    href="tel:+212600000000" 
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    +212 600-000000
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeIn}
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-xl"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-900/30 rounded-full mb-6 border border-green-500/30">
                  <FiCheck className="text-4xl text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-100 mb-8">Send Me a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-100 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-100 placeholder-gray-400"
                        placeholder="you@example.com"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-100 placeholder-gray-400"
                        placeholder="Hello, I'd like to talk about..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                        isSubmitting 
                          ? 'bg-blue-800/50 text-blue-300' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="text-lg" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}