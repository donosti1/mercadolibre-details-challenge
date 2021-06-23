import React from "react";
import {Button, Input, Stack, Text, useColorModeValue} from "@chakra-ui/react";

import {Pregunta} from "../types";

interface Props {
  onSubmit: (pregunta: Pregunta) => void;
}

interface CampoPregunta extends HTMLDivElement {
  campoPregunta: HTMLInputElement;
}
const randomResponses = [
  "Muy amable.",
  "A la brevedad se lo comunicaremos.",
  "Es correcto.",
  "Debe comunicarse con MercadoLibre para realizar el reclamo.",
];
const random = {
  get number() {
    return Math.round(Math.random() * 500);
  },
  get boolean() {
    return Math.random() < 0.5;
  },
  get response() {
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
  },
};
const FormularioPreguntas: React.FC<Props> = ({onSubmit}) => {
  const [pregunta, setPregunta] = React.useState<string>("");
  const preguntaPrincipalColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const preguntaRespColor = useColorModeValue("blackAlpha.600", "whiteAlpha.500");

  function handleSubmit(event: React.FormEvent<CampoPregunta>) {
    event.preventDefault();

    if (!pregunta) return;

    onSubmit({
      id: String(+new Date()),
      text: pregunta,
      response: random.response,
      isResponse: random.boolean,
    });

    setPregunta("");
  }

  return (
    <>
      <Stack as="form" paddingY={4} onSubmit={handleSubmit}>
        <Text color={preguntaPrincipalColor} fontSize="lg" fontWeight="900">
          Preguntale al vendedor
        </Text>
        <Stack direction="row">
          <Input
            _placeholder={{fontSize: "md"}}
            placeholder="Escribí tu pregunta..."
            size="lg"
            value={pregunta}
            onChange={(event) => setPregunta(event.target.value)}
          />
          <Button
            _hover={{backgroundColor: "secondary.800"}}
            backgroundColor="secondary.900"
            color="whiteAlpha.900"
            isDisabled={!pregunta}
            size="lg"
          >
            Preguntar
          </Button>
        </Stack>
        <Text color={preguntaRespColor} fontSize={13}>
          Tiempo aproximado de respuesta: 59 minutos
        </Text>
      </Stack>
    </>
  );
};

export default FormularioPreguntas;
