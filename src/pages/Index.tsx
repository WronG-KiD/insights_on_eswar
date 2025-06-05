
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Shield, Cpu, Globe, Award, Trophy, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const FloatingCrystal = () => {
  const mainCrystalRef = useRef<THREE.Mesh>(null);
  const secondaryCrystalRef1 = useRef<THREE.Mesh>(null);
  const secondaryCrystalRef2 = useRef<THREE.Mesh>(null);
  const secondaryCrystalRef3 = useRef<THREE.Mesh>(null);
  const sparklesRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    // Main crystal rotation
    if (mainCrystalRef.current) {
      mainCrystalRef.current.rotation.y += delta * 0.5;
      mainCrystalRef.current.rotation.x += delta * 0.2;
    }
    
    // Secondary crystals orbiting
    if (secondaryCrystalRef1.current) {
      secondaryCrystalRef1.current.rotation.y += delta * 0.8;
      secondaryCrystalRef1.current.position.x = Math.cos(state.clock.elapsedTime) * 2.5;
      secondaryCrystalRef1.current.position.z = Math.sin(state.clock.elapsedTime) * 2.5;
    }
    
    if (secondaryCrystalRef2.current) {
      secondaryCrystalRef2.current.rotation.y += delta * 0.6;
      secondaryCrystalRef2.current.position.x = Math.cos(state.clock.elapsedTime + Math.PI * 0.6) * 2;
      secondaryCrystalRef2.current.position.z = Math.sin(state.clock.elapsedTime + Math.PI * 0.6) * 2;
    }
    
    if (secondaryCrystalRef3.current) {
      secondaryCrystalRef3.current.rotation.y += delta * 0.7;
      secondaryCrystalRef3.current.position.x = Math.cos(state.clock.elapsedTime + Math.PI * 1.2) * 1.8;
      secondaryCrystalRef3.current.position.z = Math.sin(state.clock.elapsedTime + Math.PI * 1.2) * 1.8;
    }
    
    // Sparkles animation
    if (sparklesRef.current) {
      sparklesRef.current.rotation.y += delta * 0.3;
      sparklesRef.current.children.forEach((sparkle, index) => {
        const mesh = sparkle as THREE.Mesh;
        mesh.rotation.y += delta * (1 + index * 0.2);
        mesh.rotation.x += delta * (0.5 + index * 0.1);
        
        // Pulsing effect
        const scale = 0.1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
        mesh.scale.setScalar(scale);
      });
    }
  });
  
  return (
    <group>
      {/* Main Crystal - Rainbow gradient effect */}
      <mesh ref={mainCrystalRef} position={[0, 0, 0]} scale={2}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#ff6b6b" 
          transparent 
          opacity={0.8} 
          roughness={0.1} 
          metalness={0.3}
          emissive="#ff1744"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Secondary smaller crystals orbiting around with different colors */}
      <mesh ref={secondaryCrystalRef1} position={[2, 1, 0]} scale={0.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
          transparent 
          opacity={0.7} 
          roughness={0.1} 
          metalness={0.4}
          emissive="#00bcd4"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh ref={secondaryCrystalRef2} position={[-2, -0.5, 1]} scale={0.7}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#ffd93d" 
          transparent 
          opacity={0.7} 
          roughness={0.1} 
          metalness={0.4}
          emissive="#ffc107"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh ref={secondaryCrystalRef3} position={[1, -2, -1]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#a855f7" 
          transparent 
          opacity={0.7} 
          roughness={0.1} 
          metalness={0.4}
          emissive="#9c27b0"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Floating sparkles with vibrant colors */}
      <group ref={sparklesRef}>
        <mesh position={[3, 2, 2]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#ff9800" 
            emissive="#e65100"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        <mesh position={[-3, 1, -2]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#4caf50" 
            emissive="#2e7d32"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        <mesh position={[0, 3, 1]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#e91e63" 
            emissive="#c2185b"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        <mesh position={[2.5, -1.5, 2]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#673ab7" 
            emissive="#512da8"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        <mesh position={[-1.5, 2.5, -1.5]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#00bcd4" 
            emissive="#00838f"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </group>
  );
};

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 via-pink-800/90 to-indigo-900/90 backdrop-blur-sm border-b border-purple-500/30">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Eswar D</h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-purple-200 hover:text-pink-300 transition-colors">
            Home
          </Link>
          <Link to="/resume" className="text-purple-200 hover:text-pink-300 transition-colors">
            Resume
          </Link>
          <a 
            href="https://www.linkedin.com/in/eswar-donthineni-eswarai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-pink-300 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/WronG-KiD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-pink-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:rawselavigne@gmail.com"
            className="text-purple-200 hover:text-pink-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const projects = [
  {
    title: "AI-based Earthquake Prediction System",
    description: "Used CNN + LSTM with seismic data, integrated with USGS/IRIS APIs, real-time map visualization with Folium",
    tech: ["Python", "CNN", "LSTM", "APIs", "Folium"],
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "DevOps Pipeline for Node.js App",
    description: "Complete CI/CD pipeline using GitHub, Jenkins, Docker, AWS, and SonarQube for automated deployment",
    tech: ["Jenkins", "Docker", "AWS", "SonarQube", "Node.js"],
    icon: <Code className="h-6 w-6" />
  },
  {
    title: "Steam Game Recommender",
    description: "Machine learning system using Logistic Regression and NLP to classify games based on affordability",
    tech: ["Python", "ML", "NLP", "Logistic Regression"],
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "Cybersecurity Tools Suite",
    description: "Collection of security tools including Caesar Cipher, Keylogger, Password Strength Checker, and Pixel Manipulation",
    tech: ["Python", "Cybersecurity", "Encryption", "GUI"],
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Music Playlist Management System",
    description: "Full-stack web application with user authentication and complete CRUD operations for playlist management",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "AQI Data Analysis System",
    description: "Real-time Air Quality Index monitoring system for Indian cities with MySQL storage and reporting",
    tech: ["Python", "MySQL", "Data Analysis", "APIs"],
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "AI-Powered Simulation Models",
    description: "AI-powered simulation models use generative AI techniques to simulate real-world processes, systems, or phenomena for prediction and optimization",
    tech: ["Python", "AI", "Simulation", "Generative AI"],
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "Fraud Transaction Detection",
    description: "Build a system that can classify if a transaction is fraudulent or not using machine learning algorithms",
    tech: ["Python", "ML", "Classification", "Data Analysis"],
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Forest Cover Type Prediction",
    description: "Build a system that can predict the type of forest cover using analysis data for a 30m x 30m patch of land in the forest",
    tech: ["Python", "ML", "Prediction", "Environmental Data"],
    icon: <Globe className="h-6 w-6" />
  }
];

const skills = [
  { name: "Python", level: 50 },
  { name: "C++", level: 25 },
  { name: "Machine Learning", level: 60 },
  { name: "Artificial Intelligence", level: 50 },
  { name: "Cybersecurity", level: 30 },
  { name: "AWS", level: 40 },
  { name: "Jenkins", level: 50 },
  { name: "SQL", level: 80 },
  { name: "DevOps", level: 80 },
  { name: "Docker", level: 80 }
];

const certifications = [
  "Advanced Excel – SRM University",
  "Image Processing with MATLAB – On Ramp",
  "Introduction to Machine Learning – NPTEL",
  "Demystifying Networks – NPTEL",
  "Divide & Conquer, Sorting, and Randomized Algorithms – Stanford University",
  "Employability and Communication Skills – NPTEL (Silver Medal)"
];

const hackathons = [
  {
    name: "Smart India Hackathon (SIH)",
    status: "Participant",
    description: "National level hackathon organized by Government of India"
  },
  {
    name: "TN Police Hackathon",
    status: "Finalist",
    description: "Tamil Nadu Police Department hackathon for innovative solutions"
  }
];

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white min-h-screen">
      {/* Navigation with colorful gradient */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 via-pink-800/90 to-indigo-900/90 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Eswar D</h1>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-purple-200 hover:text-pink-300 transition-colors">
                Home
              </Link>
              <Link to="/resume" className="text-purple-200 hover:text-pink-300 transition-colors">
                Resume
              </Link>
              <a 
                href="https://www.linkedin.com/in/eswar-donthineni-eswarai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-pink-300 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/WronG-KiD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-pink-300 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:rawselavigne@gmail.com"
                className="text-purple-200 hover:text-pink-300 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with rainbow gradient */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-800 via-pink-700 to-orange-600">
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[0, 0, 10]} intensity={0.5} color="#ff6b9d" />
            <pointLight position={[5, 5, 0]} intensity={0.3} color="#4ecdc4" />
            <pointLight position={[-5, -5, 0]} intensity={0.3} color="#ffd93d" />
            <FloatingCrystal />
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Eswar D
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Passionate B.Tech Computer Science Student & Future Software Engineer
            </p>
            <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
              Specializing in AI/ML, DevOps, and Cybersecurity with a passion for building intelligent, scalable solutions
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/resume">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </Link>
              <a href="mailto:rawselavigne@gmail.com">
                <Button variant="outline" size="lg" className="border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-purple-900">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
            
            <div className="flex gap-6 justify-center mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/WronG-KiD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-pink-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/eswar-donthineni-eswarai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-pink-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:rawselavigne@gmail.com"
                className="text-purple-300 hover:text-pink-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with teal gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
                I'm a passionate final-year B.Tech student in Computer Science, aspiring to become a software engineer and startup innovator. 
                Over time, I've deepened my interest in Artificial Intelligence, Machine Learning, and Neural Networks, driven by a curiosity 
                to build intelligent and scalable solutions.
              </p>
              <p className="text-lg text-teal-100 leading-relaxed">
                With hands-on experience across DevOps, cybersecurity, and full-stack development, I thrive in dynamic environments and aim 
                to contribute to impactful, real-world projects while constantly evolving my technical and problem-solving skills.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-800/60 to-teal-900/60 border-emerald-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">B.Tech Computer Science</h4>
                      <p className="text-emerald-200">SRM Institute of Science and Technology</p>
                      <p className="text-sm text-emerald-300">GPA: 8.30/10 | Expected: Dec 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-800/60 to-cyan-900/60 border-blue-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-300">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">Machine Learning Intern</h4>
                      <p className="text-blue-200">Unified Mentor</p>
                      <p className="text-sm text-blue-300">Current | ₹7.5k stipend for 3 months</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Cybersecurity Intern</h4>
                      <p className="text-blue-200">Skillcraft Technology</p>
                      <p className="text-sm text-blue-300">Dec 2024 - Jan 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">DevOps Intern</h4>
                      <p className="text-blue-200">FINT Solutions</p>
                      <p className="text-sm text-blue-300">May 2024 - July 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Secretary</h4>
                      <p className="text-blue-200">Rotary Club of Madras Midtown</p>
                      <p className="text-sm text-blue-300">July 2024 - Current</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-800/60 to-pink-900/60 border-purple-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-300">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Telugu</span>
                      <span className="text-purple-300">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-purple-300">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Japanese</span>
                      <span className="text-purple-300">Learning</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tamil</span>
                      <span className="text-purple-300">Conversational</span>
                    </div>
                    <div className="flex justify-between">
                      <span>German</span>
                      <span className="text-purple-300">Basic</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with orange-red gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">Skills & Technologies</h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Here are the technologies and skills I've mastered throughout my journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-yellow-300">{skill.level}%</span>
                </div>
                <div className="h-2 bg-red-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with green gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lime-300 to-emerald-200 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              A showcase of my technical projects spanning AI/ML, DevOps, and Cybersecurity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-emerald-800/60 to-green-900/60 border-emerald-400/30 backdrop-blur-sm h-full hover:border-lime-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-lime-600/30 rounded-lg text-lime-300">
                        {project.icon}
                      </div>
                      <CardTitle className="text-white group-hover:text-lime-300 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-green-200">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-green-700/50 text-green-200 border-green-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section with purple gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">Hackathons</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Competitive programming events and innovation challenges I've participated in
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-violet-800/60 to-purple-900/60 border-violet-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Trophy className="h-12 w-12 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{hackathon.name}</h3>
                    <Badge 
                      variant={hackathon.status === "Finalist" ? "default" : "secondary"} 
                      className={`mb-4 ${hackathon.status === "Finalist" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-violet-700/50 text-violet-200"}`}
                    >
                      {hackathon.status}
                    </Badge>
                    <p className="text-purple-200">{hackathon.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section with pink gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-600 via-rose-700 to-red-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-pink-200 bg-clip-text text-transparent">Certifications</h2>
            <p className="text-lg text-pink-100 max-w-2xl mx-auto">
              Continuous learning through recognized certifications and courses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-rose-800/60 to-pink-900/60 border-rose-400/30 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-pink-300 mx-auto mb-4" />
                    <p className="text-white font-medium">{cert}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with cyan gradient */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Let's Work Together</h2>
            <p className="text-lg text-cyan-100 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and ways to contribute to meaningful solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:rawselavigne@gmail.com">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </a>
              <Link to="/resume">
                <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-indigo-900">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with dark gradient */}
      <footer className="py-8 px-6 border-t border-purple-500/30 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-300">
            © 2024 Eswar D Portfolio. Built with React, Three.js, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
