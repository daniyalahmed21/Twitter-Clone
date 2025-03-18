"use client";
import React, { useState } from "react";
import Image from "./Image";
import { default as NextImage } from "next/image";
import ImageEditor from "./ImageEditor";
import { shareAction } from "@/action";
const Comments = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  console.log(media);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(media?.type);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMedia(file);
    }
  };
  const previewUrl = media ? URL.createObjectURL(media) : null;
  return (
    <div>
      <form
        className="flex p-4 gap-4"
        action={(formData) => shareAction(formData, settings)}
      >
        <div className="relative w-10 h-10 rounded-full  overflow-hidden">
          <Image
            path="general/avatar.png"
            width={100}
            height={100}
            tr={true}
            alt="Avatar"
          />
        </div>
        <div className="flex-1 flex justify-between gap-4">
          <input
            type="text"
            name="desc"
            placeholder="Post yor reply"
            className="bg-transparent text-xl border-none outline-none placeholder:text-textGray"
          />
          {media?.type.includes("image") && previewUrl && (
            <div className="relative rounded-md overflow-hidden">
              <NextImage
                src={previewUrl}
                width={600}
                height={600}
                alt="post"
                style={{ objectFit: "cover" }}
              />
              <div
                className="h-8 w-8 flex items-center justify-center cursor-pointer font-bold absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-2 text-sm"
                onClick={() => {
                  setMedia(null);
                }}
              >
                X
              </div>
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full font-bold text-sm cursor-pointer"
                onClick={() => setIsEditorOpen(true)}
              >
                Edit
              </div>
            </div>
          )}
          {media?.type.includes("video") && previewUrl && (
            <div className="relative rounded-md overflow-hidden">
              <video src={previewUrl} controls />
              <div
                className="h-8 w-8 flex items-center justify-center cursor-pointer font-bold absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-2 text-sm"
                onClick={() => {
                  setMedia(null);
                }}
              >
                X
              </div>
            </div>
          )}
          {isEditorOpen && previewUrl && (
            <ImageEditor
              onClose={() => setIsEditorOpen(false)}
              previewURL={previewUrl}
              settings={settings}
              setSettings={setSettings}
            />
          )}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button className="bg-white text-black font-bold rounded-full py-2 px-4">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
