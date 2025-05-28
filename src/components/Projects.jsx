import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Calendar, ArrowUpRight, Sparkles, Move } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Une plateforme e-commerce complète avec paiements Stripe, gestion des stocks et dashboard admin. Interface responsive et moderne.",
    shortDesc: "Plateforme e-commerce avec Stripe API",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mai 2023",
    github: "https://github.com",
    live: "https://demo-ecommerce.com",
    gradient: "from-blue-600 via-purple-600 to-blue-800",
    category: "Web App"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Générateur d'art IA utilisant OpenAI DALL-E avec interface React intuitive. Galerie personnelle et partage social intégré.",
    shortDesc: "Générer de l'art avec l'IA OpenAI DALL-E",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Août 2023",
    github: "https://github.com",
    live: "https://ai-art-gen.com",
    gradient: "from-purple-600 via-pink-600 to-red-600",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Application mobile complète avec plans d'entraînement personnalisés, suivi nutritionnel et communauté sociale.",
    shortDesc: "App mobile fitness avec suivi complet",
    tags: ["React Native", "Firebase", "Charts"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Jan 2023",
    github: "https://github.com",
    live: "https://fitness-app.com",
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    category: "Mobile"
  },
  {
    id: 4,
    title: "Portfolio Dashboard",
    description: "Dashboard analytics pour portfolio avec métriques de performance, A/B testing et insights visiteurs en temps réel.",
    shortDesc: "Dashboard analytics pour portfolio",
    tags: ["Next.js", "Tailwind", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Nov 2023",
    github: "https://github.com",
    live: "https://portfolio-dash.com",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    category: "Analytics"
  }
];

const DraggableCard = ({ project, index, onDragStart, onDragEnd, onDragOver, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    onDragStart(e, index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    onDragEnd(e);
  };

  return (
    <div
      ref={cardRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative cursor-move transition-all duration-700 transform-gpu ${
        isDragging 
          ? 'scale-105 rotate-3 opacity-80 z-50 shadow-2xl' 
          : isVisible 
            ? 'opacity-100 translate-y-0 hover:scale-105 hover:-translate-y-3 hover:rotate-1' 
            : 'opacity-0 translate-y-8'
      }`}
      style={{
        animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : '',
      }}
    >
      {/* Glowing background effect with pulse */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl transition-all duration-700 ${
        isHovered 
          ? 'opacity-30 blur-md animate-pulse' 
          : 'opacity-0 blur'
      }`}></div>
      
      {/* Floating particles effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Main card with breathing effect */}
      <div className={`relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500 ${
        isHovered ? 'shadow-2xl scale-102' : ''
      }`}>
        {/* Drag indicator with bounce */}
        <div className={`absolute top-4 right-4 z-20 bg-black/10 backdrop-blur-sm rounded-full p-2 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-110 animate-bounce' : 'opacity-0 scale-75'
        }`}>
          <Move className="w-4 h-4 text-white" />
        </div>

        {/* Category badge with slide animation */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${project.gradient} backdrop-blur-sm transition-all duration-500 ${
            isHovered ? 'scale-110 -translate-y-1' : ''
          }`}>
            {project.category}
          </span>
        </div>

        {/* Image section with multiple effects */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isHovered ? 'scale-125 rotate-2' : 'scale-110'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-opacity duration-500 ${
            isHovered ? 'opacity-40' : 'opacity-20'
          }`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Multiple sparkle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <Sparkles 
                key={i}
                className={`absolute w-4 h-4 text-white transition-all duration-700 ${
                  isHovered 
                    ? `opacity-100 scale-110 animate-pulse` 
                    : 'opacity-0 scale-75'
                }`}
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
          
          {/* Shimmer effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
            isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
          }`} style={{ transform: 'skewX(-45deg)' }}></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.shortDesc}
          </p>
          
          {/* Tags with stagger animation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span 
                key={tag} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-500 ${
                  isHovered 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white transform scale-105 -translate-y-1' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons with enhanced animations */}
          <div className="flex gap-3">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"></div>
              <Github className="w-4 h-4 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-500 relative z-10" />
              <span className="font-medium relative z-10">Code</span>
            </a>
            
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 group/btn relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-r ${project.gradient}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 animate-pulse"></div>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110 transition-all duration-500 relative z-10" />
              <span className="font-medium relative z-10">Live Demo</span>
            </a>
          </div>
        </div>

        {/* Dynamic hover overlay with ripple effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-700 pointer-events-none rounded-2xl ${
          isHovered ? 'opacity-10 scale-105' : 'opacity-0 scale-100'
        }`}></div>
        
        {/* Ripple effect on hover */}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${
          isHovered ? 'animate-ping opacity-20' : 'opacity-0'
        }`}>
          <div className={`absolute inset-4 rounded-xl bg-gradient-to-r ${project.gradient}`}></div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedItem, setDraggedItem] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = (e) => {
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedItem === null || draggedItem === dropIndex) return;
    
    const newProjects = [...projectList];
    const draggedProject = newProjects[draggedItem];
    
    // Remove dragged item
    newProjects.splice(draggedItem, 1);
    
    // Insert at new position
    newProjects.splice(dropIndex, 0, draggedProject);
    
    setProjectList(newProjects);
    setDraggedItem(null);
  };

  return (
    <section id='projects' className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 animate-spin" />
            Portfolio Interactif
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Découvrez mes créations et innovations. Glissez-déposez les cartes pour les réorganiser selon vos préférences !
          </p>
          
          <div className={`flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Move className="w-4 h-4 animate-pulse" />
            <span>Faites glisser les cartes pour les réorganiser</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectList.map((project, index) => (
            <DraggableCard
              key={project.id}
              project={project}
              index={index}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </div>

        {/* Bottom CTA with animation */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-110 hover:shadow-2xl transition-all duration-500 cursor-pointer group animate-bounce">
            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            <span>Voir tous les projets</span>
          </div>
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}