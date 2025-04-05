import React, { useEffect,useState} from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaJava , FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaUser, FaPhoneAlt, FaEnvelope,  FaExpand,FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import profileImg from './assets/siva.jpg';
import travel from "./assets/travel.png";
import stopclock from "./assets/stopclock.png";
import tictactoe from "./assets/tictactoe.png";
import portfolio from "./assets/portfolio.png";
import weather from "./assets/weathers.png";
import hranalytics from "./assets/hranalytics.png";
import drawing1 from "./assets/drawing1.jpg"; // Add your images
import drawing2 from "./assets/drawing2.jpg";
import drawing3 from "./assets/drawing3.jpg";
import drawing4 from "./assets/drawing4.jpg";
import drawing5 from "./assets/drawing5.jpg";

import nptel from "./assets/nptel.png";
import spoken from "./assets/spoken.jpg";
import scaler from "./assets/scaler.png";
import scrum from "./assets/scrum.png";
import cisco from "./assets/cisco.png";
import powerbi from "./assets/powerbi.jpg";
import prodigy from "./assets/prodigy.jpg";

// Certificates for Each Course
import nptel1 from "./assets/iot.jpg";
import nptel2 from "./assets/english.jpg";
import nptel3 from "./assets/python.jpg";
import spoken1 from "./assets/adcpp.png";
import spoken2 from "./assets/cpp.png";
import spoken3 from "./assets/java.png";
import spoken4 from "./assets/linux.png";
import spoken5 from "./assets/php.png";
import spoken6 from "./assets/pythons.png";
import scaler1 from "./assets/cpps.png";
import scaler2 from "./assets/logics.png";
import scrum1 from "./assets/scrums.png";
import cisco1 from "./assets/network.jpg";
import powerbi1 from "./assets/office.png";
import prodigy1 from "./assets/prodigys.png";
import type1 from "./assets/type.png";
import badmin from "./assets/badmin.jpg";
import badmint from "./assets/badmint.jpg";
import badminton from "./assets/badminton.jpg";
import experience1 from "./assets/prodigys.png";
import experience2 from "./assets/prodigyss.png";

const drawings = [drawing1, drawing2, drawing3, drawing4, drawing5];
const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-content h2, .about-content p");

    const revealOnScroll = () => {
      elements.forEach((element, index) => {
        const sectionTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
          element.style.transitionDelay = `${index * 0.3}s`; // Add delay for each element
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/siva_resume.pdf'; // Ensure the file is inside the `public/` folder
    link.download = 'Sivasankari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  <button onClick={downloadResume} className="btn">Resume</button>
  
  
  // Detect touch devices and add appropriate classes
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  document.body.classList.add('touch-device');
}

// Close modals when clicking outside on mobile
document.addEventListener('DOMContentLoaded', function() {
  const modals = document.querySelectorAll('.modal-overlay');
  
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Better touch handling for timeline
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('touchstart', function() {
      this.classList.add('touched');
    });
    
    item.addEventListener('touchend', function() {
      setTimeout(() => {
        this.classList.remove('touched');
      }, 200);
    });
  });
});
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);
// Drawing images array

const [currentDrawing, setCurrentDrawing] = useState(0);

// Automatically move to the next drawing every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDrawing((prev) => (prev + 1) % drawings.length);
  }, 1000); // Change image every 3 seconds

  return () => clearInterval(interval); // Cleanup on unmount
},  []); 
const prevDrawing = () => {
  setCurrentDrawing((prev) => (prev === 0 ? drawings.length - 1 : prev - 1));
};

// Function to show next drawing
const nextDrawing = () => {
  setCurrentDrawing((prev) => (prev + 1) % drawings.length);
};
// Function to show previous drawing


  // State for Achievements
const [selectedAchievement, setSelectedAchievement] = useState(null);

