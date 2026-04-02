import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Decorative elements data - much larger now!
  const decorations = [
    { icon: "🌸", size: "text-9xl", top: "5%", left: "-5%", delay: 0, opacity: 0.15 },
    { icon: "🎀", size: "text-[12rem]", top: "10%", left: "75%", delay: 1, opacity: 0.1 },
    { icon: "🌼", size: "text-8xl", top: "40%", left: "-2%", delay: 2, opacity: 0.12 },
    { icon: "✨", size: "text-6xl", top: "55%", left: "85%", delay: 0.5, opacity: 0.2 },
    { icon: "🌸", size: "text-[10rem]", top: "75%", left: "-8%", delay: 1.5, opacity: 0.15 },
    { icon: "🎀", size: "text-9xl", top: "80%", left: "70%", delay: 2.5, opacity: 0.1 },
    { icon: "✨", size: "text-7xl", top: "25%", left: "10%", delay: 3, opacity: 0.15 },
    { icon: "🌼", size: "text-[11rem]", top: "65%", left: "82%", delay: 1.2, opacity: 0.12 },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Giant Background Shapes */}
      <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-pastel-pink/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] bg-pastel-blue/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating Giant Cute Elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {decorations.map((dec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [dec.opacity, dec.opacity * 1.5, dec.opacity],
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: dec.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${dec.size} select-none filter blur-[2px] md:blur-none`}
            style={{ top: dec.top, left: dec.left }}
          >
            {dec.icon}
          </motion.div>
        ))}
      </div>

      <Navbar />
      
      <main className="flex-grow pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}
