import React from "react";

export const Nav = () => {
	return (
		<>
			<div className=" max-w-5xl mx-auto py-4 px-2 bg-gray-100 sticky top-0 z-20 shadow-sm sm:shadow-none">
				<div className="flex justify-between flex-col sm:flex-row text-center">
					<div>
						<span className=" text-2xl font-bold ">
							Pab<span className="text-blue-500">Dev</span>
						</span>
					</div>
					<div className=" mt-2 sm:mt-0">
						<ul className="flex justify-center gap-10 ">
							<li>
								<a
									href="#post-1"
									className="text-xl font-bold duration-300 hover:text-blue-500"
								>
									Proyectos
								</a>
							</li>

							<li>
								<a
									href="#post-2"
									className="text-xl font-bold duration-300 hover:text-blue-500 "
								>
									Contacto
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
