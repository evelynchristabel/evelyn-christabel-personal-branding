import React from "react";
import { motion } from "motion/react";
import { Award, Users, Clock, Zap } from "lucide-react";
import { PROJECTS_DATA } from "@/src/constants/projects";

export default function Portfolio() {
  const skills = [
    { name: "Leadership", icon: Award, color: "bg-pastel-yellow" },
    { name: "Communication", icon: Zap, color: "bg-pastel-pink" },
    { name: "Teamwork", icon: Users, color: "bg-pastel-blue" },
    { name: "Time Management", icon: Clock, color: "bg-pastel-purple" },
    { name: "Adaptability", icon: Zap, color: "bg-pastel-green" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-32">
      {/* Skills Section */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">My Skills</h2>
          <p className="text-gray-500">Things I'm good at!</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 5 : -5 }}
              className={`p-6 rounded-3xl glass flex flex-col items-center gap-4 min-w-[160px] ${skill.color} border-none shadow-sm`}
            >
              <div className="p-3 rounded-2xl bg-white/80 text-gray-700">
                <skill.icon size={32} />
              </div>
              <span className="font-bold text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
          <p className="text-gray-500">A showcase of my work and creativity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <img
                  src={project.images[0] || "https://picsum.photos/seed/project/800/600"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-pink-500 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">{project.description}</p>
                
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {project.images.slice(1).map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" 
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
