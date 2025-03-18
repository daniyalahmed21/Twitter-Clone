
import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Link from "next/link";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-0 h-screen py-3 pr-4 overflow-y-auto scrollbar-hide" >
      <Search />
      <PopularTags />
      <Recommendations />
      <footer className="text-gray-500 text-xs flex gap-x-3 gap-y-2 flex-wrap py-4 pb-8">
        <Link href="/" className="hover:underline">Terms of Service</Link>
        <Link href="/" className="hover:underline">Privacy Policy</Link>
        <Link href="/" className="hover:underline">Cookie Policy</Link>
        <Link href="/" className="hover:underline">Accessibility</Link>
        <Link href="/" className="hover:underline">Ads Info</Link>
        <Link href="/" className="hover:underline">More...</Link>
        <div className="w-full mt-1">© 2025 D Corp. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default RightBar;