import { portfolio } from './data/portfolio.js';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Skills } from './components/sections/Skills.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  return (
    <div className="page-shell relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-[-10rem] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-4rem] h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <Navbar name={portfolio.name} />

      <main>
        <Hero portfolio={portfolio} />
        <About portfolio={portfolio} />
        <Skills portfolio={portfolio} />
        <Projects projects={portfolio.projects} />
        <Contact portfolio={portfolio} />
      </main>

      <Footer portfolio={portfolio} />
    </div>
  );
}

export default App;

