import Image from "next/image";
import React from "react";

const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewURL: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  function handleChangeSensitive(sensitive:boolean){
    setSettings((settings)=>({...settings,sensitive}))
  }

  function handleChangeType(type:"original" | "wide" | "square"){
    setSettings((prev)=>({...prev,type}))
  }

  return (
    <div className="bg-black bg-opacity-75 z-10 fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className=" bg-black p-12 rounded-lg flex flex-col gap-4 ">
        {/* Top */}
        <div className="flex justify-between items-center">
          <div className="flex gap-8 justify-between items-center">
            <svg
              widths={32}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              onClick={onClose}
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl">Media Settings</h1>
          </div>
          <button onClick={()=>onClose()} className="bg-textGrayLight text-black font-medium px-4 py-2 rounded-full">
            Save
          </button>
        </div>
        {/* Image */}
        <div className="flex w-[450px] h-[450px] items-center">
          <Image
            src={previewURL}
            alt="preview"
            width={600}
            height={600}
            className={`w-full ${
              settings.type === "original"
                ? "h-full object-contain"
                : settings.type === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between gap-4">
         <div className="flex gap-3 items-center">
         <div  onClick={()=>handleChangeType("original")} className="flex items-center gap-2 cursor-pointer">
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  settings.type === "original"
                    ? "fill-iconBlue"
                    : "fill-[#e7e9ea]"
                }
                d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
            <h2 className="text-sm text-textGray">Original</h2>
          </div>
          <div  onClick={()=>handleChangeType("wide")} className="flex items-center gap-2 cursor-pointer">
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  settings.type === "wide"
                    ? "fill-iconBlue"
                    : "fill-[#e7e9ea]"
                }
                d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>

            <h2 className="text-sm text-textGray">Wide</h2>
          </div>
          <div onClick={()=>handleChangeType("square")} className="flex items-center gap-2 cursor-pointer">
            <svg  width={24} viewBox="0 0 24 24">
              <path
              
              className={
                settings.type === "square"
                    ? "fill-iconBlue"
                    : "fill-[#e7e9ea]"
              }
              d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" />
            </svg>

            <h2 className="text-sm text-textGray">Square</h2>
          </div>
         </div>
          <button 
          className={
            ` px-4 py-2 rounded-full ${settings.sensitive === false ? "bg-textGrayLight text-black" : "bg-red-600 text-white" }`}
            onClick={()=>handleChangeSensitive(!settings.sensitive)}
          
          >Sensitive</button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
