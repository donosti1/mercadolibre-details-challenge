import React from "react";
import {
  Box,
  Container,
  Icon,
  Image,
  Input,
  Link,
  Stack,
  StackDivider,
  Switch,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";

import SwitchColorMode from "../../landing/SwitchColorMode";

//import logo from "./assets/logo.png";

const Cabecera: React.FC = () => {
  const headerColor = useColorModeValue("primary.500", "darkMode.400");
  const headerTextColor = useColorModeValue("blackAlpha.700", "blackAlpha.900");

  return (
    <>
      <Box backgroundColor={headerColor} boxShadow="sm" paddingY={4}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex="1" spacing={12}>
                <Stack direction="row" spacing={12}>
                  <Image objectFit="contain" src="/assets/logo.png" />
                  <SwitchColorMode />
                </Stack>
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input color={headerTextColor} paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.900" direction="row">
                <Icon as={FiPrinter} height={9} spacing={3} width={9} />
                <Text fontSize="lg" fontWeight="300">
                  Compra tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" color={headerTextColor} direction="row" spacing={1}>
                  <Icon as={GoLocation} height={8} width={8} />
                  <Stack spacing={0}>
                    <Text fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="md" lineHeight="normal">
                      Buenos Aires 1876
                    </Text>
                  </Stack>
                </Stack>
                <Stack color={headerTextColor} direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack
                alignItems="center"
                color={headerTextColor}
                direction="row"
                fontSize="sm"
                spacing={6}
              >
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={IoCartOutline} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Cabecera;
