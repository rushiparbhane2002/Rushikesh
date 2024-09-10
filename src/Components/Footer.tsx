import { Info } from "../User";

const Footer = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-36 mt-10 mb-5 lg:mt-20 lg:mb-10 font-mono flex justify-center flex-col gap-2 items-center">
      <div className="text-2xl md:text-3xl text-primaryColor font-semibold">
        {Info.name}
      </div>
      <div className="md-mx:flex hidden"></div>
      <div className="text-textColor text-lg md:text-xl text-center">
        Copyright &copy;{new Date().getFullYear()} {Info.name} | All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
