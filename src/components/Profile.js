import Image from "next/image";
import React, { useEffect } from "react";
import Avatar from "../../public/img/avatar.jpg";
import ContactButtons from "./ContactButtons";
import About from "./About";
import SocialLinks from "./SocialLinks";

const Profile = ({data}) => {
  const {nombre, apellido,profesion, correo,numero_de_contacto,avatar } = data.perfil.data.attributes
  const fullName = `${nombre} ${apellido}`
  const src = `http://localhost:1337${avatar.data.attributes.url}`

  return (
    <>
      <div className="-space-x-1 mt-[-35%] relative z-10 shadow-lg rounded-3xl">
        <div className="flex items-center bg-white rounded-3xl">
          <Image className="rounded-l-3xl inline-block object-cover h-52 w-52" loader={() => src} src={src} width={500} height={500} alt={Avatar.alt}/>
          <div className="text-black w-full px-4 flex flex-col gap-y-3.5">
            <h1 className="font-bold text-4xl">{fullName}</h1>
            <p className="text-xs tracking-wider">{profesion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
