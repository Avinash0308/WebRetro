import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import eventLinks from "./JSON/events.json"
import Change from "./Components/settings/changePass";
import Events from "./Pages/Events";
import Home from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Forgot from "./Components/settings/forgotPass";
import UserPage from "./Pages/UserPage";
import About from "./Pages/AboutPage";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } />

          <Route path="/login"
            element={
              <Login />
            } />

          <Route path="/signup"
            element={
              <SignupPage />
            } />

          <Route path="/change-password"
            element={
              <Change />
            } />

          <Route path="/forgot-password"
            element={
              <Forgot />
            } />

          <Route path="/user"
            element={
              <UserPage />
            } />

          <Route path="/home"
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            } />
          
          <Route path="/about"
            element={
              <CommonContainer>
                <About />
              </CommonContainer>
            } />

          <Route path="/events"
            element={
              <CommonContainer>
                <Events />
              </CommonContainer>
            } />
          {
            eventLinks.map((item) => {
              return (
                <Route path={`/${item.eventName}`}
                  element={
                    <CommonContainer>
                      <Events
                        name={item.eventName}
                        date={item.eventDate}
                        desc={item.description}
                        image={item.image}
                        googleForm={item.googleForm}
                      />
                    </CommonContainer>
                  } />
              )
            })
          }

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
