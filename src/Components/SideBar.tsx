import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Burger } from "@mantine/core";
import { IconHexagonLetterR, IconX } from "@tabler/icons-react";
import { navlinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden !-z-10"
        position="right"
        opened={opened}
        onClose={toggle}
        size="50vw"
      >
        <Drawer.Overlay
          className="!-z-0"
          style={{ backgroundOpacity: 0.5, blur: 4 }}
        />
        <Drawer.Content className="!-z-0" bg="#0A192F">
          <Drawer.Body className="mt-28 flex flex-col gap-5" bg="#0A192F">
            {navlinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="md:!hidden !z-10"
        color="#64FFDA"
        size="lg"
        opened={opened}
        onClick={toggle}
      ></Burger>
    </>
  );
};

export default SideBar;
