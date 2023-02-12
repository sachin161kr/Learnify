import "./App.css";
import LoginSignup from "./pages/LoginSignup";

import Header from "./components/header";
import Footer from "./components/Footer";

import HomeScreen from "./pages/HomeScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ⭐ use this page for react navigation
// ⭐ Crete Pages in pages folder
// ⭐ Crete Components in component folder
// ⭐ follow "NewPage" <- naming case

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignup />,
    },
    {
      path: "/homescreen",
      element: <HomeScreen />,
    },
  ]);

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
        <div style={{ flexGrow: 1, background: "" }}>
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
