import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Video from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  async function getFileDetails(fileId: string): Promise<FileDetailsResponse | null> {
    try {
      return new Promise((res, rej) => {
        imagekit.getFileDetails(fileId, function (error, result) {
          if (error) rej(error);
          else res(result as FileDetailsResponse);
        });
      });
    } catch (error) {
      console.error("Error fetching file details:", error);
      return null;
    }
  }

  const fileDetails = await getFileDetails("67d1cabd432c476416a33854");
  
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex gap-2 items-center text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Lama Dev reposted</span>
      </div>
      {/* Post Content */}
      <div className="flex gap-4">
        {/* Avatar */}
        <Link href={`/lamaWebDev`}>
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              width={100}
              height={100}
              tr={true}
              alt="Avatar"
            />
          </div>
        </Link>
        {/* Content */}
        <div className={`flex flex-1 flex-col gap-2`}>
          <div className="flex items-center gap-2 justify-between">
          <Link href={`/lamaWebDev`}>
            <div className={`flex ${type === "status" ? "flex-col gap-0 !items-start" : "flex-row"} gap-2 flex-wrap items-center`}>
              <h1 className="text-md font-bold">Lama Dev</h1>
              <span className={`text-textGray ${type === "status" && "text-sm"}`}>@LamaDevWeb</span>
              {type !== "status" && (
                <span className="text-textGray text-sm">1 day ago</span>
              )}
            </div>
            </Link>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam doloremque quaerat, hic deserunt nisi illum inventore
            blanditiis sapiente adipisci! Hic, vero!
          </p>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              className={
                fileDetails.customMetadata?.sensitive === true
                  ? "blur-lg"
                  : "blur-0"
              }
              path={fileDetails.filePath}
              width={fileDetails.width}
              height={fileDetails.height}
              alt=""
            />
          ) : fileDetails ? (
            <Video
              path={fileDetails.filePath}
              className={
                fileDetails.customMetadata?.sensitive === true
                  ? "blur-lg"
                  : "blur-0"
              }
            />
          ) : null}
           {type === "status" && (
            <span className="text-textGray">8:41 PM · Mar 5, 2025</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;