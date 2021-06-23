import React, {useState} from "react";
import {Button, Stack, Text, Icon, Link, useColorModeValue} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import {Pregunta as IPregunta} from "../types";
interface Props {
  pregunta: IPregunta;
  onClick?: VoidFunction;
}
function randomDate() {
  var start = new Date(2020, 0, 1); //Fecha más antigua posible
  var end = new Date(); //Hoy
  var fecha = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return new Intl.DateTimeFormat("es-AR").format(fecha);
}

const Pregunta: React.FC<Props> = ({pregunta, onClick}) => {
  const [isShownQ, setIsShownQ] = useState(false);
  const [isShownA, setIsShownA] = useState(false);

  const [fechaPregunta] = useState(randomDate());
  const preguntaPrincipalColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const preguntaRespColor = useColorModeValue("blackAlpha.600", "whiteAlpha.500");

  const preguntaConPunto = pregunta.text.slice(-1) == "." ? pregunta.text : pregunta.text + ".";

  return (
    <>
      <Stack paddingBottom={4}>
        <Stack
          key={pregunta.id}
          direction="row"
          onMouseEnter={() => setIsShownQ(true)}
          onMouseLeave={() => setIsShownQ(false)}
        >
          <Text color={preguntaPrincipalColor}>{preguntaConPunto}</Text>
          {isShownQ && (
            <Link fontSize="sm" lineHeight="1.2" paddingY={1}>
              Denunciar
            </Link>
          )}
        </Stack>
        {pregunta.isResponse ? (
          <Stack
            color={preguntaRespColor}
            direction="row"
            onMouseEnter={() => setIsShownA(true)}
            onMouseLeave={() => setIsShownA(false)}
          >
            <Icon as={BsArrowReturnRight} height={6} width={6} />
            <Text>
              {pregunta.response} {fechaPregunta}
            </Text>
            {isShownA && (
              <Link fontSize="sm" lineHeight="1.2" paddingY={1}>
                Denunciar
              </Link>
            )}
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};

export default Pregunta;

const CategoriasPreguntas = () => {
  const preguntaPrincipalColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const preguntaRespColor = useColorModeValue("blackAlpha.600", "whiteAlpha.500");

  return (
    <>
      <Stack>
        <Text color={preguntaPrincipalColor} fontSize="lg" fontWeight="900">
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

export {CategoriasPreguntas};
