import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-4 pt-20">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-primary opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaCode />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl text-primary opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaRocket />
      </motion.div>

      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="flex-1">
          <div className="flex justify-center">
            <motion.div
              className="avatar"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-64 h-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Nhel Sopheak"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-primary mb-4"
            variants={itemVariants}
          >
            Nhel Sopheak
          </motion.h1>
          
          <motion.p
            className="text-2xl lg:text-3xl text-base-content mb-6"
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            className="text-lg text-base-content/70 mb-8 max-w-xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Building beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center lg:justify-start mb-8"
            variants={itemVariants}
          >
            <a
              href="https://github.com"
              className="btn btn-circle btn-primary shadow-lg hover:shadow-xl"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://t.me/nhelsopheak"
              className="btn btn-circle btn-info shadow-lg hover:shadow-xl"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="veizei95@gmail.com"
              className="btn btn-circle btn-success shadow-lg hover:shadow-xl"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="btn btn-primary btn-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
