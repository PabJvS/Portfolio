import { SiBootstrap, SiFirebase, SiReactrouter, SiRedux } from "react-icons/Si";
import { SiHtml5 } from "react-icons/Si";
import { SiCss3 } from "react-icons/Si";
import { FaReact } from "react-icons/fa";
import { SiMaterialui } from "react-icons/Si";
import { ModalHero, ModalGif, ModalJournal, ModalLandingPage } from "./modals";

export const PortfolioSection = () => {
	// ;
	return (
		<div className="max-w-4xl mx-auto py-12 " id="post-1">
			<p
				className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl"
				id="portfolio"
			>
				Proyectos
			</p>
			<div className="flex flex-wrap justify-center pt-2">
				<div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/GifExpertApp.png" alt="" />

					<p className="mt-1 sm:mt-3 sm:text-2xl font-semibold text-center">
						GifExpertApp
					</p>

					<div className="flex justify-center gap-1 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiCss3 color="#2962ff" className=" text-3xl" />
					</div>

					<ModalGif />
				</div>

				<div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/HeroApp.png" alt="" />
					<p className="mt-3 sm:text-2xl font-semibold text-center">HeroApp</p>

					<div className="flex justify-center gap-2 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiBootstrap color="#4c0bce" className="text-3xl" />
						<SiReactrouter color="#3c3c3c" className=" text-3xl" />
					</div>

					<ModalHero />
				</div>

				<div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/JournalApp.png" alt="" />
					<p className="mt-3 sm:text-2xl font-semibold text-center">JournalApp</p>

					<div className="flex justify-center gap-2 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiMaterialui color="#2962ff" className=" text-3xl" />
						<SiRedux color="#4c0bce" className=" text-3xl" />
						<SiFirebase color="#fcc203" className="text-3xl" />
					</div>

					<ModalJournal />
				</div>

				<div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/Indesing.png" alt="" />

					<p className="mt-3 sm:text-2xl font-semibold text-center">Indesing</p>

					<div className="flex justify-center gap-2 mt-2">
						<SiHtml5 color="#e06a46" className=" text-3xl" />
						<SiCss3 color="#2962ff" className="text-3xl" />
						<SiBootstrap color="#4c0bce" className="text-3xl" />
					</div>

					<ModalLandingPage />
				</div>
			</div>
		</div>
	);
};
