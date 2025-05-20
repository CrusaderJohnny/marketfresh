"use client";
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Market() {
    const router = useRouter();
    const profpic = require("../assets/CFMLogo.png");
    const arrow = require("../assets/arrow.png");
    const [isExpanded, setIsExpanded] = useState(false);
    const maxHeight = isExpanded ? 'max-h-none' : 'max-h-24 overflow-hidden';
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }
    return(
    <div className="flex border-4 max-w-3xl relative bg-white">
      {/* Image on the left */}
        <div className="w-40 flex-shrink-0 flex items-center">
            <Image src={profpic} alt="CFM Logo" width={160} height={160} className="object-cover" />
        </div>

        {/* Title and Description Column */}
        <div className="flex-grow ml-4 flex flex-col justify-between">
            {/* Title */}
            <div>
                <h1 className="text-3xl font-semibold text-black">Calgary Farmers Market</h1>
            </div>

            {/* Description with Read More/Less */}
            <div className="m-2">
                <div className={`${maxHeight} transition-all duration-300 border-2 border-black`}>
                    <p className="p-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vitae eros et eros egestas suscipit. Nunc sed ultricies lacus, sed dapibus nisi.
                    Donec non enim eget metus varius viverra ac ullamcorper lorem. Cras sit amet tempor nulla.
                    Quisque faucibus dolor ut felis aliquet molestie. Duis consectetur mi eu interdum congue.
                    Etiam a egestas urna. Sed a varius magna, in interdum ligula.
                    Praesent sagittis varius turpis, quis ullamcorper justo. Donec pellentesque dapibus dictum.
                    </p>
                </div>
                <div className="mt-2">
                    <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-full text-sm"
                    onClick={toggleExpansion}
                    >
                    {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>

        {/* Arrow at the bottom left */}
            <div className="absolute bottom-0.5 right-2">
                <p className="text-black flex flex-row items-center">
                    Directions
                    <button onClick={() => router.push('/')}>
                    <Image src={arrow} alt="To Maps" width={40} height={40} />
                    </button>
                </p>
            </div>
        </div>
    );
};