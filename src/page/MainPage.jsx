import { Navbar } from "./../components/Navbar";
import { Contact } from "../components/Contact";
import { Projects } from "./../components/Projects";
// import Home from "./../components/Header";
import { Header } from "./../components/Header";
import { Skills } from "../components/Skils";
import { Certificates } from "./../components/Certificates";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
};

export default MainPage;
