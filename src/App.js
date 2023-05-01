import Header from "./components/Header";
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import Main from "./assets/pages/Main";
import VideoPlayer from "./assets/pages/VideoPlayer";
import Error404 from "./assets/pages/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAnime from "./assets/pages/NewAnime";

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={ <Main/>}
        />
        <Route
          path="/player/:id"
          element={ <VideoPlayer/>}
        />
        <Route
          path="/new"
          element={ <NewAnime/>}
        />
        <Route
          path="*"
          element={ <Error404/> }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
