import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Homes from "./Components/Home/Homes";
import About from "./Components/About/About";
import Collab from "./Components/Collab/Collab";
import Book from "./Book/Book";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Header />
      <Homes path="/" component={Homes} exact />
      <About path="about" component={About} exact />
      <Collab path="collab" component={Collab} exact />
      <Book path="book" component={Book} exact />
      <div class="copyright text-center" style={{ background: "gray" }}>
        Copyright &copy; 2021 <span>JayBeatz All Rights Reserved</span>
      </div>
    </Router>
  );
}

export default App;
