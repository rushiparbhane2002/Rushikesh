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
    {
      link: "https://wa.me/8080940052",
      icon: IconBrandWhatsapp,
    },
  ];

  const socialIcons = socialLinks.map((socialLink) => (
    <a
      key={socialLink.link}
      href={socialLink.link}
      target="_blank"
      className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition-transform duration-300 ease-in-out"
    >
      {/* <socialLink.icon className="-rotate-90" size={30} /> */}
      <div data-aos="fade-up-left" data-aos-duration="1200">
        <socialLink.icon className="-rotate-90 size={30}" />{" "}
      </div>
    </a>
  ));

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-56 -left-48 rotate-90">
      {socialIcons}
      <hr className="border-[2px] rounded-full w-40 bg-textColor border-textColor" />
    </div>
  );
};

export default Social;
