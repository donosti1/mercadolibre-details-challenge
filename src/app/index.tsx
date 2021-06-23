import React from "react";
import {Stack, Box, useColorModeValue} from "@chakra-ui/react";

import Routes from "./routes";
import Cabecera from "./screens/Cabecera";
const App: React.FC = () => {
  const screenColor = useColorModeValue("secondary.300", "darkMode.700");

  return (
    <Stack backgroundColor={screenColor} minHeight="100vh" spacing={0}>
      <Cabecera />
      <Box>
        <Routes />
      </Box>
    </Stack>
  );
};

export default App;
