import { useState, useEffect } from "react";
import {
  DownloadIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";
import { IPost } from "type";
import { urlFor } from "client";
import { images } from "Assets";

interface Props {
  pin: IPost;
}

export default function Pin({ pin }: Props) {
  const [postedHovered, setPostedHovered] = useState<boolean>(false);
  const [dotClicked, setDotClicked] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col space-y-2" style={{ marginBottom: '20px' }}>
      <div
        className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:mix-blend-multiply"
        onMouseEnter={() => setPostedHovered(true)}
        onMouseLeave={() => setPostedHovered(false)}
      >
        <a href={`/pin/${pin._id}`}>
          <img
            className="object-cover w-full h-auto"
            src={urlFor(pin.mainImage.asset).url()}
            alt={pin.title}
          />
        </a>
        {(dotClicked || postedHovered) && (
          <>
            <div className="absolute top-2 right-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-50  transition-all duration-200 ease-in-out hover:bg-opacity-80">
                <BookmarkIcon className="w-4" />
              </div>
            </div>
            <div className="absolute right-2 bottom-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-50 transition-all duration-200 ease-in-out hover:bg-opacity-80 hover:scale-95">
                <DotsHorizontalIcon
                  className="w-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setDotClicked(true);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex space-x-2 items-center cursor-pointer group">
        <a href="/" className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={images.selfie.src}
            alt=""
          />
        </a>
        <span className="group-hover:underline">{pin.author.name || "kk"}</span>
      </div>

      {dotClicked && (
        <div className="absolute left-1/3 -bottom-14 shadow-lg rounded-lg py-6 px-4 max-w-full bg-slate-100 flex flex-col items-center space-y-3">
          <div className="flex w-full items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center w-4 h-4">
              <a
                href={`${pin.mainImage.asset}`}
                download
                onClick={(e) => e.preventDefault()}
              >
                <DownloadIcon className="w-4" />
              </a>
            </div>
            <span>Save Image</span>
          </div>
          <div className="flex w-full items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center w-4 h-4">
              <a
                href={`${pin.mainImage.asset}`}
                download
                onClick={(e) => e.preventDefault()}
              >
                <EyeOffIcon className="w-4" />
              </a>
            </div>
            <span>Save Image</span>
          </div>
        </div>
      )}
    </div>
  );
}
