import React from "react";
import {Stack, Image, Text, Container, Button, Input, useColorModeValue} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
import PanelDetalle from "../components/panelDetalle";
import ImagenCarousel from "../components/imagenCarousel";
import DetailPageBreadcrumb from "../components/detailPageBreadcrumb";
import PanelOpiniones from "../components/panelOpiniones";
import PanelPreguntas from "../components/PanelPreguntas";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const fondo = useColorModeValue("whiteAlpha.900", "darkMode.500");

  return (
    <Stack paddingX={12} spacing={0}>
      <Container maxWidth="container.xl" paddingX={0} paddingY={2}>
        <DetailPageBreadcrumb />
      </Container>
      <Container
        alignSelf="center"
        backgroundColor={fondo}
        borderColor="blackAlpha.300"
        borderRadius="md"
        borderWidth={1}
        maxWidth="container.xl"
        paddingY={0}
      >
        <Stack direction="row" paddingY={4} spacing={0}>
          <Stack direction="row" flex="1" justifyContent="space-between">
            <Stack alignItems="center" paddingX={0} paddingY={0} spacing={8} width="69%">
              <ImagenCarousel />
              <Stack paddingX={6} spacing={0} width="100%">
                <PanelPreguntas />
                <Stack paddingTop={6} spacing={4} width="100%">
                  <Text fontSize="2xl">Opiniones sobre el producto</Text>
                  <PanelOpiniones />
                </Stack>
              </Stack>
            </Stack>
            {/* PANEL DE DETALLE */}
            <PanelDetalle />
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="container.xl" paddingX={0} paddingY={2} />
    </Stack>
  );
};

export default DetailsScreen;
