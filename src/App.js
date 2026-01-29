import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VisionMission } from "./components/VisionMission";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-[#0a1628] dark:to-[#1a1a3e] transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="pt-20">
          <Hero />
          {/* <VisionMission /> */}
          <Services />
          <Stats />
          <About />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
