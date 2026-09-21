import Header from "./components/Header/Header";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;