
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Resume</h2>
            <p className="text-gray-300 text-lg">
              Complete overview of my education, experience, skills, and achievements
            </p>
          </motion.div>

          {/* Resume Images Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Page 1 */}
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <img 
                src="/lovable-uploads/resume-page-1.jpg" 
                alt="Resume Page 1" 
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '1000px', objectFit: 'contain' }}
              />
            </div>

            {/* Page 2 */}
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <img 
                src="/lovable-uploads/resume-page-2.jpg" 
                alt="Resume Page 2" 
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '1000px', objectFit: 'contain' }}
              />
            </div>
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
