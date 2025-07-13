import { useEffect, useState } from 'react';

const InternshipExperience = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const internships = [
    {
      title: "Software Intern",
      company: "Nxweb",
      responsibilities: [
        "Hands-on experience in software development",
        "ocusing on full-stack technologies including",
        "MongoDB, Express.js, React.js, and Node.js.",
        "Implemented responsive design"
      ],
      skills: ["Html5", "CSS3","Javascript","React.Js"]
    },
    {
      title: "Frontend Developer",
      company: "NexCap",
      responsibilities: [
        "In-depth training in frontend development",
        "covering React.js, Redux, and building modern",
        "scalable web applications",
        "Integrated third-party APIs"
      ],
      skills: ["HTML5","Tailwindcss", "JavaScript", "React"]
    }
  ];

  useEffect(() => {
    // Animate each card in sequence
    const timers = internships.map((_, index) => {
      return setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 300);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          My <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Internships</span>
        </h2>
        <p className="text-gray-600">Professional experiences that shaped my skills</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {internships.map((internship, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg p-6 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-1.5rem)] transition-all duration-500 ease-out transform ${
              visibleCards.includes(index)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ minWidth: '300px', maxWidth: '600px', flex: '1' }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-1">{internship.title}</h2>
            <h3 className="text-lg text-blue-600 mb-4">{internship.company}</h3>
            
            <ul className="mb-6 space-y-2">
              {internship.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipExperience;