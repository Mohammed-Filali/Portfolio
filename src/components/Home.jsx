import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Profile from '../assets/Profile.jpg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const techIcons = ['⚛️', '🟢', '🔷', '📜', '🪄', '🐘', '🗄️', '🍃', '🐳', '🔀'];
  const bgIcons = [...techIcons, '💻', '🌐', '🔧', '📱', '🚀', '🔌', '💾', '📊'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center overflow-hidden dark:bg-white">
      {/* Full-screen animated tech background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgIcons.flatMap((icon, i) => (
          Array.from({ length: 3 }).map((_, j) => (
            <motion.div
              key={`${i}-${j}`}
              className="absolute text-xl md:text-2xl opacity-[0.1] hover:opacity-20 transition-opacity"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
                rotate: [0, Math.random() * 360],
                transition: {
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }
              }}
              whileHover={{
                opacity: 0.3,
                scale: 1.5,
                transition: { duration: 0.3 }
              }}
            >
              {icon}
            </motion.div>
          ))
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Profile picture */}
          <motion.div 
            className="relative group mb-12"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src={Profile} 
              alt="Mohammed Filali" 
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl transition-all duration-500 group-hover:border-purple-500 dark:text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
            <motion.div 
              className="absolute -inset-2 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div 
            className="text-center max-w-3xl"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.01 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                Mohammed Filali
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
              whileHover={{ scale: 1.01 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg"
              variants={fadeIn}
            >
              Crafting exceptional digital experiences with modern web technologies. 
              Specializing in <span className="text-blue-300">React</span>, <span className="text-green-300">Node.js</span>, 
              and <span className="text-purple-300">cloud architectures</span>.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-8"
            variants={fadeIn}
          >
            <motion.a 
              href="/projects"
              className="relative overflow-hidden group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 rounded-lg shadow-2xl" />
              <div className="relative flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-blue-400 group-hover:border-purple-500 transition-all duration-300">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🚀
                </motion.span>
                <span className="font-medium">View Projects</span>
              </div>
            </motion.a>

            <motion.a 
              href="/contact"
              className="relative overflow-hidden group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-blue-500/20 rounded-lg shadow-lg" />
              <div className="relative flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-400 group-hover:text-white transition-all duration-300">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ✉️
                </motion.span>
                <span className="font-medium">Contact Me</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive floating tech stack */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-[0.1] hover:opacity-30 transition-opacity cursor-default"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 360],
              transition: {
                duration: Math.random() * 30 + 30,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }
            }}
            whileHover={{
              opacity: 0.5,
              scale: 1.8,
              transition: { duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}