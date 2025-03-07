import React from "react";
import Image from "next/image";
import { log } from "console";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

// const AddPost = () => {
//   const { userId } = auth();
//   console.log(userId);

//   const testAction = async (formData: FormData) => {
//     "use server";
//     if (!userId) return;

//     const desc = formData.get("desc") as string;
//     try {
//       const res = await prisma.post.create({
//         data: {
//           userId: userId,
//           desc: desc,
//         },
//       });
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/13975586/pexels-photo-13975586.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="image"
        width={48}
        height={48}
        className="w-12 h-12 object-center rounded-full"></Image>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        {/* action={testAction} */}
        <form action="" className="flex gap-4">
          <textarea
            className="flex-1 bg-slate-100 rounded-lg p-2"
            placeholder="What's on your mind?"
            name="desc"></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"></Image>
          <button>Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
