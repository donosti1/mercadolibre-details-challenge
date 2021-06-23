import React from "react";
import {
  Stack,
  Switch,
  Image,
  Text,
  Container,
  Button,
  Input,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {IoSunnyOutline} from "react-icons/io5";
import {GiNightSky} from "react-icons/gi";

const SwitchColorMode: React.FC = () => {
  const {toggleColorMode} = useColorMode();
  const iconColor = useColorModeValue(undefined, "secondary.500");

  return (
    <>
      <Stack direction="row" spacing={0}>
        <Stack>
          <Icon as={GiNightSky} color={iconColor} height={4} width={5} />
          <Icon as={IoSunnyOutline} color={iconColor} height={4} width={5} />
        </Stack>
        <Switch
          colorScheme="primary.900"
          defaultChecked={localStorage.getItem("chakra-ui-color-mode") == "dark" ? true : false}
          size="lg"
          transform="rotate(-90deg)"
          onChange={toggleColorMode}
        />
      </Stack>
    </>
  );
};

export default SwitchColorMode;
