import Link from "next/link";
import React from "react";
import Image from "./Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-2 justify-between sticky top-0 pt-2 pb-8">
      <div className="flex flex-col gap-4 text-md items-center xxl:items-start">
        {/* Logo image */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
          <Image path="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex flex-col gap-2">
          {menuList.map((item) => {
            return (
              <Link
                className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                href={item.link}
                key={item.id}
              >
                <Image  path={`icons/${item.icon}`} width={24} height={24} alt={item.name} />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image className="text-black" path="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>

      <div className="flex items-center gap-3 p-3  rounded-full cursor-pointer transition-colors mt-auto">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image 
            path="/general/avatar.png" 
            alt="Lama Dev" 
            width={100} 
            height={100} 
            tr={true} 
            className="object-cover"
          />
        </div>
        <div className="hidden xxl:flex flex-col flex-1">
          <span className="font-bold">Lama Dev</span>
          <span className="text-sm text-gray-400">@lamaWebDev</span>
        </div>
        <div className="hidden xxl:flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <circle cx="2" cy="8" r="2" />
            <circle cx="8" cy="8" r="2" />
            <circle cx="14" cy="8" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
