import { Timeline, Text } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimeLineItem = (items: any[]) => {
  return items.map((item: any, index: number) => (
    <Timeline.Item
      data-aos="fade-up"
      data-aos-duration="1200"
      key={index}
      className="!pt-12 !mb-2"
      bullet={
        <IconBriefcaseFilled
          className="flex flex-col !text-bgColor"
          size={20}
        />
      }
    >
      <div className="border shadow-[0_0_10px_0px_#64FFDA50] flex flex-col gap-2 border-primaryColor p-4 rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <img
            className="rounded-lg w-12 sm:w-16"
            src={`${item.company}.png`}
            alt="Company"
          />
          <div className="flex flex-col ml-0 lg:ml-4 text-center lg:text-left">
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
              {item.role}
            </div>
            <div className="text-base sm:text-lg font-semibold text-textColor flex items-center justify-center lg:justify-start">
              {item.company}
              <span className="mx-2">•</span>
              {item.date}
            </div>
            <div className="text-textColor leading-6 text-justify text-sm sm:text-base">
              {item.desc}
            </div>
            <div className="text-sm sm:text-lg font-medium text-textColor">
              <span className="font-semibold text-white">Skills:</span>
              {item.skills.map((skill: any, index: number) => (
                <span key={index}>&#x2022;{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 mx-2 sm:mx-10 md:mx-20 my-5 mb-28 font-mono"
      id="Experience"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-10 mt-10 font-bold text-center text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Experience
      </h1>
      <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
        {TimeLineItem(ExperienceInfo)}
        <Timeline.Item
          bullet={<IconBriefcaseFilled className="!text-bgColor size={20}" />}
        ></Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
