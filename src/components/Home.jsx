import { useEffect, useState, useRef } from 'react';
import { useTheme } from './theme-provider';
import gsap from 'gsap';
import Profile from '../assets/Profile.jpg';

const backgroundIcons = ['💻', '🌐', '🔧', '📱', '🚀', '🔌', '💾', '📊', '⭐', '💡', '🎯', '🔥'];

export default function Home() {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // GSAP Floating Animation for Icons
    iconRefs.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: -15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: Math.random() * 2,
      });
    });

    // GSAP Fade-in Animation for Content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.2,
        }
      );
    }

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-slate-900 text-white'
          : 'bg-white text-gray-900'
      }`}
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
            ${theme === 'dark'
              ? 'rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 30%, transparent 70%'
              : 'rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%'}),
          ${theme === 'dark'
            ? 'linear-gradient(135deg, #0f172a, #1e1b4b, #581c87, #312e81)'
            : 'linear-gradient(135deg, #ffffff, #f8fafc, #e0e7ff, #ddd6fe)'}
        `,
      }}
    >
      {/* Aurora effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(45deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))'
              : 'linear-gradient(45deg, rgba(139,92,246,0.05), rgba(59,130,246,0.05))',
          }}
        />
      </div>

      {/* Floating icons with GSAP */}
      <div className="absolute inset-0 z-0">
        {backgroundIcons.map((icon, index) => {
          const top = `${Math.random() * 90}%`;
          const left = `${Math.random() * 90}%`;
          const ref = (el) => (iconRefs.current[index] = el);
          return (
            <div
              key={index}
              ref={ref}
              className={`absolute text-3xl transition-transform duration-500 ${
                theme === 'dark'
                  ? 'text-purple-300/20 hover:text-purple-400'
                  : 'text-purple-600/10 hover:text-purple-500'
              }`}
              style={{
                top,
                left,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 py-16"
      >
        {/* Profile image */}
        <div className="mb-10">
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 shadow-xl group relative transition duration-500 border-purple-400/40">
            <img
              src={Profile}
              alt="Mohammed Filali"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full group-hover:bg-purple-500/10 transition-all duration-300" />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Mohammed Filali</h1>
        <h2
          className={`typing-effect text-2xl md:text-3xl font-semibold ${
            theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
          }`}
        >
          Full-Stack Developer
        </h2>

        {/* Description */}
        <div
          className={`glass-morphism mt-8 px-6 py-5 max-w-xl rounded-xl shadow-lg backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-slate-800/50 text-gray-200 border border-purple-500/20'
              : 'bg-white/50 text-gray-800 border border-purple-500/10'
          }`}
        >
          <p className="leading-relaxed text-lg">
            Crafting exceptional digital experiences with modern tech.
            Specializing in full-stack web development, cloud solutions,
            and interactive interfaces.
          </p>
        </div>
      </div>

      {/* Typing Animation */}
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: ${theme === 'dark' ? '#a855f7' : '#8b5cf6'}; }
        }

        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid ${theme === 'dark' ? '#a855f7' : '#8b5cf6'};
          animation: typing 3s steps(30, end), blink 1s step-end infinite;
          display: inline-block;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
