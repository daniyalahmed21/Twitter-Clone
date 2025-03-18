import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center gap-6 sticky top-0 z-10 backdrop-blur-md p-4 bg-black/70 border-b border-gray-800">
        <Link href={"/"} className="p-2 rounded-full hover:bg-gray-800 transition-colors">
          <Image path="icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <div>
          <h1 className="font-bold text-xl">Lama Dev</h1>
          <p className="text-xs text-gray-400">1,205 posts</p>
        </div>
      </header>

      {/* Cover & Profile Image */}
      <div className="relative">
        <div className="w-full aspect-[3/1] relative">
          <Image
            className="object-cover"
            path="general/cover.jpg"
            alt="cover"
            width={600}
            height={200}
            tr={true}
          />
        </div>
        <div className="absolute left-4 -bottom-16 border-4 border-black overflow-hidden rounded-full w-32 h-32">
          <Image
            className="object-cover"
            path="general/avatar.png"
            alt="avatar"
            width={128}
            height={128}
            tr={true}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full items-center justify-end gap-3 px-4 pt-3 pb-10">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-800 transition-colors">
          <Image path="icons/more.svg" alt="more" width={20} height={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-800 transition-colors">
          <Image path="icons/explore.svg" alt="explore" width={20} height={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-800 transition-colors">
          <Image path="icons/message.svg" alt="message" width={20} height={20} />
        </button>
        <button className="py-2 px-6 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
          Follow
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 pb-4 flex flex-col gap-3 border-b border-gray-800">
        {/* Username & Handle */}
        <div>
          <h1 className="text-2xl font-bold">Lama Dev</h1>
          <span className="text-gray-400 text-sm">@lamaWebDev</span>
        </div>
        
        {/* Bio */}
        <p className="text-base">Lama Dev Youtube Channel | Web Development Tutorials | JavaScript, React, Next.js</p>
        
        {/* Details */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Image
              path="icons/userLocation.svg"
              alt="location"
              width={18}
              height={18}
            />
            <span>San Francisco, USA</span>
          </div>
        
          <div className="flex items-center gap-2">
            <Image 
              path="icons/date.svg" 
              alt="date" 
              width={18} 
              height={18} 
            />
            <span>Joined May 2021</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex gap-5 mt-1">
          <div className="flex items-center gap-1">
            <span className="font-bold">1.2K</span>
            <span className="text-gray-400 text-sm">Following</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold">35.4K</span>
            <span className="text-gray-400 text-sm">Followers</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs
      <div className="flex border-b border-gray-800">
        <button className="flex-1 py-4 font-bold text-center border-b-4 border-blue-500">
          Posts
        </button>
        <button className="flex-1 py-4 text-gray-400 text-center hover:bg-gray-900 transition-colors">
          Replies
        </button>
        <button className="flex-1 py-4 text-gray-400 text-center hover:bg-gray-900 transition-colors">
          Media
        </button>
        <button className="flex-1 py-4 text-gray-400 text-center hover:bg-gray-900 transition-colors">
          Likes
        </button>
      </div> */}

      {/* Feed */}
      <Feed />
    </div>
  );
};

export default UserPage;