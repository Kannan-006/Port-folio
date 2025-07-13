import { FaHome, FaBriefcase, FaLaptopCode, FaProjectDiagram, FaAward, FaEnvelope, FaBars, FaFileAlt,FaUniversity } from 'react-icons/fa';

const Sidebar = ({ activeSection, handleNavClick }) => {
  const navLinks = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'education', label: 'Education', icon: <FaUniversity /> },
    { id: 'skills', label: 'Skills', icon: <FaLaptopCode /> },  
    { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },  
    { id: 'certifications', label: 'Certifications', icon: <FaAward /> },
    { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },  
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <aside className="fixed top-24 right-0 h-full bg-slate-900 z-50 py-4 px-4 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-6">
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-3xl text-white hover:text-emerald-400 transition-colors p-4 rounded-full ${
                activeSection === link.id ? 'bg-emerald-400 text-white' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
                document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' });
              }}>
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
