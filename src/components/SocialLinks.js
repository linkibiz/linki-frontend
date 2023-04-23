import React from "react";
import Image from "next/image";
import TwitterIcon from "./Icons/TwitterIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import TiktokIcon from "./Icons/TiktokIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import Link from "next/link";
import YoutubeIcon from "./Icons/YoutubeIcon";
const SocialLinks = ({ socialLinks }) => {
  const { facebook, instagram, linkedin, tik_tok, twitter, whatsapp, youtube } = socialLinks;

  const socialMediaPlatforms = [
    {
      platform: "facebook",
      url: facebook,
      icon: <FacebookIcon />,
    },
    {
      platform: "instagram",
      url: instagram,
      icon: <InstagramIcon />,
    },
    {
      platform: "twitter",
      url: twitter,
      icon: <TwitterIcon />,
    },
    {
      platform: "tiktok",
      url: tik_tok,
      icon: <TiktokIcon />,
    },
    {
      platform: "linkedin",
      url: linkedin,
      icon: <LinkedinIcon />,
    },
    {
      platform: "youtube",
      url: youtube,
      icon: <YoutubeIcon />,
    },
  ];
  return (
    <>
      <h2 className="font-bold">Redes Sociales</h2>
      <ul className="flex gap-5 flex-wrap">
        {socialMediaPlatforms.map(({ platform, url, icon }) =>
          url ? (
            <li className="bg-gray-200 rounded-xl p-3" key={platform}>
              <Link href={url}>{icon}</Link>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default SocialLinks;
