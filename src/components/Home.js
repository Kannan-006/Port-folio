import profile from "../images/prof.jpg";

const Home = () => {
  return (
    <section id="home" className="section flex items-center justify-center py-12">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">Kannan N</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">Full Stack Web Developer</h2>
            <h1><span className="text-blue-500 text-2xl"> Tech Stack:</span> HTML5, CSS3, JavaScript, Frappe Framework, Python, SQL </h1>
            
            <p className="text-slate-400 text-lg mt-5">
              I build modern web applications using React, Frappe, HTML5, CSS3, and SQL. 
              Passionate about creating intuitive user experiences and developing efficient, scalable web solutions.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative w-full flex justify-center">
              <div className="w-96 h-96 sm:w-[50%] sm:h-[500px] md:w-[500px] border-blue-950 md:h-144 lg:w-160 lg:h-160 xl:w-192 xl:h-192 2xl:w-224 2xl:h-224 rounded-full overflow-hidden border-4 border-slate-700 relative">
                <img
                  src={profile}
                  alt="Developer Profile"
                  className="w-full h-full object-cover"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br  rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
