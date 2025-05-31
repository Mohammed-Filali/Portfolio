import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, ArrowUpRight, Sparkles, Move } from 'lucide-react';

// Example projects
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

const DraggableCard = ({ project, index, onDragStart, onDragEnd, onDragOver, onDrop, isDragging }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative group transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isDragging ? 'scale-105 rotate-2 z-50' : 'hover:scale-105'} ${
        isHovered ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg'
      }`}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300`}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        {/* Image container with parallax effect */}
        <div className="relative overflow-hidden h-48 transform transition-transform duration-700 group-hover:scale-110">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            {project.category}
          </div>
        </div>
        
        <div className="p-6 relative z-20">
          <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-yellow-200">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 mb-4 line-clamp-2">
            {project.shortDesc}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex justify-between items-center text-white/80 text-sm">
            <span className="flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <div className="flex items-center gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:scale-125 transition-all duration-300 p-1 rounded-full hover:bg-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:scale-125 transition-all duration-300 p-1 rounded-full hover:bg-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <Move className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', '');
  };

  const handleDragEnd = () => {
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
    newProjects.splice(draggedItem, 1);
    newProjects.splice(dropIndex, 0, draggedProject);

    setProjectList(newProjects);
    setDraggedItem(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-blue-400/20' : i % 3 === 1 ? 'bg-purple-400/20' : 'bg-pink-400/20'
            }`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Large background shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 animate-spin" />
            Portfolio Interactif
            <ArrowUpRight className="w-4 h-4" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            Mes Projets
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            Explorez mes réalisations avec des effets interactifs, animations élégantes et une expérience utilisateur immersive. 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> Glissez-déposez pour réorganiser!</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectList.map((project, index) => (
            <DraggableCard
              key={project.id}
              project={project}
              index={index}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              isDragging={draggedItem === index}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}