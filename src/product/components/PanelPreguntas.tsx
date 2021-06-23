import React from "react";
import {Stack, Text, useColorModeValue} from "@chakra-ui/react";

import Pregunta, {CategoriasPreguntas} from "../components/pregunta";
import FormularioPreguntas from "../components/formularioPreguntas";
import {Pregunta as IPregunta} from "../types";
const PanelPreguntas: React.FC = () => {
  const [preguntas, setPreguntas] = React.useState<IPregunta[]>([]);

  return (
    <>
      <Stack
        borderBottom="1px"
        borderBottomColor="blackAlpha.300"
        borderTop="1px"
        borderTopColor="blackAlpha.300"
        paddingY={6}
        spacing={4}
        width="100%"
      >
        <Text fontSize="2xl">Preguntas y respuestas</Text>
        <CategoriasPreguntas />
        <FormularioPreguntas
          onSubmit={(pregunta) => setPreguntas((preguntas) => preguntas.concat(pregunta))}
        />
        <Stack direction="column-reverse" paddingBottom={6}>
          {preguntas.map((pregunta) => (
            <Pregunta
              key={pregunta.id}
              pregunta={pregunta}
              /*onClick={() =>
                setTweets((tweets) => tweets.filter((_tweet) => _tweet.id != tweet.id))
            }*/
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default PanelPreguntas;
