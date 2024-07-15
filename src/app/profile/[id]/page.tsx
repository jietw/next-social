import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 p-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 pt-6">
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;