// Open Modal for Achievements
const openAchievementModal = (img) => {
  setSelectedAchievement(img);
};


  // Course Topics and Certificates
  const courses  = [
    { 
      name: "NPTEL", 
      img: nptel, 
      certificates: [nptel1, nptel2,nptel3] 
    },
    { 
      name: "SPOKEN TUTORIAL", 
      img: spoken, 
      certificates: [spoken1, spoken2, spoken3, spoken4, spoken5, spoken6 ] 
    },
    { 
      name: "SCALER", 
      img: scaler, 
      certificates: [scaler1, scaler2] 
    },
    { 
      name: "SCRUM STUDY", 
      img: scrum, 
      certificates: [scrum1] 
    },
    { 
      name: "CISCO", 
      img: cisco, 
      certificates: [cisco1] 
    },
    { 
      name: "OFFICE MASTER", 
      img: powerbi, 
      certificates: [powerbi1] 
    },
    { 
      name: "PRODIGY INFOTECH INTERNSHIP", 
      img: prodigy, 
      certificates: [prodigy1] 
    }
  ];

  // Open Modal for Selected Topic
  const openModal = (certificates) => {
    setSelectedTopic(certificates);
    setSelectedCertIndex(0);
  };

  // Navigate Through Certificates
  const nextImage = () => {
    if (selectedCertIndex < selectedTopic.length - 1) {
      setSelectedCertIndex(selectedCertIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedCertIndex > 0) {
      setSelectedCertIndex(selectedCertIndex - 1);
    }
  };

  const achievements = [
    {
      name: "NPTEL ELITE+SILVER(IoT)",
      img: nptel1,  // Small thumbnail
      fullImg: nptel1,    // Full-sized image when clicked
    },
    {
      name: "NPTEL ELITE+SILVER(TECHNICAL ENGLISH)",
      img: nptel2,
      fullImg: nptel2,
    },
    {
      name: "INTERNSHIP COMPLETION",
      img: prodigy1,
      fullImg: prodigy1,
    },
    {
      name: "FIRST CLASS IN TYPERWRITING",
      img: type1,
      fullImg: type1,
    },
    {
      name: "ZONE LEVEL WINNER IN BADMINTON(UNDER 17)",
      img: badmin,
      fullImg: badmin,
    },
    {
      name: "ZONE LEVEL WINNER IN BADMINTON(UNDER 19)",
      img: badmint,
      fullImg: badmint,
    },
    {
      name: "DISTRICT LEVEL RUNNER UP IN BADMINTON(UNDER 19)",
      img: badminton,
      fullImg: badminton,
    }
  ];
  const [activeImage, setActiveImage] = useState(null);

  const toggleImage = (img) => {
    setActiveImage((prev) => (prev === img ? null : img));
  };


  return (
    <div className="portfolio">
      {/* Sticky Navigation Bar */}
      <header className="sticky-header">
        <h2>My Portfolio</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#hobby">Hobby</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="section about">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <div className="about-container">
          <div className="profile-container">
          <img src={profileImg} alt="Profile" className="profile-pic" />
            <div className="profile-links">
              <a href="https://github.com/Sivag28" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sivasankari-g-353464334/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
            <div className="profile-buttons">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="/siva_resume.pdf" download="Sivasankari_Resume.pdf" className="btn">Resume</a>

            </div>
          </div>
          <div className="about-content">
            <h2>Introduction</h2>
            <p>Hello! I am Sivasankari G, currently pursuing my Bachelor's degree in Information Technology at National Engineering College, Kovilpatti.</p>

            <h2>Educational Background</h2>
            <p>I am actively developing my technical expertise through my academic journey in Information Technology, where I have gained a strong foundation in software development, system design, and emerging technologies.</p>

            <h2>Area of Interests</h2>
            <p>My core areas of interest include web development, UI/UX design, Data analytics, database Management, the Internet of Things (IoT), and Computational Intelligence. I have been exploring these technologies to develop innovative and user-centric solutions.</p>

            <h2>Technical Skills & Expertise</h2>
            <p><strong>Core skills:</strong> C, C++, Java, Web designing, ReactJS, Power BI, SQL, IoT, Computational Intelligence.</p>
            <p><strong>Soft skills:</strong> Critical Thinking, Effective Communication, Problem Solving, Leadership, Handling Pressure, Punctuality.</p>

            <h2>Passion & Professional Aspirations</h2>
            <p>I am passionate about creating impactful digital experiences and optimizing technological solutions to enhance user interactions. My goal is to continuously learn and apply my knowledge to solve real-world challenges in software development.</p>

            <h2>Future Goals</h2>
            <p>I aim to deepen my knowledge in modern technologies, contribute to innovative projects, and make meaningful contributions in the field of software development and intelligent systems.</p>
    
        </div>
        </div>
        
      </section>
      



      <section id="education" className="section">
      <h1>Education</h1>
      <div className="timeline">
        <div className="timeline-item">
          <h3>2024-2027</h3>
          <p>B.Tech in Information Technology</p>
          <p><strong>National Engineering College, Kovilpatti</strong></p>
          <p>CGPA: 8.59</p>
        </div>

        <div className="timeline-item">
          <h3>2023</h3>
          <p>HSC 2nd Year</p>
          <p><strong>Holy Cross Matriculation Higher Secondary School, Maranthai</strong></p>
          <p>Percentage: 93.5%</p>
        </div>

        <div className="timeline-item">
          <h3>2022</h3>
          <p>HSC 1st Year</p>
          <p><strong>Holy Cross Matriculation Higher Secondary School, Maranthai</strong></p>
          <p>Percentage: 95%</p>
        </div>
      </div>
    </section>

    <section id="projects" className="section">
  <h1>Projects</h1>
  <div className="project-container">
    {[
      { name: "RESPONSIVE LANDING PAGE", img: travel, github: "https://github.com/Sivag28/Prodigy-Info-Tech/tree/main/Responsive_Landing_Page", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_task1completed-webdevelopment-internship-activity-7299416740118056960-tHFD?utm_source=share&utm_medium=member_android&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" },
      { name: "STOP CLOCK", img: stopclock, github: "https://github.com/Sivag28/Prodigy-Info-Tech/tree/main/Stop_clock", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_task2completed-webdevelopment-internship-activity-7299834916966445058-ri7C?utm_source=share&utm_medium=member_android&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" },
      { name: "TIC-TAC-TOE", img: tictactoe, github: "https://github.com/Sivag28/Prodigy-Info-Tech/tree/main/Tic_tac_toe", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_task3completed-webdevelopment-internship-activity-7299837883308228610-WQYC?utm_source=share&utm_medium=member_android&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" },
      { name: "MY PORTFOLIO", img: portfolio, github: "https://github.com/Sivag28/Prodigy-Info-Tech/tree/main/My_Portfolio", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_task4completed-webdevelopment-internship-activity-7299845079525933056-znCr?utm_source=share&utm_medium=member_android&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" },
      { name: "WEATHER APP", img: weather, github: "https://github.com/Sivag28/Prodigy-Info-Tech/tree/main/Weather_app", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_task5completed-webdevelopment-internship-activity-7299847297545191425-ZfaL?utm_source=share&utm_medium=member_android&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" },
      { name: "HR ANALYTICS", img: hranalytics, github: "https://github.com/Sivag28/Office-master", linkedin: "https://www.linkedin.com/posts/sivasankari-g-353464334_certificate-and-hands-on-activity-7299394645430599681-xFXG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQSsu8BXhXHixuY7iW4j7kUIIkVynpHoZU" }
    ].map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.img} alt={project.name} />
        <div className="overlay">
          <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: "#00FFFF" }} /></a>
          <a href={project.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: "#00FFFF" }} /></a>
        </div>
        <h3>{project.name}</h3>
      </div>
    ))}
  </div>
</section>

<section id="skills" className="section skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="skill-card"><SiC className="icon" /><p>C</p></div>
          <div className="skill-card"><SiCplusplus className="icon" /><p>C++</p></div>
          <div className="skill-card"><FaDatabase className="icon" /><p>SQL</p></div>
          <div className="skill-card"><FaJava className="icon" /><p>Java</p></div>
          <div className="skill-card"><FaHtml5 className="icon" /><p>HTML</p></div>
          <div className="skill-card"><FaCss3Alt className="icon" /><p>CSS</p></div>
          <div className="skill-card"><FaJs className="icon" /><p>JavaScript</p></div>
          <div className="skill-card"><FaReact className="icon" /><p>React.js</p></div>
          
        </div>
      </section>

     {/* Certifications Section */}
     <section id="certifications" className="section">
        <h1>Certifications</h1>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.img}
                alt={course.name}
                onClick={() => openModal(course.certificates)}
                className="course-thumbnail"
              />
              <div className="overlay">
                <FaExpand onClick={() => openModal(course.certificates)} />
              </div>
              <h3>{course.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal for Certificates */}
        {selectedTopic && (
          <div className="modal" onClick={() => setSelectedTopic(null)}>
            <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }} disabled={selectedCertIndex === 0}>
              <FaArrowLeft />
            </button>
            <img src={selectedTopic[selectedCertIndex]} alt="Certificate" className="modal-img" />
            <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }} disabled={selectedCertIndex === selectedTopic.length - 1}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </section>

      {/* Achievements Section */}
