import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import wordbattle from "../images/wordbattle.png"
import netflix from "../images/netflix.png"
import synonym from "../images/synonym.png"
import nextweb from "../images/nextweb.png"
import weather from "../images/weather.png"
const Projects = () => {
  const projects = [
    {
      title: "Word Battle",
      description: "A fast-paced multiplayer word game where players compete in real-time to create the highest-scoring words.",
      image: wordbattle,
      tags: ["React", "Firebase","Redux","hosted on Firebase."],
      demoLink: "https://word-battle-38789.web.app/",
      codeLink: "#"
    },
        {
      title: "Netflix-Clone",
      description: "A responsive streaming platform replica with movie showcases, trailers, and sleek UI.",
      image: netflix,
      tags: ["React","Tailwindcss","Node.js","Vercel for hosting."],
      demoLink: "https://netflix-clone-jade-eight.vercel.app/",
      codeLink: "https://github.com/Kannan-006/Netflix-clone"
    },
 
       {
      title: "Synonym Antonym Game",
      description: "Synonym Speed Game: A fast-paced word challenge where players race to match synonyms against the clock!",
      image: synonym,
      tags: ["React", "Tailwindcss","Framer Motion","Vercel for deployment."],
      demoLink: "https://synonym-speed-game.vercel.app/",
      codeLink: "#"
    },
        {
      title: "NextWeb",
      description: "A modern, fast web application built with React.js for seamless user experiences",
      image: nextweb,
      tags: ["React", "Tailwindcss","and Vercel for deployment"],
      demoLink: "https://next-web-czid.vercel.app/",
      codeLink: "https://github.com/Kannan-006/NextWeb"
    },
       {
      title: "Weather",
      description: "A sleek, real-time weather app with dynamic forecasts and location-based updates.",
      image: weather,
      tags: ["React", "Tailwindcss","OpenWeatherMap API","Vercel for deployment"],
      demoLink: "https://weather-4fuu.vercel.app/",
      codeLink: "https://github.com/Kannan-006/Weather"
    },
  ];

  return (
    <section id="projects" className="section py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          My <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent projects built with the MERN stack and modern web technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card overflow-hidden" 
              data-aos="zoom-in" 
              data-aos-delay={(index + 1) * 100}
            >
              <div className="relative overflow-hidden h-80 cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover  transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-700 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoLink} target='_blank' rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    <FaExternalLinkAlt className="inline mr-2" /> Demo
                  </a>
                  <a href={project.codeLink} target='_blank' rel="noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                    <FaGithub className="inline mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
   
      </div>
    </section>
  );
};

export default Projects;