import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-2 font-semibold">Mohd Masood</p>
          <p className="text-gray-300 mb-4">Full Stack Developer & AI Engineer</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/MasoodMohd26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-masood-b999762a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:masood22299@iiitd.ac.in"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Mohd Masood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
