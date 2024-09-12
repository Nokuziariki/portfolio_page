import "./styles/App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
