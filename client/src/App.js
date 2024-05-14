import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//ways to contact me icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// here's all my skill icons
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { faUbuntu } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      
      <div class="main">
        <div class="column left">
          <h1 class="floating-text">Hello, I'm Gabriella Smith</h1>
          <h2 class="floating-text">A computer science student at the University of Florida</h2>
          <div></div>
          <div className='left links floating-text'>
            <a href="https://github.com/sassygabyrose">
              <FontAwesomeIcon icon={faGithub} size="3x"style={{ marginRight: '20px' }} className='i' />
            </a>
            <a href="https://www.linkedin.com/in/gabriella-rose-smith/">
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" style={{ marginRight: '20px' }} className='i'/>
            </a>
            <button className='t-button'>Resume</button>
            
          </div>
          
        </div>
        <div class="column right">
          {/* The about section */}
          <div class="about">
            
            <p>I am a rising junior computer science student with a minor in Digital Arts and Sciences. While at the University of Florida, I have gotten involved in many organizations to heighten my technical skills and gain hands-on experience. In Dream Team Engineering, our mission is to use our technical expertise to solve medical problems facing patients and doctors at local Gainesville hospitals and UF Health. Through this organization, I have worked on a patient portal for the Equal Access Clinics of Gainesville and a VR game to help teach newly diagnosed diabetic-children about fats and carbohydrates. 

I am also involved in research investigating how virtual humans can be utilized to improve sexual health communication. 
</p>
            <img src="pic.png" className='circular-img'/>
          </div>
          <div className='skills right'>
            <h1 class="skill-title" >My Skills</h1>
            <div>
              <div className='top-row skill-box'>
              <FontAwesomeIcon icon={faPython} size="4x" style={{ marginRight: '20px' }} className='i'/>
              <FontAwesomeIcon icon={faHtml5} size="4x" style={{ marginRight: '20px' }} className='i'/>
              <FontAwesomeIcon icon={faReact} size="4x" style={{ marginRight: '20px' }} className='i'/>
              <FontAwesomeIcon icon={faUnity} size="4x" style={{ marginRight: '20px' }} className='i'/>
              <FontAwesomeIcon icon={faUbuntu} size="4x" style={{ marginRight: '20px' }} className='i'/>
              </div>
              <div className='bottom-row skill-box'>
              <FontAwesomeIcon icon={faNodeJs} size="4x" style={{ marginRight: '20px' }} className='i'/>
              <img src='sql.png' className='i sql'/>
              </div>
              
              
            </div>

          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
