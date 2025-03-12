"use client";
import { IKImage } from "imagekitio-next";
import React from "react";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageProps = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const Image = ({ path, width, height, alt, className, tr }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${width}`, height: `${height}` }] }
        : { width: width, height: height })}
      lqip={{active:true ,quality:20}}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
