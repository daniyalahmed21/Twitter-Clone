import Comments from "@/components/Comments";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";
import React from "react";

const StatusPage = () => {
  return (
    <div>
      <header className="flex items-center gap-6 sticky top-0 z-10 backdrop-blur-md p-4 bg-black/70 border-b border-gray-800">
        <Link
          href={"/"}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Image path="icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <div>
          <h1 className="font-bold text-xl">Post</h1>
        </div>
      </header>
      <Post type="status"/>
      <Comments/>
    </div>
  );
};

export default StatusPage;
