import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from './theme-provider'; // adjust path if needed

const About = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.to('.floating-circle', {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 6,
        ease: 'sine.inOut',
      });

      gsap.to('.animated-dot', {
        scale: 1.2,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut',
      });

      gsap.to('.rotate-dot', {
        rotate: 360,
        repeat: -1,
        duration: 10,
        ease: 'linear',
      });

      gsap.to('.bounce-dot', {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
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
    { name: 'Git', icon: '🔀', color: 'from-red-400 to-red-600' },
  ];

  const interests = [
    { name: 'Open Source', icon: '❤️', color: 'bg-gradient-to-br from-red-500/20 to-red-700/30' },
    { name: 'AI/ML', icon: '🧠', color: 'bg-gradient-to-br from-purple-500/20 to-purple-700/30' },
    { name: 'Cybersecurity', icon: '🛡️', color: 'bg-gradient-to-br from-blue-500/20 to-blue-700/30' },
    { name: 'UI/UX Design', icon: '🎨', color: 'bg-gradient-to-br from-pink-500/20 to-pink-700/30' },
    { name: 'Technical Writing', icon: '✍️', color: 'bg-gradient-to-br from-yellow-500/20 to-yellow-700/30' },
    { name: 'Mentoring', icon: '🧑‍🏫', color: 'bg-gradient-to-br from-green-500/20 to-green-700/30' },
  ];

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative min-h-screen text-white my-9 bg-white shadow shadow-gray-400 flex items-center justify-center overflow-hidden dark:bg-gray-900 rounded-3xl"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 10 + 2;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.1;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20 floating-circle"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left: `${x}%`,
                top: `${y}%`,
                opacity,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer crafting <span className="text-blue-300">digital experiences</span> with <span className="text-purple-300">2 years</span> of hands-on expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Developer Journey Card */}
            <div className="bg-gray-300 border-gray-200 dark:bg-gray-800/30 border dark:border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animated-dot" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  My Developer Journey
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Transitioning from Laravel to tech, I've spent <span className="text-purple-500 dark:text-purple-300 font-medium">2 years</span> mastering full-stack development, delivering <span className="text-blue-500 dark:text-blue-300 font-medium">3+ projects</span> and contributing to <span className="text-green-500 dark:text-green-300 font-medium">3 open-source</span> initiatives.
                </p>
                <p>
                  I specialize in bridging <span className="text-yellow-600 dark:text-yellow-300">frontend aesthetics</span> with <span className="text-green-600 dark:text-green-300">backend robustness</span>, particularly passionate about performance optimization and clean architecture.
                </p>
              </div>
            </div>

            {/* Interests Card */}
            <div className="bg-gray-300 border-gray-200 dark:bg-gray-800/30 border dark:border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 rotate-dot" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  My Passions
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 ${item.color} rounded-xl border border-gray-600/30 cursor-default backdrop-blur-sm`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-gray-100">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-gray-300 border-gray-200 dark:bg-gray-800/30 border dark:border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 bounce-dot" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Tech Arsenal
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border border-gray-600/30 bg-gradient-to-br ${tech.color}/20 ${tech.color}/30`}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-gray-100">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-300 border-gray-200 dark:bg-gray-800/30 border dark:border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg shadow-xl fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animated-dot" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Development Philosophy
                </h2>
              </div>
              <div className="space-y-4 dark:text-gray-300 text-gray-700">
                {[
                  'Build scalable solutions, not just working code',
                  'Prioritize maintainability and documentation',
                  'Learn through teaching and open-source contribution',
                  'Embrace challenges as growth opportunities',
                  'User experience drives technical decisions',
                ].map((item, i) => (
                  <p key={i} className="flex items-start gap-3 group">
                    <span className="text-purple-400 mt-1 group-hover:text-yellow-300 transition-colors">▹</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
