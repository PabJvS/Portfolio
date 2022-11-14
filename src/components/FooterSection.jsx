import ScrollToTop from "react-scroll-to-top";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrFormUp } from "react-icons/gr";

import "aos/dist/aos.css";

export const FooterSection = () => {
	return (
		<div className="py-5 border-t-3/2">
			<ScrollToTop
				data-aos="fade-up"
				className="animate-bounce flex justify-center text-4xl"
				smooth
				component={<GrFormUp />}
				top="1600"
			/>

			<div className="flex justify-center mt-4">
				<a
					href=""
					className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
				>
					<FaGithub />
					<span className="sr-only">Github</span>
				</a>
				<a
					href=""
					className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
				>
					<FaLinkedin />
					<span className="sr-only">Linkedin</span>
				</a>
			</div>
			<div className=" flex justify-center mt-4">
				<p className=" text-black mb-4">
					{" "}
					<span className="mr-1" role="img" aria-label="heart">
						Made with 💙 in Ecuador
					</span>
					by{" "}
					<a
						className="text-blue-500 hover:underline"
						href="mailto:pablojovsa-94@homtail.com"
					>
						Pablo/Dev
					</a>
				</p>
			</div>
		</div>
	);
};
