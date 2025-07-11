export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Computer Science student at IIIT Delhi with a passion for cutting-edge technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech environment"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at IIIT Delhi with a strong foundation in 
              full-stack development, artificial intelligence, and machine learning. My journey in tech has been 
              driven by curiosity and the desire to solve real-world problems through innovative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience in both startup environments and research institutions, I've developed a comprehensive 
              skill set that spans from building scalable web applications to working with cutting-edge AI technologies 
              like Large Language Models and agentic AI systems.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">9.3</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
