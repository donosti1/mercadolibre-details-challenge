import React from "react";
import {Icon, Stack} from "@chakra-ui/react";
import {BsStarFill, BsStarHalf} from "react-icons/bs";

const FullStar: any = () => {
  return <Icon as={BsStarFill} color="secondary.500" height={4} width={4} />;
};
const GreyStar: any = () => {
  return <Icon as={BsStarFill} color="blackAlpha.300" height={4} width={4} />;
};
const HalfStar: any = () => {
  return <Icon as={BsStarHalf} color="secondary.500" height={4} width={4} />;
};
const PuntuacionOpiniones = (props: any) => {
  const entero = props.puntaje;
  const decimal = entero % 1;
  let show_halfStar = false;
  let restante = 0;

  decimal != 0
    ? ((show_halfStar = true), (restante = 5 - Math.ceil(entero)))
    : (restante = 5 - entero);
  let punt = Array.from({length: entero}, (_, k) => <FullStar key={k} />);
  let resto = Array.from({length: restante}, (_, k) => <GreyStar key={k} />);

  return (
    <Stack direction="row" spacing={2}>
      {punt}
      {show_halfStar ? <HalfStar /> : ""}
      {resto}
    </Stack>
  );
};

export default PuntuacionOpiniones;
