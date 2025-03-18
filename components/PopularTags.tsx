import React from "react";
import Image from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="flex flex-col gap-2 border border-gray-700 p-5 rounded-2xl">
      <h1 className="font-bold text-xl text-white">
        {`What's`} Happening
      </h1>
      
      {/* Featured News with Image */}
      <div className="flex gap-4 group cursor-pointer hover:bg-[#181818] p-2 rounded-lg transition-colors">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/post.jpeg"
            alt="event"
            width={120}
            height={120}
            tr={true}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <span className="text-gray-400 text-xs">Sports • Trending</span>
          <h2 className="font-bold text-white">
            Nadal v Federer Grand Slam Final
          </h2>
          <span className="text-sm text-gray-400">3.2M posts • Last Night</span>
        </div>
      </div>
      
      {/* Trending Topic */}
      <div className="cursor-pointer hover:bg-[#181818] p-2 rounded-lg transition-colors">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Technology • Trending</span>
          <button className="p-1 rounded-full hover:bg-[#181818] transition-colors">
            <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
          </button>
        </div>
        <h2 className="text-white font-bold mt-1">OpenAI</h2>
        <span className="text-gray-400 text-xs">20K posts</span>
      </div>
      
      {/* Politics Trending */}
      <div className="cursor-pointer hover:bg-[#181818] p-2 rounded-lg transition-colors">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Politics • Trending</span>
          <button className="p-1 rounded-full hover:bg-[#181818] transition-colors">
            <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
          </button>
        </div>
        <h2 className="text-white font-bold mt-1">Election 2025</h2>
        <span className="text-gray-400 text-xs">45.7K posts</span>
      </div>
      
      {/* Entertainment Trending */}
      <div className="cursor-pointer hover:bg-[#181818] p-2 rounded-lg transition-colors">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Entertainment • Live</span>
          <button className="p-1 rounded-full hover:bg-[#181818] transition-colors">
            <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
          </button>
        </div>
        <h2 className="text-white font-bold mt-1">Awards Season</h2>
        <span className="text-gray-400 text-xs">15.2K posts</span>
      </div>
      
      <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
        Show more
      </Link>
    </div>
  );
};

export default PopularTags;