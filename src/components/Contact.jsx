import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';


const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send('service_qkqvhcf', 'template_r2rk5x8', formData, 'hTlkW0VsK5UqJxin9')
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div id='contact' className="relative min-h-screen text-white my-9 bg-white shadow shadow-gray-400 flex items-center justify-center overflow-hidden dark:bg-gray-900 rounded-3xl">
      
     <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-7 m-9"
          >
            <motion.div
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

         

              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 rounded-full bg-sky-400/20"
                  initial={{
                    x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.5,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [null, (Math.random() - 0.5) * 200],
                  y: [null, (Math.random() - 0.5) * 200],
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Contact Form Card */}
      <motion.div
        className="relative z-10 p-8 w-full max-w-xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <motion.h1 
            className="text-5xl md:text-7xl text-center font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.02 }}
          >
              Contact Us         
           </motion.h1>        
<form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white/5 dark:bg-white/20 dark:text-white text-black dark:placeholder-white/60 placeholder-black/60 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md  bg-white/20 dark:text-white text-black dark:placeholder-white/60 placeholder-black/60 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-md  bg-white/20 dark:text-white text-black dark:placeholder-white/60 placeholder-black/60focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {isSuccess && (
          <div className="mt-4 text-center text-green-400">
            Message sent successfully!
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactUs;
