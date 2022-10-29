import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

export const AboutSection = () => {
	return (
		<div className="max-w-4xl mt-20 sm:mt-11 mx-auto">
			<p className=" text-xl  text-black  dark:text-zinc-100 sm:text-4xl font-bold text-center">
				Hola bienvenido a mi mundo! 👋
			</p>
			<p className=" text-base sm:text-xl text-center text-gray-600 dark:text-zinc-100 mt-4 leading-relaxed">
				Soy Pablo, Ingeniero en Sistemas y desarrollador me gusta trabajar
				con React Js, disfruto diseñar y aplicar mis conocimientos en
				Front-end.
			</p>

			<ScrollIntoView selector="#tech">
				<div className="mx-auto pt-20 md:pt-9 p-12 ">
					<FaChevronDown className="mx-auto text-3xl animate-bounce text-blue-500 cursor-pointer" />
				</div>
			</ScrollIntoView>
		</div>
	);
};
