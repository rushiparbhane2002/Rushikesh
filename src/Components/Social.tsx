import React from "react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Social = () => {
  const socialLinks = [
    { link: "https://github.com/rushiparbhane2002", icon: IconBrandGithub },
    {
      link: "https://in.linkedin.com/in/rushikesh-parbhane-788a42284",
      icon: IconBrandLinkedin,
    },
    {
      link: "https://www.instagram.com/rushi_parbhane._.96k/",
      icon: IconBrandInstagram,
    },
    { link: "https://x.com/Rushikesh_1404", icon: IconBrandTwitter },
    {
      link: "https://www.facebook.com/rushi.parbhane.7",
      icon: IconBrandFacebook,
    },
    { link: "https://wa.me/8080940052", icon: IconBrandWhatsapp },
  ];

  const socialIcons = socialLinks.map((socialLink) => (
    <a
      key={socialLink.link}
      href={socialLink.link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono md-mx:hidden mb-3 text-lg hover:text-primaryColor hover:-translate-y-1 transition-transform duration-300 ease-in-out"
    >
      <div data-aos="fade-up-right" data-aos-duration="1200">
        <socialLink.icon size={22} className="-rotate-30" />
      </div>
    </a>
  ));

  return (
    <div className="fixed  text-textColor left-0 bottom-0 h-full flex items-center pt-44">
      <div className="flex flex-col items-center gap-3 ml-10">
        {socialIcons}
        <div className="h-24 md-mx:hidden w-[3px] rounded-full bg-textColor mt-3"></div>
      </div>
    </div>
  );
};

export default Social;