<section id="achievements" className="section">
  <h1>Achievements</h1>
  <div className="achievements-container">
    {achievements.map((achievement, index) => (
      <div key={index} className="achievement-card">
        <img
          src={achievement.img}
          alt={achievement.name}
          onClick={() => openAchievementModal(achievement.fullImg)}
          className="achievement-thumbnail"
        />
        <div className="overlay">
          <FaExpand onClick={() => openAchievementModal(achievement.fullImg)} />
        </div>
        <h3>{achievement.name}</h3>
      </div>
    ))}
  </div>

  {/* Modal for Achievements */}
  {selectedAchievement && (
    <div className="modal" onClick={() => setSelectedAchievement(null)}>
      <img src={selectedAchievement} alt="Achievement" className="modal-img" />
    </div>
  )}
</section>
<section id="experience" className="section experience">
      <h1>Experience</h1>

      <div className="experience-container">
        <h2>Internship at Prodigy Infotech</h2>
        <p><strong>Role:</strong> Web Development Intern</p>
        <p><strong>Duration:</strong> 1 Month(FEB 1-FEB 28, 2025)</p>
        <p>
          Worked on building interactive web applications using HTML, CSS, and JavaScript.
          Gained hands-on experience in frontend development, responsive design, and best coding practices.
        </p>
        
        <div className="experience-images">
          <div className="image-wrapper">
            <img
              src={experience1}
              alt="Experience 1"
              className="experience-thumbnail"
              onClick={() => toggleImage('img1')}
            />
            <div className="full-image-overlay">
              <FaExpand onClick={() => toggleImage('img1')} />
            </div>
          </div>

          <div className="image-wrapper">
            <img
              src={experience2}
              alt="Experience 2"
              className="experience-thumbnail"
              onClick={() => toggleImage('img2')}
            />
            <div className="full-image-overlay">
              <FaExpand onClick={() => toggleImage('img2')} />
            </div>
          </div>
        </div>

        {/* Show full image if one is active */}
        {activeImage && (
          <div
            className={`modal-overlay ${activeImage ? "active" : ""}`}
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage === "img1" ? experience1 : experience2}
              alt="Full view"
              className="full-image"
            />
          </div>
        )}
      </div>
    </section>
    <section id="hobby" className="section hobby">
      <h1>My Hobby - Drawing</h1>

      <div className="slideshow-container">
        <button className="nav-button prev" onClick={prevDrawing}>
          ❮ Prev
        </button>

        <img
          src={drawings[currentDrawing]}
          alt="Drawing"
          className="slideshow-image"
        />

        <button className="nav-button next" onClick={nextDrawing}>
          Next ❯
        </button>
      </div>
    </section>


      {/* Contact Section */}
