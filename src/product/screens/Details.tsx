import React from "react";
import {Stack, Image, Text, Container, Button, Input} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
import Pregunta from "../components/pregunta";
import PanelDetalle from "../components/panelDetalle";
import ImagenCarousel from "../components/imagenCarousel";
import DetailPageBreadcrumb from "../components/detailPageBreadcrumb";
import CategoriasPreguntas from "../components/categoriasPreguntas";
import FormularioPreguntas from "../components/formularioPreguntas";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack paddingX={12} spacing={0}>
      <Container maxWidth="container.xl" paddingX={0} paddingY={2}>
        <DetailPageBreadcrumb />
      </Container>
      <Container
        alignSelf="center"
        backgroundColor="whiteAlpha.900"
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
                <Stack
                  borderTop="1px"
                  borderTopColor="blackAlpha.300"
                  paddingTop={6}
                  spacing={4}
                  width="100%"
                >
                  <Text fontSize="2xl">Preguntas y respuestas</Text>
                  <CategoriasPreguntas />
                  <FormularioPreguntas />
                  <Pregunta />
                  <Pregunta />
                  <Pregunta />
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
