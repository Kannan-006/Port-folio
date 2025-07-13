import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen, FaDev } from 'react-icons/fa';

const Footer = ({ handleNavClick }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 bg-opacity-80 py-8">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Dev<span className="font-light">Folio</span>
            </a>
          </div>
          
          <div className="text-center md:text-left text-slate-400 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                    document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="social-icon" title="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="social-icon" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon" title="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" title="CodePen">
                <FaCodepen />
              </a>
              <a href="#" className="social-icon" title="Dev.to">
                <FaDev />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;