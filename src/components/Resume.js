import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const resumeImage = '/Resume.png'; 

  return (
    <section id="Resume" className="section py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          My <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Resume</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-500 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Here's my professional resume. You can download it below.
        </p>

        <div className="flex flex-col items-center">
          <div className="card w-full max-w-3xl overflow-hidden" data-aos="zoom-in">
            <img 
              src={resumeImage} 
              alt="My Professional Resume" 
              className="w-full h-auto object-contain border border-gray-200 dark:border-gray-700"
            />
          </div>
          <a
            href={resumeImage}
            download="Kannan.png"  
            className="mt-8 neon-button flex items-center gap-2"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};


export default Resume;