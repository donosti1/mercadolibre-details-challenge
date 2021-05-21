import React from "react";
import {Container, Stack, Text, Box, Image, Input, Icon, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";

import logo from "../assets/logo.png";

import Routes from "./routes";
const App: React.FC = () => {
  return (
    <Stack backgroundColor="secondary.300" minHeight="100vh" spacing={0}>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex="1" spacing={12}>
                <Image objectFit="contain" src={logo} />
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
                  <Input paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="grey.400" height={5} width={5} />
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
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={GoLocation} height={8} width={8} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="md" lineHeight="normal">
                      Buenos Aires 1876
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={IoCartOutline} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Routes />
      </Box>
    </Stack>
  );
};

export default App;
