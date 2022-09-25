import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
