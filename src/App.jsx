import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}><HomePage /></motion.div>} />
        <Route path="/projects/:slug" element={<motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}><ProjectDetailsPage /></motion.div>} />
        <Route path="*" element={<motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><HomePage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}
