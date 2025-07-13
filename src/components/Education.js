import EducationCard from './EducationCard';
import jj from "../images/jj.jpeg";
import jjc from "../images/jjc.webp"
const Education = () => {
  const educationData = [
    {
      collegeName: 'J.J. College of Arts and Science (Autonomous), Pudukkottai',
      degree: 'Master of Computer Applications',
      duration: '2023 - 2025',
      cgpa: '7.96',
      location: 'Pudukkottai, Tamil Nadu',
      image: jj, 
      mapLink: 'https://maps.app.goo.gl/J1NCESZsi6mK2XRW6'
    },
    {
      collegeName: 'J.J. College of Arts and Science (Autonomous), Pudukkottai',
      degree: 'BSC Computer Science',
      duration: '2020 - 2023',
      cgpa: '7.70',
      location: 'Pudukkottai, Tamil Nadu',
      image: jjc, 
      mapLink: 'https://maps.app.goo.gl/J1NCESZsi6mK2XRW6'
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-900" id="education">
      <h2 className="text-5xl font-bold text-center text-white">Education</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-40">
        {educationData.map((edu, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
            <EducationCard
              collegeName={edu.collegeName}
              degree={edu.degree}
              duration={edu.duration}
              cgpa={edu.cgpa}
              location={edu.location}
              image={edu.image}
              mapLink={edu.mapLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;