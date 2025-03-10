"use client";
import React, { useState, useEffect } from "react";
import Image from "./Image";
import { shareAction } from "@/action";
import { default as NextImage } from "next/image";

const ICONS = ["image", "gif", "poll", "emoji", "schedule", "location"];

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (media) {
      const objectUrl = URL.createObjectURL(media);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // Cleanup to free memory
    }
  }, [media]);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form className="flex p-4 gap-4" action={shareAction}>
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" width={100} height={100} tr alt="Avatar" />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {/* Text Input */}
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent text-xl border-none outline-none placeholder:text-textGray"
        />

        {/* Media Preview */}
        {previewUrl && (
          <div className="relative rounded-md overflow-hidden">
            <NextImage src={previewUrl} width={600} height={600} alt="Post" objectFit="cover" />
          </div>
        )}

        {/* Actions (File Upload + Icons) */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input type="file" id="file" name="file" onChange={handleMediaChange} className="hidden" />
            {ICONS.map((icon) => (
              <label key={icon} htmlFor={icon === "image" ? "file" : undefined} className="cursor-pointer">
                <Image path={`icons/${icon}.svg`} alt={icon} width={20} height={20} />
              </label>
            ))}
          </div>

          {/* Post Button */}
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
        </div>
      </div>
    </form>
  );
};

export default Share;
