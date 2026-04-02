import { motion } from "motion/react";
import { Trophy, Music, Star, Users, GraduationCap } from "lucide-react";

export default function Home() {
  const experiences = [
    {
      icon: Trophy,
      title: "1st Winner - Phygital Challenge",
      desc: "Communication Department Petra Christian University",
      color: "bg-pastel-yellow"
    },
    {
      icon: Music,
      title: "Winner of Category (1st Gold Medalist)",
      desc: "Sound of the Seasons Choir Competition, by Bandung Choral Society",
      color: "bg-pastel-pink"
    },
    {
      icon: Star,
      title: "Gold Medalist",
      desc: "Karangturi International Choral Competition, by Karangturi High School (Semarang)",
      color: "bg-pastel-blue"
    },
    {
      icon: Users,
      title: "Top 10 - DBL Dance Competition",
      desc: "DBL Arena",
      color: "bg-pastel-purple"
    },
    {
      icon: GraduationCap,
      title: "Team Leader & Class Leader",
      desc: "Led multiple school projects including Fr.Artz 2026 exhibition",
      color: "bg-pastel-green"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pb-20 space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="relative inline-block"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full glass p-2 mx-auto overflow-hidden">
            <img 
              src="public/uploads/foto profil diri.jpeg" 
              alt="Evelyn Christabel"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-4 -right-4 text-4xl"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-4 -left-4 text-4xl"
          >
            ✨
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-gray-800"
          >
            Evelyn Christabel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-pink-500 italic"
          >
            "Passionate About Learning, Committed to Excellence."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-pastel-blue text-blue-600 text-sm font-bold border border-blue-200"
          >
            Currently Studying at SMAK Frateran Surabaya
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-pink-400">About Me</span>
            <span className="h-1 w-20 bg-pink-200 rounded-full" />
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-semibold">
            I am a cheerful and ambitious individual with a strong passion for personal growth. 
            I enjoy exploring new opportunities and constantly challenging myself to learn and improve.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-semibold">
            I am highly adaptable and able to work effectively both independently and as a part of a team. 
            With a proactive mindset, strong sense of responsibility, and a commitment to excellence, 
            I strive to achieve the best results in every task I undertake.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Star size={120} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-pink-500">My Passion</h3>
          <p className="text-gray-600 leading-relaxed">
            Passionate about technology and coding, focused on building impactful digital solutions. 
            I love how creativity meets logic in the world of development!
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">My Journey</h2>
          <p className="text-gray-500">A collection of my achievements and experiences</p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className={cn(
                "p-6 rounded-2xl flex items-start gap-6 border border-white/50 shadow-sm transition-all",
                exp.color
              )}
            >
              <div className="p-3 rounded-xl bg-white/60 text-gray-700 shadow-sm">
                <exp.icon size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-gray-800">{exp.title}</h3>
                <p className="text-gray-600">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
