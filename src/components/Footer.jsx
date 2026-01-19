import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Nhel Sopheak</h3>
              <p className="text-base-content/70">
                Full Stack Web Developer crafting beautiful digital experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-base-content/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Follow</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  className="text-2xl hover:text-primary transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://t.me/nhelsopheak"
                  className="text-2xl hover:text-primary transition"
                  aria-label="Telegram"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-2xl hover:text-primary transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-base-content/20 pt-8 text-center text-base-content/70">
            <p>
              © {currentYear} Nhel Sopheak. All rights reserved. | Built with React
              & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
