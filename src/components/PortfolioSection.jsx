import {
	SiBootstrap,
	SiFirebase,
	SiReactrouter,
	SiRedux,
} from "react-icons/Si";
import { SiHtml5 } from "react-icons/Si";
import { SiCss3 } from "react-icons/Si";
import { FaReact } from "react-icons/fa";
import { SiMaterialui } from "react-icons/Si";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

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
						GifApp
					</p>

					<div className="flex justify-center gap-1 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiCss3 color="#2962ff" className=" text-3xl" />
					</div>

					<div className="text-center mt-2 ">
						<a
							target="_blank"
							href="https://pabjvs.github.io/react-GifApp/"
							className="relative inline-block px-4 py-2 font-medium group "
						>
							<span className="absolute rounded-xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute  rounded-xl inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
							<span className="relative text-black group-hover:text-white">
								Demo
							</span>
						</a>
					</div>
				</div>

				<div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/HeroApp.png" alt="" />
					<p className="mt-3 sm:text-2xl font-semibold text-center">
						HeroApp
					</p>

					<div className="flex justify-center gap-2 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiBootstrap color="#4c0bce" className="text-3xl" />
						<SiReactrouter color="#3c3c3c" className=" text-3xl" />
					</div>
					<div className="text-center mt-2 ">
						<a
							target="_blank"
							href="https://pabjvs.github.io/HeroApp/"
							className="relative inline-block px-4 py-2 font-medium group "
						>
							<span className="absolute rounded-xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute  rounded-xl inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
							<span className="relative text-black group-hover:text-white">
								Demo
							</span>
						</a>
					</div>
				</div>

				<div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/JournalApp.png" alt="" />
					<p className="mt-3 sm:text-2xl font-semibold text-center">
						JournalApp
					</p>

					<div className="flex justify-center gap-2 mt-2">
						<FaReact color="#2196f3" className=" text-3xl" />
						<SiMaterialui color="#2962ff" className=" text-3xl" />
						<SiRedux color="#4c0bce" className=" text-3xl" />
						<SiFirebase color="#fcc203" className="text-3xl" />
					</div>
					<div className="text-center mt-2 ">
						<a
							target="_blank"
							href="https://pabjvs.github.io/JournalApp/"
							className="relative inline-block px-4 py-2 font-medium group "
						>
							<span className="absolute rounded-xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute  rounded-xl inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
							<span className="relative text-black group-hover:text-white">
								Demo
							</span>
						</a>
					</div>
				</div>

				<div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60">
					<img src="./assets/portfolio/Indesing.png" alt="" />

					<p className="mt-3 sm:text-2xl font-semibold text-center">
						Landing Page
					</p>

					<div className="flex justify-center gap-2 mt-2">
						<SiHtml5 color="#e06a46" className=" text-3xl" />
						<SiCss3 color="#2962ff" className="text-3xl" />
						<SiBootstrap color="#4c0bce" className="text-3xl" />
					</div>
					<div className="text-center mt-2 ">
						<a
							target="_blank"
							href="https://pabjvs.github.io/IndesingWeb/"
							className="relative inline-block px-4 py-2 font-medium group "
						>
							<span className="absolute rounded-xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute  rounded-xl inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
							<span className="relative text-black group-hover:text-white">
								Demo
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
