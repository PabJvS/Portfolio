import React from "react";
import profile from "../assets/img/avatar2.jpeg";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export const CardUi = () => {
	return (
		<div className="w-full mt-10 sm:mt-0">
			<div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl pt-5 pb-3 ">
				<div>
					<img
						className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
						src={profile}
						alt="profile"
					/>
				</div>
				<div className="text-center mt-5">
					<p className="text-xl sm:text-2xl font-semibold text-gray-900">
						PabloJvS
					</p>
					<p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
						Front-End - Developer
					</p>
					<div className="flex align-center justify-center mt-2">
						<a
							href="https://github.com/PabJvS"
							className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
						>
							<FaGithub />
							<span className="sr-only">Github</span>
						</a>
						<a
							href="https://www.linkedin.com/in/pablojvs94/"
							className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
						>
							<FaLinkedin />
							<span className="sr-only">Linkedin</span>
						</a>
						<a
							href="mailto:pablojovsa-94@homtail.com"
							className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
						>
							<FaRegEnvelope />
							<span className="sr-only">Email</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
