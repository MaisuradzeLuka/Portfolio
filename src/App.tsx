import { Header, Work, About, Skills, Contact } from "./Containers";

import "./App.scss";
import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
