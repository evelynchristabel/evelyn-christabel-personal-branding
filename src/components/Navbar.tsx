import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className="text-pink-400"
          >
            <Heart fill="currentColor" size={24} />
          </motion.div>
          <span className="font-bold text-lg tracking-tight text-gray-700 group-hover:text-pink-500 transition-colors">
            Evelyn.
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-pink-500",
                location.pathname === item.path ? "text-pink-500" : "text-gray-500"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-400 rounded-full"
                />
              )}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="text-sm font-medium text-gray-500 hover:text-pink-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
