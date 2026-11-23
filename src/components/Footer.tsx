import { Mail, Instagram, Github } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:evelynchristabel18@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://instagram.com/lyn_elynn18", label: "Instagram" },
    { icon: Github, href: "https://github.com/evelynchristabel", label: "Github" },
  ];

  return (
    <footer id="contact" className="py-20 px-6 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-800"
        >
          Let's Connect! ✨
        </motion.h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-2xl glass text-pink-400 hover:text-pink-500 hover:bg-white transition-all"
            >
              <link.icon size={28} />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="space-y-2 text-gray-500 text-sm">
          <p>© 2026 Evelyn Christabel. Built with love and pastels.</p>
          <p>Petra Christian University</p>
        </div>
      </div>
    </footer>
  );
}
