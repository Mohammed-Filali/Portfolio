import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Refs for animated elements
  const bgRefs = useRef([]);
  const headerRef = useRef(null);
  const successRef = useRef(null);
  const formWrapperRef = useRef(null);

  useEffect(() => {
    // Animate background bubbles randomly
    bgRefs.current.forEach((el) => {
      gsap.to(el, {
        x: `+=${(Math.random() - 0.5) * 200}`,
        y: `+=${(Math.random() - 0.5) * 200}`,
        opacity: 0.3 + Math.random() * 0.3,
        duration: 10 + Math.random() * 10,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    });

    // Animate header fade-in and slide up
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    // Animate form container fade-in and slide up
    gsap.fromTo(
      formWrapperRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    // Animate success message when it appears
    if (isSuccess) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  }, [isSuccess]);

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
    <section id="contact" 
         className={`relative min-h-screen m-9 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-8 sm:p-12`}
>
      {/* Background elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (bgRefs.current[i] = el)}
          className="absolute hidden sm:block w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-sky-400/20"
          style={{
            left: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            top: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            onMouseEnter={() => gsap.to(headerRef.current, { scale: 1.02, duration: 0.2 })}
            onMouseLeave={() => gsap.to(headerRef.current, { scale: 1, duration: 0.2 })}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            {[
              {
                icon: <FiMail className="text-2xl" />,
                title: 'Email Me',
                content: (
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    mohammmed.a.filali@gmail.com
                  </a>
                ),
                bg: 'bg-blue-100 dark:bg-blue-900/30',
                textColor: 'text-blue-500 dark:text-blue-300',
              },
              {
                icon: <FiMapPin className="text-2xl" />,
                title: 'Location',
                content: <p className="text-gray-600 dark:text-gray-300">Mohammedia, Morocco</p>,
                bg: 'bg-purple-100 dark:bg-purple-900/30',
                textColor: 'text-purple-500 dark:text-purple-300',
              },
              {
                icon: <FiPhone className="text-2xl" />,
                title: 'Call Me',
                content: (
                  <a
                    href="tel:+212600000000"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    +212 669-308933
                  </a>
                ),
                bg: 'bg-green-100 dark:bg-green-900/30',
                textColor: 'text-green-500 dark:text-green-300',
              },
            ].map(({ icon, title, content, bg, textColor }, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-400/60 transition-all duration-300 shadow-lg cursor-pointer"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
              >
                <div className="flex items-start gap-4">
                  <div className={`${bg} rounded-full p-3 ${textColor}`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${textColor}`}>{title}</h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div
              ref={formWrapperRef}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-white dark:bg-gray-700 dark:text-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-white dark:bg-gray-700 dark:text-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-white dark:bg-gray-700 dark:text-white transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <FiSend />
                  )}
                  Send Message
                </button>

                {isSuccess && (
                  <div
                    ref={successRef}
                    className="mt-4 flex items-center gap-2 text-green-600 font-semibold"
                  >
                    <FiCheck className="text-xl" /> Your message has been sent!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
