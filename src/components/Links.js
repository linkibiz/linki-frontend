import Image from "next/image";
import React from "react";
import Thumbnail from "../../public/img/woman-thumbnail.jpg";
import Link from "next/link";
const Links = () => {
  return (
    <>
      <p className="font-bold">Links</p>
      <div className="flex items-center gap-6">
        <div className="w-[25%]">
          <Image className="max-h-14 w-full rounded-2xl object-cover" src={Thumbnail} />
        </div>
        <Link href="#" className="w-full flex justify-between font-bold">
          <h2>Website</h2>
          <span> {">"} </span>
        </Link>
      </div>
    </>
  );
};

export default Links;
