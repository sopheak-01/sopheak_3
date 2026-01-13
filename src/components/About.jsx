import { motion } from 'framer-motion';

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-primary mb-10 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Who I Am
              </h3>
              <p className="text-base-content/80 leading-relaxed mb-4">
                I'm a passionate web developer with a strong foundation in both frontend 
                and backend development. I love creating intuitive and visually appealing 
                web applications that solve real-world problems.
              </p>
              <p className="text-base-content/80 leading-relaxed">
                With experience in modern JavaScript frameworks and a keen eye for design, 
                I strive to deliver high-quality code and exceptional user experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                My Approach
              </h3>
              <ul className="space-y-3">
                {[
                  'Writing clean, maintainable code',
                  'Responsive design principles',
                  'User-centered approach',
                  'Continuous learning',
                  'Attention to detail',
                  'Problem-solving mindset',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <span className="badge badge-primary">✓</span>
                    <span className="text-base-content/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
