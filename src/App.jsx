import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import AboutPage from "@/pages/AboutPage";
import { AnimatePresence } from "framer-motion";

function App() {
	const [isDark, setIsDark] = React.useState(false);
	const location = useLocation();

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<div className={`min-h-screen ${isDark ? "dark" : ""}`}>
			<div className="bg-background text-foreground flex flex-col min-h-screen">
				<Header isDark={isDark} toggleTheme={toggleTheme} />
				<main className="flex-grow">
					<AnimatePresence mode="wait">
						<Routes location={location} key={location.pathname}>
							<Route path="/" element={<HomePage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="/blog/:id" element={<BlogPostPage />} />
							<Route path="/about" element={<AboutPage />} />
						</Routes>
					</AnimatePresence>
				</main>
				<Footer />
				<Toaster />
			</div>
		</div>
	);
}

export default App;