<section id="contact" className="section contact">
  <h1>Contact Me</h1>

  <div className="contact-container">
    {/* Name */}
    <div className="contact-card">
      <FaUser className="contact-icon" />
      <h3>Name</h3>
      <p><strong>SIVASANKARI G</strong></p>
    </div>

    {/* Phone Number */}
    <div className="contact-card">
      <FaPhoneAlt className="contact-icon" />
      <h3>Phone</h3>
      <p><strong>+91 8610678867</strong></p>
    </div>

    {/* Email */}
    <div className="contact-card">
      <FaEnvelope className="contact-icon" />
      <h3>Email</h3>
      <p><strong>siva.g282005@gmail.com</strong></p>
    </div>

    {/* LinkedIn */}
    <div className="contact-card">
      <FaLinkedin className="contact-icon" />
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/sivasankari-g-353464334/" target="_blank" rel="noopener noreferrer">
      <strong> https://www.linkedin.com/in/sivasankari-g </strong>
      </a>
    </div>

    {/* GitHub */}
    <div className="contact-card">
      <FaGithub className="contact-icon" />
      <h3>GitHub</h3>
      <a href="https://github.com/Sivag28" target="_blank" rel="noopener noreferrer">
      <strong>  https://github.com/Sivag28 </strong>
      </a>
    </div>
  </div>
</section>



    </div>
  );
};

export default App;
