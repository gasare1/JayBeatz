import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Homes from "./Components/Home/Homes";
import About from "./Components/About/About";
import Collab from "./Components/Collab/Collab";
import Book from "./Book/Book";


function App() {
  return (
    <Router>
      <Header />
      <Homes />
      <About />
      <Collab/>
      <Book/>
    </Router>
  );
}

export default App;
