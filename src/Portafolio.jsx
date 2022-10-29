// import './App.css';
import { AboutSection } from "./components/AboutSection";
import { CardUi } from "./components/CardUi";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { SkillSection } from "./components/SkillSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PortfolioSection } from "./components/PortfolioSection";
import { Nav } from "./components/Nav";

export const Portafolio = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className=" min-h-screen py-2 px-3 sm:px-5 bg-gray-100 ">
			<Nav />
			<div data-aos="fade-down" data-aos-duration="800">
				<CardUi />
			</div>
			<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
				<AboutSection />
			</div>
			<SkillSection />
			<PortfolioSection />
			<ContactSection />
			<FooterSection />
		</div>
	);
};
