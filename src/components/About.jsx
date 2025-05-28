import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
const {theme} = useTheme();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Laravel', icon: '🪄', color: 'from-red-500 to-red-700' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-400 to-purple-600' },
    { name: 'MySQL', icon: '🗄️', color: 'from-orange-400 to-orange-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-300 to-blue-500' },
    { name: 'Git', icon: '🔀', color: 'from-red-400 to-red-600' }
  ];

  const interests = [
    { name: 'Open Source', icon: '❤️', color: 'bg-gradient-to-br from-red-500/20 to-red-700/30' },
    { name: 'AI/ML', icon: '🧠', color: 'bg-gradient-to-br from-purple-500/20 to-purple-700/30' },
    { name: 'Cybersecurity', icon: '🛡️', color: 'bg-gradient-to-br from-blue-500/20 to-blue-700/30' },
    { name: 'UI/UX Design', icon: '🎨', color: 'bg-gradient-to-br from-pink-500/20 to-pink-700/30' },
    { name: 'Technical Writing', icon: '✍️', color: 'bg-gradient-to-br from-yellow-500/20 to-yellow-700/30' },
    { name: 'Mentoring', icon: '🧑‍🏫', color: 'bg-gradient-to-br from-green-500/20 to-green-700/30' }
  ];

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
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  return (
    <div id='about' className="relative min-h-screen text-white my-9 bg-white shadow shadow-gray-400 flex items-center justify-center overflow-hidden dark:bg-gray-900 rounded-3xl">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        {/* Floating particles as circles (radius animation) */}
        {[...Array(20)].map((_, i) => {
          // Generate random initial values for each particle
          const size = Math.random() * 10 + 2;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.1;
          const radius = size / 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left: `${x}%`,
                top: `${y}%`,
                opacity: opacity
              }}
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Animated Header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Full-stack developer crafting <span className="text-blue-300">digital experiences</span> with <span className="text-purple-300">2 years</span> of hands-on expertise
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-start"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            variants={fadeIn}
          >
            {/* Bio Card */}
            <motion.div 
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl"
              whileHover={cardHover}
              transition={{ type: "spring" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  My Developer Journey
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Transitioning from Laravel to tech, I've spent <span className="text-purple-300 font-medium">2 years</span> mastering full-stack development, delivering <span className="text-blue-300 font-medium">3+ projects</span> and contributing to <span className="text-green-300 font-medium">3 open-source</span> initiatives.
                </p>
                <p>
                  I specialize in bridging <span className="text-yellow-300">frontend aesthetics</span> with <span className="text-green-300">backend robustness</span>, particularly passionate about performance optimization and clean architecture.
                </p>
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div 
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl"
              whileHover={cardHover}
              transition={{ type: "spring" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  My Passions
                </h2>
              </div>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {interests.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className={`flex items-center gap-3 px-4 py-3 ${item.color} rounded-xl border border-gray-600/30 cursor-default backdrop-blur-sm`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-gray-100">{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-8"
            variants={fadeIn}
          >
            {/* Tech Stack Card */}
            <motion.div 
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl"
              whileHover={cardHover}
              transition={{ type: "spring" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                  animate={{
                    y: [-3, 3, -3],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Tech Arsenal
                </h2>
              </div>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={staggerContainer}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border border-gray-600/30 bg-gradient-to-br ${tech.color}/20 ${tech.color}/30`}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-gray-100">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div 
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl"
              whileHover={cardHover}
              transition={{ type: "spring" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Development Philosophy
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                {[
                  "Build scalable solutions, not just working code",
                  "Prioritize maintainability and documentation",
                  "Learn through teaching and open-source contribution",
                  "Embrace challenges as growth opportunities",
                  "User experience drives technical decisions"
                ].map((item, index) => (
                  <motion.p 
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="text-purple-400 mt-1 group-hover:text-yellow-300 transition-colors"
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: {
                          delay: index * 0.3,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      ▹
                    </motion.span>
                    <span>{item}</span>
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;