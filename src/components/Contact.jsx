import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// hello
export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
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

  return (
    <div className="py-20 bg-base-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-primary mb-4 text-center"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a question or want to work together? I'd love to hear from you!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FaEnvelope,
                title: 'Email',
                value: 'nhelsopheak@gmail.com',
                link: 'mailto:hello@gmail.com',
              },
              {
                icon: FaPhone,
                title: 'Phone',
                value: '0889717682',
                link: 'tel:+15551234567',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Location',
                value: 'chrouy chongvar, phnom penh,  cambodia',
                link: '#',
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.link}
                  className="card bg-base-100 shadow-lg hover:shadow-2xl text-center"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="card-body items-center justify-center">
                    <Icon className="text-4xl text-primary mb-4" />
                    <p className="text-sm text-base-content/70">{contact.title}</p>
                    <p className="font-semibold text-base-content">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="card bg-base-100 shadow-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="card-body">
              <h3 className="card-title text-primary mb-6">Send me a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full h-32"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
