import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { name: 'Database', icon: FaDatabase, color: 'text-gray-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  ];

  return (
    <div className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
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
            My Skills
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="card bg-base-100 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-primary transition-colors"
                  variants={itemVariants}
                  whileHover={{ y: -8, rotateZ: 1 }}
                >
                  <div className="card-body items-center justify-center text-center">
                    <motion.div
                      whileHover={{ rotate: 20, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className={`text-5xl mb-4 ${skill.color}`} />
                    </motion.div>
                    <p className="font-semibold text-base-content">{skill.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
