import { useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  LinearProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CssBaseline,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import cv from "./downloads/ButrintBytyqiCV.pdf";

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartTooltip,
  Legend
);

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
    typography: {
      fontFamily: 'Orbitron, sans-serif',
    },
  });

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: theme.palette.primary.main
      },
      links: {
        enable: true,
        color: theme.palette.primary.main,
        opacity: 0.5
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  };

  // const [ref, inView] = useInView({
  //   threshold: 0.3,
  //   triggerOnce: true,
  // });

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "DevOps & Cloud", level: 88 },
    { name: "Database Management", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Leadership", level: 85 }
  ];

  const devOpsSkills = [
    {
      category: "Cloud Platforms",
      items: [
        { name: "Google Cloud Platform", level: 90, icon: "gcp" },
        { name: "Cloud Run", level: 85, icon: "cloud-run" },
        { name: "Cloud Functions", level: 85, icon: "cloud-functions" },
        { name: "Cloud Storage", level: 88, icon: "cloud-storage" }
      ]
    },
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", level: 85, icon: "docker" },
        { name: "Kubernetes", level: 80, icon: "kubernetes" },
        // { name: "CI/CD", level: 85, icon: "cicd" },
        // { name: "Terraform", level: 80, icon: "terraform" }
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  // const [contactForm, setContactForm] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });
  
  const [showThankYou, setShowThankYou] = useState(false);

  const projects = [
    {
      title: "Restaurant Website",
      description: "Experience the ultimate dining experience with our sleek restaurant webpage. Built with JavaScript, HTML, and CSS, our user-friendly interface allows for easy browsing, menu selection, and online reservations.",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Restaurant-Website",
      live: null
    },
    {
      title: "StoreFlow",
      description: "A modern e-commerce platform built with HTML and advanced web technologies. Features include product management, shopping cart functionality, and a streamlined checkout process.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/StoreFlow",
      live: null
    },
    {
      title: "Quiz App",
      description: "An interactive quiz application that tests users' knowledge across various topics. Built with a focus on clean design and user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Quiz-App",
      live: null
    },
    {
      title: "Counter App",
      description: "Count with ease using our React-powered counter app. Increase or decrease the count with just a tap, and never lose track of your progress.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Counter-App",
      live: null
    },
    {
      title: "Marketplace App",
      description: "The ultimate marketplace app for effortlessly selling your unwanted items! Simply snap photos, set competitive prices, and connect with a vast network of eager buyers in your area. Enjoy secure transactions and seamless communication.",
      technologies: ["JavaScript", "React", "Node.js"],
      category: "fullstack",
      github: "https://github.com/butrintbytyqi/Marketplace-App",
      live: null
    },
    {
      title: "Feedback App",
      description: "A dynamic feedback collection and management system built with JavaScript. Allows users to submit, view, and interact with feedback in real-time.",
      technologies: ["JavaScript", "React", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Feedback-App",
      live: null
    },
    {
      title: "Digital Ordering App",
      description: "Digital Ordering Application for streamlined food service operations. Features include menu management, order processing, and real-time updates.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/butrintbytyqi/doa",
      live: null
    },
    {
      title: "Coffee Shop Website",
      description: "A beautifully designed coffee shop website showcasing menu items, locations, and online ordering capabilities.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Coffee-Shop-Website",
      live: null
    }
  ];

  const skillsData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Cloud', 'Database', 'Architecture'],
    datasets: [{
      label: 'Skills Proficiency',
      data: [90, 85, 88, 90, 85, 85],
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderColor: '#2196f3',
      borderWidth: 2,
    }]
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: '#fff'
        },
        ticks: {
          color: '#fff',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // const handleContactSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically handle the form submission
  //   setShowThankYou(true);
  //   setTimeout(() => setShowThankYou(false), 3000);
  //   setContactForm({ name: '', email: '', message: '' });
  // };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />
      <Container maxWidth={false} sx={{ overflow: "hidden" }}>
        {/* Navigation */}
        <Box
          component="nav"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(18, 18, 18, 0.8)",
            boxShadow: 1,
            py: 2,
          }}
        >
          <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box component="div" sx={{ display: "flex", gap: 4 }}>
              <Button
                onClick={() => scrollToSection('home')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection('aboutme')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('/img/hero-bg.jpg') center/cover no-repeat",
              zIndex: -1,
              filter: "blur(5px)"
            }
          }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h1" component="h1" gutterBottom>
                    <TypeAnimation
                      sequence={[
                        "Hi, I'm Butrint Bytyqi",
                        1000,
                        "I'm a Full Stack Developer",
                        1000,
                        "I'm a Problem Solver",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4 }}>
                    Turning ideas into reality through code
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component="a"
                      href="#contact"
                      sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        py: 1.5,
                        px: 4
                      }}
                    >
                      Get in Touch
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component="a"
                      href={cv}
                      target="_blank"
                      sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        py: 1.5,
                        px: 4
                      }}
                    >
                      Download CV
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="float-animation"
                >
                  {/* Add your hero image or 3D element here */}
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box
          id="skills"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ py: 8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <Tilt>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          height: "10px",
                          background: "#e0e0e0",
                          borderRadius: "5px",
                          mt: 2
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{
                            height: "100%",
                            background: theme.palette.primary.main,
                            borderRadius: "5px"
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Skills Radar Chart Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Skills Overview
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: 400, maxWidth: 600, margin: 'auto' }}>
                <Radar data={skillsData} options={radarOptions} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3 }}>
                {skills.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography>{skill.name}</Typography>
                      <Typography>{skill.level}%</Typography>
                    </Box>
                    <Box sx={{
                      height: "10px",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      mt: 2
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        style={{
                          height: "100%",
                          background: theme.palette.primary.main,
                          borderRadius: "5px"
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* DevOps and Cloud Skills Section */}
        <Box sx={{ py: 8, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              DevOps & Cloud Expertise
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
              Specialized in Google Cloud Platform and Modern DevOps Practices
            </Typography>
            
            {devOpsSkills.map((category, index) => (
              <Box key={index} sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  {category.category}
                </Typography>
                <Grid container spacing={3}>
                  {category.items.map((skill, skillIndex) => (
                    <Grid item xs={12} sm={6} md={3} key={skillIndex}>
                      <Card
                        component={motion.div}
                        whileHover={{ y: -10 }}
                        sx={{
                          p: 3,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {skill.icon === 'gcp' && <CloudIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-run' && <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-functions' && <CodeIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-storage' && <StorageIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'docker' && <CloudIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'kubernetes' && <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cicd' && <SecurityIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'terraform' && <StorageIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                        </Box>
                        <Typography variant="h6" align="center" gutterBottom>
                          {skill.name}
                        </Typography>
                        <Box sx={{ width: '100%', mt: 2 }}>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: '#2196f3'
                              }
                            }}
                          />
                          <Typography
                            variant="body2"
                            align="right"
                            sx={{ mt: 1, color: 'text.secondary' }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}

            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: '800px', mx: 'auto' }}>
                With extensive experience in Google Cloud Platform, I specialize in designing and implementing 
                scalable cloud solutions. My expertise includes containerization, serverless architecture, 
                and infrastructure as code, enabling efficient and reliable deployment pipelines.
              </Typography>
              {/* <Button
                variant="outlined"
                size="large"
                href="https://www.linkedin.com/in/butrintbytyqi"
                target="_blank"
                sx={{
                  borderRadius: '30px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4
                }}
              >
                View Certifications
              </Button> */}
            </Box>
          </Container>
        </Box>

        {/* Experience Timeline */}
        <Box sx={{ py: 8, position: 'relative' }}>
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Experience
          </Typography>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${theme.palette.background.paper}`
              }}
              date="2021 - Present"
              iconStyle={{ 
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: 'none',
              }}
              icon={<SchoolIcon />}
            >
              <h3>Bachelor Software Design</h3>
              <h4>UPZ - Universiteti i Prizrenit</h4>
              <p>
                Studying advanced software development and computer science principles.
              </p>
              <a href="www.uni-prizren.com" target="_blank" rel="noopener noreferrer">
                www.uni-prizren.com
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }}
              date="01/2021 - 04/2021"
              iconStyle={{ 
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: 'none',
              }}
              icon={<WorkIcon />}
            >
              <h3>Web Development Training</h3>
              <h4>Maker Space</h4>
              <p>
                Intensive training in HTML, CSS, JavaScript, Bootstrap, and React development.
              </p>
              <a href="makerspaceprizren.com" target="_blank" rel="noopener noreferrer">
                makerspaceprizren.com
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }}
              date="06/2022 - 10/2022"
              iconStyle={{ 
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: 'none',
              }}
              icon={<WorkIcon />}
            >
              <h3>Software Developer Intern</h3>
              <h4>JCODERS</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• Taught programming basics to young children</li>
                <li>• Assisted in developing web applications using React</li>
                <li>• Participated in code reviews and debugging</li>
                <li>• Maintained and updated software applications</li>
                <li>• Used Git for version control and documentation</li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }}
              date="11/2023"
              iconStyle={{ 
                background: theme.palette.secondary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: 'none',
              }}
              icon={<SchoolIcon />}
            >
              <h3>Bridge Conference 2023</h3>
              <h4>Presentation Certification</h4>
              <p>
                Presented research paper on "A Proposed System for Real-Time Face Recognition: 
                Enhancing Access Control, Security, and Efficiency in Cross-Domain Applications"
              </p>
              <a href="https://uni-prizren.com/en/bridge-2023/" target="_blank" rel="noopener noreferrer">
                View Conference Details
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }}
              date="12/2022"
              iconStyle={{ 
                background: theme.palette.secondary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: 'none',
              }}
              icon={<WorkIcon />}
            >
              <h3>Idea-To-Scale Startup Competition Winner</h3>
              <h4>Innovation Training Park - ITP</h4>
              <p>
                Won with an innovative digital ordering system for gastronomic businesses. 
                The solution features contactless experience, upselling opportunities, 
                data insights, and integration with loyalty programs.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>

        {/* Projects Section with Filtering */}
        <Box
          id="projects"
          sx={{ py: 8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Projects
          </Typography>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            {['all', 'frontend', 'fullstack'].map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? 'contained' : 'outlined'}
                sx={{
                  textTransform: 'capitalize',
                  px: 3,
                  py: 1,
                  borderRadius: '20px'
                }}
              >
                {cat === 'frontend' ? 'Frontend' : cat === 'fullstack' ? 'Full Stack' : 'All'}
              </Button>
            ))}
          </Box>
          <Grid container spacing={4}>
            {projects
              .filter(project => filter === 'all' || project.category === filter)
              .map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    component={motion.div}
                    whileHover={{ y: -10 }}
                    sx={{
                      height: '100%',
                      background: '#1e1e1e',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#2196f3',
                        boxShadow: '0 8px 16px rgba(33, 150, 243, 0.1)'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: '#fff'
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mb: 2,
                          minHeight: '4.5em',
                          color: 'rgba(255, 255, 255, 0.7)'
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(33, 150, 243, 0.1)',
                              borderColor: '#2196f3',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: 'rgba(33, 150, 243, 0.2)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          gap: 2,
                          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                          pt: 2
                        }}
                      >
                        <Button
                          component="a"
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#fff',
                            '&:hover': {
                              borderColor: '#2196f3',
                              backgroundColor: 'rgba(33, 150, 243, 0.1)'
                            }
                          }}
                        >
                          View Code
                        </Button>
                        {project.live && (
                          <Button
                            component="a"
                            href={project.live}
                            target="_blank"
                            startIcon={<CodeIcon />}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: '#fff',
                              '&:hover': {
                                borderColor: '#2196f3',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)'
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Project Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogContent>
                <Typography paragraph>{selectedProject.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        borderColor: '#2196f3',
                        color: '#fff'
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
                <Button
                  component="a"
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  View on GitHub
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Thank You Snackbar */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              style={{
                position: 'fixed',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#2196f3',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: 8,
                zIndex: 1000
              }}
            >
              Thank you for your message!
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Section */}
        <Box
          id="aboutme"
          sx={{
            py: 8,
            background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            my: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: 4
                    }}
                  >
                    About Me
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3,
                      color: '#2196f3',
                      fontWeight: 500
                    }}
                  >
                    Full-Stack Developer | Data Science Enthusiast | Tech Entrepreneur
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      I'm a Full-Stack Developer with a passion for building scalable, efficient, and data-driven solutions. 
                      With a strong foundation in Computer Science, I specialize in creating seamless user experiences through modern web and mobile development.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      My expertise spans across the entire development stack:
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <Paper 
                          elevation={0}
                          sx={{
                            p: 2,
                            background: 'rgba(33, 150, 243, 0.1)',
                            border: '1px solid rgba(33, 150, 243, 0.2)',
                            borderRadius: '10px',
                            height: '100%'
                          }}
                        >
                          <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                            Frontend Excellence
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            React • React Native • Angular
                            Creating intuitive and responsive user interfaces
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Paper 
                          elevation={0}
                          sx={{
                            p: 2,
                            background: 'rgba(33, 150, 243, 0.1)',
                            border: '1px solid rgba(33, 150, 243, 0.2)',
                            borderRadius: '10px',
                            height: '100%'
                          }}
                        >
                          <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                            Backend Mastery
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Java Spring Boot • PHP • MySQL
                            Building robust and scalable server-side solutions
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      As a tech entrepreneur, I co-founded DOA (Digital Ordering Application), revolutionizing restaurant tech
                      through digital automation and AI-driven insights.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                      Tech Stack & Expertise
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {[
                        'React', 'React Native', 'Angular', 'Java', 'Spring Boot', 'PHP', 
                        'MySQL', 'Node.js', 'Firebase', 'Python', 'Google Cloud', 'Docker'
                      ].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(33, 150, 243, 0.1)',
                            border: '1px solid rgba(33, 150, 243, 0.3)',
                            color: '#fff',
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.2)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                      Areas of Interest
                    </Typography>
                    <Grid container spacing={1}>
                      {[
                        'AI & Machine Learning',
                        'Data Science',
                        'Software Architecture',
                        'DevOps',
                        'Digital Innovation',
                        'Entrepreneurship'
                      ].map((interest) => (
                        <Grid item key={interest}>
                          <Chip
                            label={interest}
                            sx={{
                              backgroundColor: 'rgba(33, 150, 243, 0.05)',
                              border: '1px solid rgba(33, 150, 243, 0.2)',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: 'rgba(33, 150, 243, 0.15)',
                              }
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 4,
                    background: 'rgba(33, 150, 243, 0.03)',
                    borderRadius: '20px',
                    border: '1px solid rgba(33, 150, 243, 0.1)',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#2196f3' }}>
                    Key Highlights
                  </Typography>
                  
                  {[
                    {
                      title: 'Full-Stack Development',
                      description: 'Building scalable web and mobile applications'
                    },
                    {
                      title: 'Data Science & AI',
                      description: 'Machine learning and predictive modeling expertise'
                    },
                    {
                      title: 'DevOps & Cloud',
                      description: 'Google Cloud, Docker, and CI/CD implementation'
                    },
                    {
                      title: 'Entrepreneurship',
                      description: 'Co-founder of DOA, revolutionizing restaurant tech'
                    }
                  ].map((highlight, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        mb: 2,
                        background: 'rgba(33, 150, 243, 0.1)',
                        border: '1px solid rgba(33, 150, 243, 0.2)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(33, 150, 243, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Typography variant="h6" component="h3" sx={{ color: '#fff', mb: 1 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {highlight.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
          
          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        </Box>

        {/* Contact Section */}
        <Box
          id="contact"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            pt: 8,
          }}
        >
          <Box>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: "3.5rem", marginBottom: "1rem" }}
            >
              Contact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
            >
              If you'd like to get in touch, please fill out the form below.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    type="text"
                    placeholder="Name"
                    style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                  />
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    type="email"
                    placeholder="Email"
                    style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                  />
                  <motion.textarea
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    placeholder="Message"
                    style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                  />
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    type="submit"
                    style={{ padding: "1rem", borderRadius: "10px", border: "none", backgroundColor: theme.palette.primary.main, color: "#fff" }}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
