import { Header, Work, Skills, Contact } from "./Containers";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
