import React from "react";
import {Button, Input, Stack, Text} from "@chakra-ui/react";

const FormularioPreguntas = () => {
  return (
    <>
      <Stack paddingY={4}>
        <Text fontSize="lg" fontWeight="900">
          Preguntale al vendedor
        </Text>
        <Stack direction="row">
          <Input _placeholder={{fontSize: "md"}} placeholder="Escribí tu pregunta..." size="lg" />
          <Button
            _hover={{backgroundColor: "secondary.800"}}
            backgroundColor="secondary.900"
            color="whiteAlpha.900"
            size="lg"
          >
            Preguntar
          </Button>
        </Stack>
        <Text color="blackAlpha.600" fontSize={13}>
          Tiempo aproximado de respuesta: 59 minutos
        </Text>
      </Stack>
    </>
  );
};

export default FormularioPreguntas;
