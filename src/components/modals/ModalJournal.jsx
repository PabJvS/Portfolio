import { useState } from "react";

export const ModalJournal = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="mx-auto">
				<button
					className="bg-blue-500 text-white active:bg-blue-600 hover:bg-blue-600 font-bold uppercase text-sm w-32 px-2 py-3 mt-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
					type="button"
					onClick={() => setShowModal(true)}
				>
					Ver proyecto
				</button>
			</div>

			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-2 sm:m-0"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="400"
					>
						<div className="relative w-auto my-6 mx-auto max-w-sm">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">JournalApp</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-slate-500 text-lg leading-relaxed">
										Es una aplicación que permite al usuario crear notas de
										actividades diarias, el proyecto está realizado con React,
										empleando registro de usuarios, autenticación de Google y
										por correo electrónico, se utilizó Redux para realizar el
										proyecto, para el almacenamiento de datos se utilizó Cloud
										Firestore de Firebase.
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Cerrar
									</button>
									<a
										className="bg-blue-500 text-white active:bg-blue-600 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										target="_blank"
										href="https://pabjvs.github.io/JournalApp/"
										onClick={() => setShowModal(false)}
									>
										Ir a Demo
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
