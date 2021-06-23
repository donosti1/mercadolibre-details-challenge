import React from "react";
import {Stack} from "@chakra-ui/react";

import PuntuacionOpiniones from "./PuntuacionOpiniones";
import Review from "./Review";

const AllReviews = (props: any) => {
  const listaRev = [
    "positiva",
    "positiva",
    "negativa",
    "negativa",
    "positiva",
    "negativa",
    "negativa",
    "negativa",
    "positiva",
  ];

  const lista = props.tipo ? listaRev.filter((item: any) => item == props.tipo) : listaRev;

  const revi = lista.map((item, id) => <Review key={id} tipo={item} />);

  return (
    <>
      <Stack paddingY={4}>{revi}</Stack>
    </>
  );
};

export default AllReviews;
