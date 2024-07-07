import React from "react";
import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar-hide text-xs">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;