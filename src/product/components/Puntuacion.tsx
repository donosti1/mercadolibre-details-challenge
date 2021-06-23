import React from "react";
import {Icon} from "@chakra-ui/react";
import {BsStarFill, BsStarHalf} from "react-icons/bs";

const FullStar: any = () => {
  return <Icon as={BsStarFill} color="secondary.500" height={4} width={4} />;
};

const HalfStar: any = () => {
  return <Icon as={BsStarHalf} color="secondary.500" height={4} width={4} />;
};
const Puntuacion = (props: any) => {
  const entero = props.puntaje;
  const decimal = entero % 1;
  let show_halfStar = false;

  decimal != 0 ? (show_halfStar = true) : null;
  let punt = Array.from({length: entero}, (_, k) => <FullStar key={k} />);

  return (
    <>
      {punt}
      {show_halfStar ? <HalfStar /> : ""}
    </>
  );
};

export default Puntuacion;
