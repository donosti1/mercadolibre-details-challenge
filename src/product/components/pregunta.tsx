import React, {useState} from "react";
import {Stack, Text, Icon, Link} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";
function randomDate() {
  var start = new Date(2020, 0, 1); //Fecha más antigua posible
  var end = new Date(); //Hoy
  var fecha = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return new Intl.DateTimeFormat("es-AR").format(fecha);
}

const Pregunta = () => {
  const [isShownQ, setIsShownQ] = useState(false);
  const [isShownA, setIsShownA] = useState(false);

  const [fechaPregunta] = useState(randomDate());

  return (
    <>
      <Stack>
        <Stack
          direction="row"
          onMouseEnter={() => setIsShownQ(true)}
          onMouseLeave={() => setIsShownQ(false)}
        >
          <Text>Ya compre</Text>
          {isShownQ && (
            <Link fontSize="sm" lineHeight="1.2" paddingY={1}>
              Denunciar
            </Link>
          )}
        </Stack>
        <Stack
          color="blackAlpha.600"
          direction="row"
          onMouseEnter={() => setIsShownA(true)}
          onMouseLeave={() => setIsShownA(false)}
        >
          <Icon as={BsArrowReturnRight} height={6} width={6} />
          <Text>Muchas gracias {fechaPregunta}</Text>
          {isShownA && (
            <Link fontSize="sm" lineHeight="1.2" paddingY={1}>
              Denunciar
            </Link>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Pregunta;
