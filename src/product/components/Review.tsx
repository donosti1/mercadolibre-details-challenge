import React from "react";
import {Stack} from "@chakra-ui/react";

import PuntuacionOpiniones from "./PuntuacionOpiniones";
import Opinion from "./opinion";

const Review = (props: any) => {
  var titulosReviewsPos = ["Excelente", "Me encantó", "Recomendable"];
  var descripcionReviewsPos = [
    "Increíble. Tamaño, calidad, todo. No sabemos dónde meterlo de lo grande que es. 100% satisfecho.",
    "Me llegó en el día",
    "Mi nene feliz",
  ];
  const puntajePosEntero = Math.floor(Math.random() * 3) + 3;
  const puntajePos =
    puntajePosEntero < 5
      ? puntajePosEntero + Math.floor(Math.random() + 0.5) / 2
      : puntajePosEntero;
  const titulosReviewsNeg = ["Nunca llegó", "No es lo que esperaba", "Malas terminaciones"];
  const descripcionReviewsNeg = ["Insatisfecho", "No lo recomiendo", "Mala atención"];
  const puntajeNeg = Math.floor(Math.random() * 2) + 1 + Math.floor(Math.random() + 0.5) / 2;

  const puntaje = props.tipo == "positiva" ? puntajePos : puntajeNeg;
  const descripcion =
    props.tipo == "positiva"
      ? descripcionReviewsPos[Math.floor(Math.random() * descripcionReviewsPos.length)]
      : descripcionReviewsNeg[Math.floor(Math.random() * descripcionReviewsNeg.length)];
  const titulo =
    props.tipo == "positiva"
      ? titulosReviewsPos[Math.floor(Math.random() * titulosReviewsPos.length)]
      : titulosReviewsNeg[Math.floor(Math.random() * titulosReviewsNeg.length)];

  return (
    <>
      <Stack paddingY={4}>
        <PuntuacionOpiniones puntaje={puntaje} />
        <Opinion descripcion={descripcion} titulo={titulo} />
      </Stack>
    </>
  );
};

export default Review;
