import Image from "next/image";
import React from "react";
import { cards, colleagues } from "@/lib/utils";

import { AiFillThunderbolt } from "react-icons/ai";

export default function Home() {
	return (
		<div className="w-[90%] p-2 mt-6 mx-auto">
			<div className="flex gap-x-4">
				<div className="w-[70%] ">
					<h1 className="text-lg font-semibold tracking-wider text-gray-700">
						Upcoming Cofechats
					</h1>
					<div className="flex justify-between my-4 gap-x-8">
						{cards.map((card, idx) => (
							<div key={idx}>
								<div className="rounded-md shadow-md border-t-2 border-sky-500">
							<div className="border-b border-gray-300 p-2 flex items-end">
								<Image
									src={card.img}
									alt="avatar"
									quality="95"
									priority={true}
									className="border-b-4 border-sky-600 w-[4.5rem] h-[4.5rem] rounded-full object-cover"
								/>

								<div className="ml-4 tracking-wider">
									<h2 className="text-gray-600 text-lg font-semibold">{card.name}</h2>
									<span className="text-gray-500 text-sm">
										last seen at {card.time}
									</span>
								</div>
							</div>

							<div className="px-4 pb-4 mt-4 tracking-wider">
								<p className="text-gray-600 text-lg font-semibold">
									{card.job}
								</p>
								<p className="h-[18vh] text-sky-900 text-sm py-1">
               {card.text}
								</p>

								<button
									className="flex items-center mt-4 bg-gradient-sky bg-gradient-sky-hover text-white font-semibold rounded-md py-1 px-2 tracking-wider 
								cursor-pointer"
								>
									<AiFillThunderbolt className="mr-1 text-yellow-300" />
									{card.status}
								</button>
							</div>
						</div>
						</div>
							))}
					</div>
				</div>

				<div className="w-[30%]">
					<h1 className="text-lg font-semibold tracking-wider text-gray-700">
						Colleagues
					</h1>
				<div className="my-4 flex flex-col gap-y-4">

         {colleagues.map((colleague, index) => (
	           <div key={index} className="rounded-md shadow-md border-t-2 border-sky-500">
						<div className="flex items-center p-2 tracking-wider">
							<Image
								src={colleague.img}
								alt="avatar"
								quality="95"
								priority={true}
								className="border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover"
							/>
							<h2 className="mx-2 font-semibold text-gray-700">{colleague.name}</h2>
							<p className="text-sky-900">{colleague.job}</p>
						</div>
					</div>
        ))
         }
					</div>
				</div>
			</div>
		</div>
	);
}
