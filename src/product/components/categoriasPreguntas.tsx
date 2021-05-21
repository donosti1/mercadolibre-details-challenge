import React from "react";
import {Button, Stack, Text} from "@chakra-ui/react";

const CategoriasPreguntas = () => {
  return (
    <>
      <Stack>
        <Text fontSize="lg" fontWeight="900">
          ¿Qué querés saber?
        </Text>
        <Stack direction="row">
          <Button
            _hover={{backgroundColor: "secondary.150"}}
            backgroundColor="secondary.50"
            color="secondary.900"
            fontSize="sm"
            size="sm"
          >
            Costo y tiempo de envío
          </Button>
          <Button
            _hover={{backgroundColor: "secondary.150"}}
            backgroundColor="secondary.50"
            color="secondary.900"
            fontSize="sm"
            size="sm"
          >
            Devoluciones gratis
          </Button>
          <Button
            _hover={{backgroundColor: "secondary.150"}}
            backgroundColor="secondary.50"
            color="secondary.900"
            fontSize="sm"
            size="sm"
          >
            Medios de pago y promociones
          </Button>
          <Button
            _hover={{backgroundColor: "secondary.150"}}
            backgroundColor="secondary.50"
            color="secondary.900"
            fontSize="sm"
            size="sm"
          >
            Garantía
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default CategoriasPreguntas;
