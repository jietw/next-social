import React from "react";
import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium ">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER */}
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
