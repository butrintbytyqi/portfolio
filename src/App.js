import "./App.css";
import "./fonts/Orbitron-VariableFont_wght.ttf";
import cv from "./downloads/FinalCVButrintBytyqi.pdf";

function App() {
  return (
    <>
      <div className="container">
        <div className="topNav">
          <nav>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">about me</a>
              </li>
              <li>
                <a href="">projects</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="section-right">
          <div className="section-home">
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

          <div className="section-aboutMe">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
