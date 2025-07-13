import { useState } from 'react';
import { FaHome, FaBriefcase, FaLaptopCode, FaAward, FaEnvelope, FaFileAlt, FaUniversity } from 'react-icons/fa';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: {
      icon: <FaHome />,
      component: <Home/>
    },
    education: {
      icon: <FaUniversity />,
      component: <Education/>
    },
    skills: {
      icon: <FaLaptopCode />,
      component: <Skills/>
    },
    projects: {
      icon: <FaBriefcase />,
      component: <Projects/>
    },
    certifications: {
      icon: <FaAward />,
      component: <Certifications/>
    },
    resume: {
      icon: <FaFileAlt />,
      component: <Resume/>
    },
    contact: {
      icon: <FaEnvelope />,
      component: <Contact/>
    }
  };

  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {sections[activeSection].component}
      </div>
      {/* Right Side Navigation - Centered Vertically */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-16 bg-gray-800 flex flex-col items-center py-8 space-y-6 rounded-l-lg">
        {Object.entries(sections).map(([key, { icon }]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`p-3 rounded-full text-white hover:bg-gray-700 transition-colors ${
              activeSection === key ? 'bg-emerald-500' : ''
            }`}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;