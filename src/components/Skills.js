import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-xl" />,
      skills: [
        { name: "React.js", percentage: 70 },
        { name: "JavaScript (ES6+)", percentage: 75 },
        { name: "HTML5 & CSS3", percentage: 95 },
        { name: "Tailwind CSS", percentage: 85 },
        { name: "Responsive Web Design",percentage:85 },
      ],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", percentage: 90 },
        { name: "Express.js", percentage: 85 },
        { name: "MongoDB", percentage: 80 },
        { name: "REST API Design", percentage: 85 }
      ],
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-xl" />,
      skills: [
        { name: "Git & GitHub", percentage: 90 },
        { name: "Webpack/Vite", percentage: 85 },
        { name: "Vs Code", percentage: 75 },
        { name: "Figma", percentage: 80 },
        { name: "Wireframing & Prototyping", percentage: 80 },
        { name: "Photoshop", percentage: 50 },
      ],
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="section py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          I specialize in the MERN stack with expertise in various modern web technologies and tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-2 min-h-96">
          {skillsData.map((category, index) => (
            <div 
              key={category.title} 
              className="card p-6" 
              data-aos="flip-left" 
              data-aos-delay={(index + 1) * 100}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-16">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="skill-bar" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;