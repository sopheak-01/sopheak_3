import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFire } from 'react-icons/fa';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with API integration and animations',
      tags: ['React', 'API', 'Chart.js', 'Framer Motion'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="card bg-base-200 shadow-lg hover:shadow-2xl border-l-4 border-primary relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="absolute -top-10 -right-10 text-6xl text-primary opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <FaFire />
                </motion.div>
                <div className="card-body relative z-10">
                  <h3 className="card-title text-primary text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base-content/80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="badge badge-outline badge-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-end gap-2">
                    <a
                      href={project.github}
                      className="btn btn-sm btn-ghost"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.link}
                      className="btn btn-sm btn-primary"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
