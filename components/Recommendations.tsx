import Link from "next/link";
import Image from "./Image";

const Recommendations = () => {
  // Sample data for recommended users
  const recommendedUsers = [
    {
      id: 1,
      name: "Jane Smith",
      username: "janesmith",
      image: "general/avatar.png",
      verified: true
    },
    {
      id: 2,
      name: "Alex Morgan",
      username: "alexdev",
      image: "general/avatar.png",
      verified: false
    },
    {
      id: 3,
      name: "Taylor Chen",
      username: "techaylor",
      image: "general/avatar.png",
      verified: true
    }
  ];

  return (
    <div className="p-5 rounded-2xl border border-gray-700  flex flex-col gap-5">
      <h2 className="font-bold text-xl text-white">Who to follow</h2>
      
      {/* User Cards */}
      {recommendedUsers.map(user => (
        <div key={user.id} className="flex items-center justify-between group hover:bg-[#181818] p-2 rounded-lg transition-colors">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="relative rounded-full overflow-hidden w-12 h-12">
              <Image 
                path={user.image} 
                alt={user.name} 
                width={96} 
                height={96} 
                tr={true}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-white">{user.name}</h3>
                {user.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <span className="text-gray-400 text-sm">@{user.username}</span>
            </div>
          </div>
          
          {/* Follow Button */}
          <button className="py-1.5 px-5 font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Follow
          </button>
        </div>
      ))}
      
      <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
        Show more
      </Link>
    </div>
  );
};

export default Recommendations;