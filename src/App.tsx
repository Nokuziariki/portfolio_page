import "./styles/App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Projects from "./components/projects";
import Game from "components/game";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <About />
            <Projects />
            <Game />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
