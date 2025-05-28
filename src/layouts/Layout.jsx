import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({ children }) {
    return (
        <div className="w-full flex min-h-screen flex-col bg-gray-50">
            {/* Modern Sticky Header with Glass Morphism Effect */}
            <header className="w-full z-50 fixed backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200 dark:bg-black" >
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    {/* Logo with gradient text */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">MF</span>
                        </div>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-bold dark:text-black">
                            Mohammed Filali
                        </h1>
                    </div>

                    {/* Navigation with hover effects */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm group"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                                
                            ))}
                            <li><ModeToggle /></li>
                        </ul>

                    </nav>

                    {/* Mobile menu button */}
                    <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main Content with subtle gradient */}
            <main className=" bg-gray-800 w-full flex-grow pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>
            
            {/* Modern Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Branding */}
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">MF</span>
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                                Mohammed Filali
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                                    aria-label={social}
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Mohammed Filali. All rights reserved.
                        </p>
                        <p className="text-xs mt-2 text-gray-400">
                            Crafted with <span className="text-red-500">♥</span> and attention to detail
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}