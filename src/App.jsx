// src/App.jsx

import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Footer from './components/Footer';
import sfu from './assets/backgrounds/sfu.jpg';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div
          className="pb-10 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                165deg,
                rgba(20,20,20,0.8) 100%,
                rgba(109,109,116,0.8) 100%
              ),
              url(${sfu})
            `,
          }}
        >
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>

        <div className="relative z-0">
          <Contact />
        </div>

        {/* Footer added below */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
