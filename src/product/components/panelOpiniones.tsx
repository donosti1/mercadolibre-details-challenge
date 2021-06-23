import React, {useState} from "react";
import {
  Button,
  Stack,
  Text,
  Icon,
  Link,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

//import Review from "./Review";
import AllReviews from "./AllReviews";

const PanelOpiniones = () => {
  const [isShownQ, setIsShownQ] = useState(false);

  const opinionPrincipalColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const opinionSecColor = useColorModeValue("blackAlpha.600", "whiteAlpha.500");

  return (
    <>
      <Stack>
        <Tabs isFitted>
          <TabList>
            <Tab>Todas</Tab>
            <Tab>Positivas</Tab>
            <Tab>Negativas</Tab>
          </TabList>
          <TabPanels height={96} overflowY="scroll">
            <TabPanel>
              <AllReviews />
            </TabPanel>
            <TabPanel>
              <AllReviews tipo="positiva" />
            </TabPanel>
            <TabPanel>
              <AllReviews tipo="negativa" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};

export default PanelOpiniones;
