
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Eswar D - Resume</h1>
          <div className="flex gap-2">
            <a 
              href="mailto:rawselavigne@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-black p-8 rounded-lg shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">ESWAR D</h1>
              <p className="text-lg text-gray-600 mb-4">B.Tech Computer Science Student</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span>📧 rawselavigne@gmail.com</span>
                <span>📱 +91 6309570442</span>
                <span>🔗 linkedin.com/in/eswar-donthineni-eswarai</span>
                <span>💻 github.com/WronG-KiD</span>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">PROFESSIONAL SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate B.Tech Computer Science student with extensive experience in AI/ML, DevOps, and Cybersecurity. 
                Demonstrated expertise in developing intelligent systems, implementing CI/CD pipelines, and building secure applications. 
                Strong problem-solving skills with a track record of success in hackathons and practical project implementation.
              </p>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">EDUCATION</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Bachelor of Technology - Computer Science</h3>
                <p className="text-gray-600">SRM Institute of Science and Technology | GPA: 8.30/10</p>
                <p className="text-sm text-gray-500">Expected Graduation: December 2024</p>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">PROFESSIONAL EXPERIENCE</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Machine Learning Intern</h3>
                <p className="text-gray-600">Unified Mentor | Current</p>
                <p className="text-sm text-gray-500">Stipend: ₹7,500 for 3 months</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Developing machine learning models for real-world applications</li>
                  <li>Working on data preprocessing and model optimization techniques</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Cybersecurity Intern</h3>
                <p className="text-gray-600">Skillcraft Technology, Chennai | Dec 2024 - Jan 2025</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Securing digital assets and identifying vulnerabilities</li>
                  <li>Implementing security solutions and conducting threat analysis</li>
                  <li>Gained expertise in network security and risk management</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">DevOps Intern</h3>
                <p className="text-gray-600">FINT Solutions | May 2024 - July 2024</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                  <li>Managed AWS cloud infrastructure and deployment automation</li>
                  <li>Integrated SonarQube for code quality analysis</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Secretary</h3>
                <p className="text-gray-600">Rotary Club of Madras Midtown, Chennai | July 2024 - Current</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Managed meetings, agendas, and community service events</li>
                  <li>Coordinated between members and stakeholders</li>
                  <li>Ensured alignment of timelines, resources, and goals with community objectives</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">KEY PROJECTS</h2>
              
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">AI-based Earthquake Prediction System</h3>
                <p className="text-gray-700">Used CNN + LSTM with seismic data, integrated USGS/IRIS APIs, real-time visualization with Folium</p>
                <p className="text-sm text-gray-600">Technologies: Python, CNN, LSTM, APIs, Folium</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">DevOps Pipeline for Node.js Application</h3>
                <p className="text-gray-700">Complete CI/CD pipeline using GitHub, Jenkins, Docker, AWS, and SonarQube</p>
                <p className="text-sm text-gray-600">Technologies: Jenkins, Docker, AWS, SonarQube, Node.js</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">AI-Powered Simulation Models</h3>
                <p className="text-gray-700">Generative AI techniques to simulate real-world processes for prediction and optimization</p>
                <p className="text-sm text-gray-600">Technologies: Python, AI, Simulation, Generative AI</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Fraud Transaction Detection System</h3>
                <p className="text-gray-700">Machine learning system to classify fraudulent transactions with high accuracy</p>
                <p className="text-sm text-gray-600">Technologies: Python, ML, Classification, Data Analysis</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Forest Cover Type Prediction</h3>
                <p className="text-gray-700">Predictive system for forest cover analysis using 30m x 30m land patch data</p>
                <p className="text-sm text-gray-600">Technologies: Python, ML, Environmental Data Analysis</p>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">TECHNICAL SKILLS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Programming Languages</h3>
                  <p className="text-gray-700">Python, Java, JavaScript, SQL, HTML/CSS, PHP</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Frameworks & Tools</h3>
                  <p className="text-gray-700">Docker, Jenkins, AWS, Git, SonarQube</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">AI/ML Technologies</h3>
                  <p className="text-gray-700">TensorFlow, Scikit-learn, Pandas, NumPy, CNN, LSTM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Databases</h3>
                  <p className="text-gray-700">MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">CERTIFICATIONS</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Advanced Excel – SRM University</li>
                <li>Image Processing with MATLAB – On Ramp</li>
                <li>Introduction to Machine Learning – NPTEL</li>
                <li>Demystifying Networks – NPTEL</li>
                <li>Divide & Conquer, Sorting, and Randomized Algorithms – Stanford University</li>
                <li>Employability and Communication Skills – NPTEL (Silver Medal)</li>
              </ul>
            </section>

            {/* Hackathons */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">HACKATHONS & COMPETITIONS</h2>
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800">TN Police Hackathon - Finalist</h3>
                <p className="text-gray-700">Tamil Nadu Police Department hackathon for innovative solutions</p>
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Smart India Hackathon (SIH) - Participant</h3>
                <p className="text-gray-700">National level hackathon organized by Government of India</p>
              </div>
            </section>

            {/* Languages */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300">LANGUAGES</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-700">Telugu (Native)</p>
                <p className="text-gray-700">English (Fluent)</p>
                <p className="text-gray-700">Tamil (Conversational)</p>
                <p className="text-gray-700">Japanese (Learning)</p>
                <p className="text-gray-700">German (Basic)</p>
              </div>
            </section>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Ready to Connect?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:rawselavigne@gmail.com">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/eswar-donthineni-eswarai/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
