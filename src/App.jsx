import Header from "./components/Header/Header";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;