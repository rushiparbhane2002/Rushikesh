import {
  Badge,
  Button,
  Group,
  Indicator,
  Modal,
  ScrollArea,
  Text,
} from "@mantine/core";
import { Image } from "@mantine/core";

const FullProjectModal = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="70%"
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl sm-mx:!rounded-xl xs-mx:!rounded-lg">
        <Modal.Header className="!bg-bgColor !border-primaryColor border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl sm-mx:!rounded-tl-xl sm-mx:!rounded-tr-xl xs-mx:!rounded-tl-lg xs-mx:!rounded-tr-lg">
          <Modal.Title
            data-autofocus
            className="!text-4xl sm-mx:!text-2xl xs-mx:!text-xl flex gap-3 items-center text-white !font-bold"
          >
            {props.title}
            {props.live && (
              <Badge
                className="flex items-center gap-3 sm-mx:gap-2 xs-mx:gap-1"
                size="lg"
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={8}
                    processing
                  />
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="24px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl sm-mx:!rounded-bl-xl sm-mx:!rounded-br-xl xs-mx:!rounded-bl-lg xs-mx:!rounded-br-lg">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] xs-mx:h-[100px] sm-mx:h-[120px]"
            src={props.image}
            height={160}
            alt={props.title}
          />

          <Group mt="md" mb="md" className="flex-wrap sm-mx:!mt-4 xs-mx:!mt-2">
            {props.technologies
              .slice(0, 10)
              .map((tech: string, index: number) => (
                <Badge
                  key={index}
                  size="lg"
                  variant="light"
                  color="#64FFDA"
                  className="sm-mx:!text-sm xs-mx:!text-xs"
                >
                  {tech}
                </Badge>
              ))}
          </Group>

          <Text
            className="!text-justify font-mono sm-mx:!text-base xs-mx:!text-sm"
            size="lg"
            c="dimmed"
          >
            {props.desc}
          </Text>

          <Group
            justify="space-between"
            mt="md"
            className="flex flex-col sm:flex-row gap-4 sm-mx:!gap-2 xs-mx:!gap-1"
          >
            <a
              href={props.github}
              target="_blank"
              className="w-full sm:w-[48%]"
            >
              <Button
                variant="outline"
                size="lg"
                color="#64FFDA"
                fullWidth
                mt="md"
                radius="md"
                className="sm:!text-sm xs-mx:!text-xs"
              >
                View Code
              </Button>
            </a>
            <a href={props.link} target="_blank" className="w-full sm:w-[48%]">
              <Button
                variant="outline"
                size="lg"
                color="#64FFDA"
                fullWidth
                mt="md"
                radius="md"
                className="sm:!text-sm xs-mx:!text-xs"
              >
                View Live App
              </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModal;
