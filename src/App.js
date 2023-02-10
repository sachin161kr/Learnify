import "./App.css";
import LoginSignup from "./pages/LoginSignup";

import Header from "./components/header";
import Footer from "./components/Footer";

// ⭐ use this page for react navigation
// ⭐ Crete Pages in pages folder
// ⭐ Crete Components in component folder
// ⭐ follow "NewPage" <- naming case

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header />
        <LoginSignup />
        <Footer />
      </div>
    </>
  );
}

export default App;
