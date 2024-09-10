import { Avatar } from "@mantine/core";

const SkillBadge = (skills: any[]) => {
  return skills.map((skill: any, index: number) => (
    <div
      key={index}
      className="flex gap-2 sm:gap-3 border border-textColor rounded-2xl items-center py-1 px-2 sm:py-2 sm:px-3"
    >
      <Avatar
        className="!w-[20px] sm:!w-[24px] !p-1"
        variant="transparent"
        radius="xs"
        src={`Icons/${skill}.png`}
      />
      <div className="text-textColor text-sm sm:text-base md:text-lg font-medium">
        {skill}
      </div>
    </div>
  ));
};

const SkillCard = (props: any) => {
  return (

    
    // <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] shadow-[0_0_10px_0px_#64FFDA50] rounded-2xl border border-primaryColor p-4 sm:p-5 mb-4">
    //   <div className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-white text-center font-bold"></div>
    // w-full sm:w-[48%] md:w-[30%]
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[48%] bs-mk:w-[%]mk:w-[30%] shadow-[0_0_10px_0px_#64FFDA50] rounded-2xl border border-primaryColor p-4 sm:p-5">
      <div className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-white text-center font-bold">
        {props.title}
      </div>
      <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
