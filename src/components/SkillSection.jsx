import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/Si";
import { SiBootstrap } from "react-icons/Si";
import { SiHtml5 } from "react-icons/Si";
import { SiCss3 } from "react-icons/Si";
import { SiJavascript } from "react-icons/Si";
import { Arrow } from "./Arrow";

export const SkillSection = () => {
	return (
		<div className="max-w-4xl mx-auto py-12" id="tech">
			<p className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl ">
				Tech I Use
			</p>
			<div className="flex flex-wrap justify-center pt-7 sm:pt-2">
				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<SiHtml5 color="#e06a46" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						Html5
					</p>
				</div>

				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<SiCss3 color="#2962ff" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						Css3
					</p>
				</div>

				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<SiJavascript color="#e8d535" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						Javascript
					</p>
				</div>

				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						TailwindCSS
					</p>
				</div>

				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<SiBootstrap color="#4c0bce" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						Bootstrap
					</p>
				</div>

				<div className="flex flex-col w-40 p-10 sm:m-6 m-2 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52">
					<FaReact color="#2196f3" className="mx-auto text-4xl" />
					<p className="mt-6 sm:text-2xl font-semibold text-center">
						React
					</p>
				</div>

				{/* <div className=' flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-52'>
                  <SiFigma color='#2196f3' className='mx-auto text-4xl' />
                  <p className='mt-6 sm:text-2xl font-semibold text-center'>
                    Figma
                  </p>
              </div> */}
			</div>
			<Arrow />
		</div>
	);
};
