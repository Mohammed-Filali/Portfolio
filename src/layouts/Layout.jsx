import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Sparkles,
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useTheme } from '@/components/theme-provider';

export default function FullPageLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Dribbble', icon: Dribbble, href: '#' },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30 text-gray-900 dark:text-gray-100">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse bg-gradient-to-r from-blue-400/20 to-purple-500/20 dark:from-blue-900/40 dark:to-purple-900/40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 bg-gradient-to-r from-purple-400/15 to-pink-500/15 dark:from-purple-900/30 dark:to-pink-900/30" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-2xl animate-pulse delay-500 bg-gradient-to-r from-cyan-400/25 to-blue-500/25 dark:from-cyan-900/35 dark:to-blue-900/35" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              theme === 'light'
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.3) 0%, transparent 50%), linear-gradient(rgba(147, 197, 253, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 197, 253, 0.05) 1px, transparent 1px)`
                : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 20px 20px, 20px 20px',
          }}
        />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-2xl border-b border-white/20 dark:border-gray-800/40'
          : 'backdrop-blur-md bg-white/50 dark:bg-gray-900/50'
      }`}>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 dark:from-blue-700 dark:via-purple-800 dark:to-pink-700">
                    <span className="text-white font-bold text-sm">MF</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 dark:from-blue-800 dark:via-purple-700 dark:to-pink-800" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-spin" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                    Mohammed Filali
                  </h1>
                  <div className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Creative Developer
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="relative px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group rounded-lg"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 dark:from-blue-900/20 dark:to-purple-900/20" />
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 dark:from-blue-400 dark:to-purple-400" />
                  </a>
                ))}
                <div className="ml-2 sm:ml-4">
                  <ModeToggle />
                </div>
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`} />
                  <X className={`absolute w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-between items-center px-4 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                <ModeToggle />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20">
        <div className="relative backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-t border-white/20 dark:border-gray-800/20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Branding */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 dark:from-blue-700 dark:via-purple-800 dark:to-pink-700">
                  <span className="text-white font-bold text-xs">MF</span>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  Mohammed Filali
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Creative Developer & Designer
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center">
              <div className="flex space-x-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm dark:from-blue-900 dark:to-purple-900" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Stay updated with my latest work
              </div>
              <div className="flex max-w-sm mx-auto md:ml-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-100"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 dark:from-blue-700 dark:to-purple-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 text-center text-sm text-gray-500 dark:text-gray-400 pb-6">
            &copy; {new Date().getFullYear()} Mohammed Filali. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}