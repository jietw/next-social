import React from "react";
import Image from "next/image";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center text-gray-500 font-medium ">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          width={16}
          height={16}
          alt=""
          className="w-6 h-6"
        />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}>
          <Image
            src="https://images.pexels.com/photos/26976251/pexels-photo-26976251.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26976251/pexels-photo-26976251.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className="rounded-full object-cover w-6 h-6"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={`size==="sm"?"test-xs":"text-sm"`}>
          {size === "sm"
            ? "lorem hyju uytr kiiijuy y65gre"
            : size === "md"
            ? "lorem ju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65gre"
            : "ju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65greju uytr kiiijuy y65gre"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
