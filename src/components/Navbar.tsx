import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden text-sm md:flex w-[50%]">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              width={16}
              height={16}
              alt="homepage"
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              width={16}
              height={16}
              alt="friendspage"
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              width={16}
              height={16}
              alt="storiespage"
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
