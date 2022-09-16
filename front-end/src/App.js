// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
