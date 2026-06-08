import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import profile from "../images/prof.jpg";

const Contact = () => {
  return (
    <section id="contact" className="section py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p
          className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Have a project in mind or want to collaborate? Feel free to reach out
          to me!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              className="h-[500px] w-full object-cover md:h-[700px] rounded-3xl"
              src={profile}
              alt="Kannan Profile"
            />
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <div className="card p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Email</p>
                    <a
                      href="mailto:kannannagappan55@gmail.com"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      kannannagappan55@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                    <FaPhone className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Phone</p>
                    <a
                      href="tel:+917639564969"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      +91 76395 64969
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Location</p>
                    <p className="text-slate-400">
                      Pudukkottai, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-semibold mb-6">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Kannan-006"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/kannan-n-78809b287"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://x.com/kannan__006?t=u7uA3ftscoHm0S-RnfaDrA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="Twitter"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://wa.me/917639564969"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;