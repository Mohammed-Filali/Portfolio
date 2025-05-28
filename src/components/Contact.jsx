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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
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
    <div
      id='contact'
      className="relative min-h-screen text-white my-12 shadow-xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-3xl transition-colors duration-500"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'linear-gradient(135deg, #a78bfa33 0%, #f472b633 100%)',
              filter: 'blur(2.5px)'
            }}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 50 + 40,
              height: Math.random() * 50 + 40,
              opacity: Math.random() * 0.18 + 0.07
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 120],
              x: [null, (Math.random() - 0.5) * 120],
              transition: {
                duration: Math.random() * 18 + 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-7"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white/80 p-6 rounded-2xl border border-gray-200/80 backdrop-blur-lg hover:border-purple-400/60 transition-all duration-300 shadow-xl dark:bg-gray-900/80 dark:border-gray-800/80"
              whileHover={{ y: -3, scale: 1.03 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-200/40 rounded-full text-blue-500 border border-blue-400/30 dark:bg-blue-900/30 dark:text-blue-300">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-300 mb-1">Email Me</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors underline underline-offset-2"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white/80 p-6 rounded-2xl border border-gray-200/80 backdrop-blur-lg hover:border-purple-400/60 transition-all duration-300 shadow-xl dark:bg-gray-900/80 dark:border-gray-800/80"
              whileHover={{ y: -3, scale: 1.03 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-200/40 rounded-full text-purple-500 border border-purple-400/30 dark:bg-purple-900/30 dark:text-purple-300">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-300 mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Casablanca, Morocco</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white/80 p-6 rounded-2xl border border-gray-200/80 backdrop-blur-lg hover:border-purple-400/60 transition-all duration-300 shadow-xl dark:bg-gray-900/80 dark:border-gray-800/80"
              whileHover={{ y: -3, scale: 1.03 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-200/40 rounded-full text-green-500 border border-green-400/30 dark:bg-green-900/30 dark:text-green-300">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-500 dark:text-green-300 mb-1">Call Me</h3>
                  <a
                    href="tel:+212600000000"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors underline underline-offset-2"
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
            className="bg-white/90 p-8 rounded-2xl border border-gray-200/80 backdrop-blur-lg hover:border-purple-400/60 transition-all duration-300 shadow-2xl dark:bg-gray-900/90 dark:border-gray-800/80"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/40 rounded-full mb-5 border border-green-500/30">
                  <FiCheck className="text-3xl text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">Thank you for reaching out. I'll get back to you soon.</p>
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-7">Send Me a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-gray-100/80 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-100 placeholder-gray-400 outline-none"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-gray-100/80 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-100 placeholder-gray-400 outline-none"
                        placeholder="you@example.com"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-gray-100/80 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-100 placeholder-gray-400 outline-none"
                        placeholder="Hello, I'd like to talk about..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                        isSubmitting
                          ? 'bg-blue-800/50 text-blue-300 cursor-not-allowed'
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