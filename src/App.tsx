import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import PageLayout from "./components/PageLayout";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import LevelSelectPage from "./pages/LevelSelectPage/LevelSelectPage";
import TestPage from "./components/TestPage.tsx";
import LandingPage from "./components/LandingPage/landingpage";
import GraphApplicationTest from "./pages/GraphApplicationTest/GraphApplicationTest.tsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="levels" element={<LevelSelectPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/graph" element={<GraphApplicationTest />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
