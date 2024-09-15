import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Indicator,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge = useMatches({
    xsm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <div
      className="w-full md:w-[48%] lg:w-[32%] gap-6 lg:gap-10 sm-mx:w-full xs-mx:w-full xs-mx:justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Card
        className="!bg-bgColor flex flex-col justify-between cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.03] hover:!shadow-[0_0px_10px_1px_#64FFDA] !border-primaryColor border-2 h-full"
        shadow="lg"
        padding="lg"
        radius="md"
        withBorder
        onClick={open}
      >
        <div className="flex-grow">
          <Card.Section className="p-3">
            <Image
              className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
              src={props.image}
              height={160}
              alt={props.title}
            />
          </Card.Section>

          <Group justify="space-between" mt="xs" mb="xs">
            <Text
              className="text-2xl font-mono gap-2 flex items-center !font-bold !text-white"
              fw={500}
            >
              {props.title}
              {props.live && (
                <Badge
                  className="!px-1"
                  variant="outline"
                  color="red"
                  rightSection={
                    <Indicator
                      className="!mr-0.5"
                      color="red"
                      position="middle-end"
                      size={7}
                      processing
                    />
                  }
                >
                  Live
                </Badge>
              )}
            </Text>
          </Group>

          <Group mb="xs" className="!gap-2">
            {props.technologies.map(
              (tech: string, index: number) =>
                index < 3 && (
                  <Badge
                    key={index}
                    size={badge}
                    variant="light"
                    color="#64FFDA"
                  >
                    {tech}
                  </Badge>
                )
            )}
          </Group>

          <Text
            className="!text-justify !text-sm font-mono xs-mx:!text-xs"
            lineClamp={6}
            size="sm"
            c="dimmed"
          >
            {props.desc}
          </Text>
        </div>

        <Button
          onClick={open}
          className="mt-4"
          color="#64FFDA"
          variant="outline"
          fullWidth
          radius="md"
        >
          Show More
        </Button>
      </Card>

      <FullProjectModal
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        link={props.link}
        technologies={props.technologies}
      />
    </div>
  );
};

export default ProjectCard;
