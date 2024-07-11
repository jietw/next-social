import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* Write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/25961163/pexels-photo-25961163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment..."
            className="bg-transparent outline-none flex-1"></input>
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/25961163/pexels-photo-25961163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* Desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spancer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              sunt quas accusamus vel, alias iusto earum id quis repudiandae
              aliquam dolorum tempora ut, voluptates nostrum deleniti soluta at
              modi eveniet.
            </p>
            <div className="flex items-center gap-8 text-xs text-slate-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  width={12}
                  height={12}
                  alt=""
                  className="cursor-pointer w-6 h-6"
                />
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* Icon */}
          <Image
            src="/more.png"
            width={16}
            height={16}
            alt=""
            className=" cursor-pointer w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
