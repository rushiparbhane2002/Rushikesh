import { useEffect, useRef, useState } from "react";
import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
//@ts-ignore
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="mt-24 relative flex bs-mx:!overflow-visible sm-mx:px-4 xs-mx:py-4 bs-mx:items-center bs-mx-gap-6 md-mx:px-6 flex-col-reverse lg:flex-row items-center justify-around overflow-hidden font-mono px-5 py-5 h-fit"
        id="About" // Ensure the id matches the link href
      >
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-28 lg:w-3/4 gap-1 lg:gap-2">
          <div className="text-primaryColor text-3xl lg:text-2xl sm-mx:mt-6 sm-mx:text-xl">
            Hi, I am
          </div>
          <div className="text-white text-[2.5rem] lg:text-[3.85rem] font-extrabold sm-mx:text-4xl">
            {Info.name}
          </div>
          <div className="text-white text-2xl lg:text-4xl flex font-semibold sm-mx:text-2xl">
            I'm a&nbsp;
            <span className="text-primaryColor">
              <Typewriter
                options={{ strings: Info.stack, autoStart: true, loop: true }}
              />
            </span>
          </div>
          <div className="text-textColor mt-2 mb-4 my-2 lg:my-8 text-justify w-[90%] text-base lg:text-xl font-semibold">
            {Info.bio}
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={open}
              className="!text-bgColor !w-fit"
              size={btn}
              variant="filled"
              color="#64FFDA"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              href="RushikeshResume.pdf"
              download={Info.name}
              className="!text-primaryColor !w-fit"
              size={btn}
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        </div>
        <div
          className="flex justify-center lg:justify-end items-center w-[350px] h-[350px] lg:w-[390px] lg:h-[320px] rounded-full lg:mr-32"
          id="photo"
        >
          <NeonGradientCard className="w-full h-full flex items-center justify-center text-center">
            <img
              src="profile.png"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
