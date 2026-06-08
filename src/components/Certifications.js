import { FaExternalLinkAlt } from 'react-icons/fa';
import infosys from "../images/infosys cert.jpg"
import Geekster from "../images/Geekster cert.jpg"
import nptel from "../images/swayam certificate.png"
import tcs from "../images/tcs certificate.png"
import ktnest from "../images/ktnest.png"

const Certifications = () => {
  const certifications = [
    {
      title: "Time Management",
      issuer: "Infosys",
      date: "Issued: August 2024",
      description: "Mastering time management techniques to enhance productivity, prioritize tasks, and achieve goals effectively.",
      image: infosys,
      verifyLink:infosys
    },
    {
      title: "SQL and DataBase Management",
      issuer: "Geekster",
      date: "Issued: April 2024",
      description: "Comprehensive training in SQL and database management, focusing on designing, querying, and optimizing relational databases.",
      image: Geekster,
      verifyLink: Geekster
    },
     {
      title: "Product and Brand Management",
      issuer: "NPTEL",
      date: "Issued: July 2024",
      description: "Project Management, Strategic thinking, Market Research.",
      image: nptel,
      verifyLink: nptel
    },
         {
      title: "Soft Skills",
      issuer: "TCS ION",
      date: "Issued: August 2024",
      description: "interpersonal abilities like communication, teamwork, and adaptability that enhance professional and personal success",
      image: tcs,
      verifyLink: tcs
    },
           {
      title: "React",
      issuer: "Ktnest",
      date: "Issued: June 2025",
      description: "interpersonal abilities like communication, teamwork, and adaptability that enhance professional and personal success",
      image: ktnest,
      verifyLink: ktnest
    }
  ];

  return (
    <section id="certifications" className="section py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          My <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Professional certifications and courses I've completed to enhance my skills and knowledge.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title} 
              className="card p-6 flex flex-col md:flex-row gap-6" 
              data-aos="fade-up" 
              data-aos-delay={(index + 1) * 100}
            >
              <div className="md:w-1/3 flex-shrink-0">
                <img src={cert.image} alt={cert.title} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-slate-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-slate-500 mb-4">{cert.date}</p>
                <p className="text-slate-400">{cert.description}</p>
                <a 
                  href={cert.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaExternalLinkAlt className="inline mr-2" /> View the certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
