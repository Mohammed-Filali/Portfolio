import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Built with React, Node.js, and Stripe API for seamless payments.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3",
    date: "May 2023",
    github: "#",
    live: "#",
    accentColor: "bg-blue-500" // Unique color per project
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Generates art using OpenAI's DALL-E model with React frontend.",
    tags: ["React", "OpenAI", "Python"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3",
    date: "Aug 2023",
    github: "#",
    live: "#",
    accentColor: "bg-purple-500"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Mobile app with workout plans and nutrition logging.",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
    date: "Jan 2023",
    github: "#",
    live: "#",
    accentColor: "bg-green-500"
  }
];

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            My Work
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Selected projects I've built with modern technologies
          </motion.p>
        </motion.div>

        {/* Modern Project Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Accent Border */}
              <div className={`absolute top-0 left-0 w-full h-1 ${project.accentColor}`}></div>

              {/* Project Image with Parallax Effect */}
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FiCalendar />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 border-t pt-4">
                  <a 
                    href={project.github} 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}