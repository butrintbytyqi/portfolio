import "./App.css";
import "./fonts/Orbitron-VariableFont_wght.ttf";
import cv from "./downloads/FinalCVButrintBytyqi.pdf";
import upz from "./img/upz.png";
import makerspace from "./img/makerspace.png";
import jcoders from "./img/jcoders.png";
import reactLogo from "./img/reactLogo.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="topNav">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#aboutme">about me</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>

        <div className="section-right">
          <div className="section-home" id="home">
            <h1>I am Butrint Bytyqi.</h1>
            <h5>Front End & React Developer</h5>
            <hr />
            <p>
              From day one, technology has fascinated me. It was something I
              would never tire of doing. I have always loved creating websites
              and apps!
            </p>
            <a href={cv} download>
              Download CV
            </a>
          </div>

          <div className="section-aboutMe" id="aboutme">
            <h1>About Me</h1>
            <div className="cards">
              <div className="card1">
                <img src={upz} alt="" />
                <h1>University "Ukshin Hoti" Prizren </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  non laudantium minus. Repellendus, itaque reprehenderit! Odio
                  enim sed ipsam eius laboriosam asperiores numquam, similique
                  fuga, ducimus mollitia facere est. Modi!
                </p>
              </div>
              <div className="card1">
                <img src={makerspace} alt="" />
                <h1>MakerSpace Innovation Center</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  non laudantium minus. Repellendus, itaque reprehenderit! Odio
                  enim sed ipsam eius laboriosam asperiores numquam, similique
                  fuga, ducimus mollitia facere est. Modi!
                </p>
              </div>
              <div className="card1">
                <img src={jcoders} alt="" />
                <h1>jCoders Academy </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  non laudantium minus. Repellendus, itaque reprehenderit! Odio
                  enim sed ipsam eius laboriosam asperiores numquam, similique
                  fuga, ducimus mollitia facere est. Modi!
                </p>
              </div>
            </div>
          </div>

          <div className="section-projects" id="projects">
            <h1>Projects</h1>
            <div className="project-cards">
              <div className="github-card">
                <a href="https://github.com/butrintbytyqi/Feedback-App.git">
                  Feedback-App
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  veniam quae tenetur beatae minima odit veritatis, culpa eum et
                  impedit.
                </p>
                <div className="react-logo">
                  <img src={reactLogo} alt="" />
                  <p>Made with React</p>
                </div>
              </div>
              <div className="github-card">
                <a href="https://github.com/butrintbytyqi/Feedback-App.git">
                  Feedback-App
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  veniam quae tenetur beatae minima odit veritatis, culpa eum et
                  impedit.
                </p>
                <div className="react-logo">
                  <img src={reactLogo} alt="" />
                  <p>Made with React</p>
                </div>
              </div>
              <div className="github-card">
                <a href="https://github.com/butrintbytyqi/Feedback-App.git">
                  Feedback-App
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  veniam quae tenetur beatae minima odit veritatis, culpa eum et
                  impedit.
                </p>
                <div className="react-logo">
                  <img src={reactLogo} alt="" />
                  <p>Made with React</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-contact" id="contact">
            <h1>Contact</h1>
            <div className="inputs">
              <p>Let's meet! Send a message</p>
              <input type="name" username="name" placeholder="Name"></input>
              <input type="email" name="email" placeholder="Email" />
              <input
                type="subject"
                username="subject"
                placeholder="Subject"
              ></input>
              <textarea type="text" name="message" placeholder="Message" />
              <button>Send Message</button>
            </div>
          </div>

          <footer>
            Copyright Protected © <br />
            <br />
            Powered by Butrint Bytyqi
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
