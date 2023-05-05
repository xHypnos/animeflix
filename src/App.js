import Header from "./components/Header";
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import Main from "./assets/pages/Main";
import VideoPlayer from "./assets/pages/VideoPlayer";
import Error404 from "./assets/pages/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAnime from "./assets/pages/NewAnime";
import { AuthProvider } from "./context/authContext";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import { ProtectedRoute, ProtectedUserRL } from "./components/ProtectedRoute";
import Profile from "./assets/pages/Profile";

function App() {

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle/>
        <Header/>
        
          <Routes>
            <Route
              path="/"
              element={ <Main/>}
            />
            <Route
              path="/register"
              element={ <ProtectedUserRL>
                          <Register/>
                      </ProtectedUserRL> }
            />
            <Route
              path="login"
              element={ <ProtectedUserRL>
                          <Login/>
                      </ProtectedUserRL> }
            />
            <Route
              path="/player/:id"
              element={ <VideoPlayer/>}
            />
            <Route
              path="/profile"
              element={ <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>}    
            />
            <Route
              path="/new"
              element={ <ProtectedRoute>
                            <NewAnime/>
                        </ProtectedRoute>}
            />
            <Route
              path="*"
              element={ <Error404/> }
            />
          </Routes>
        
        <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
