import React from "react";
import {Stack, Text, Icon, Link, Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {AiOutlineHeart} from "react-icons/ai";
import {FaShippingFast} from "react-icons/fa";
import {IoArrowRedoSharp, IoChevronDown} from "react-icons/io5";

import mock from "../mock";
import {Product} from "../types";

import Puntuacion from "./Puntuacion";
interface Props {
  product?: Product;
}

const PanelDetalle: React.FC<Props> = ({product = mock.product}) => {
  const colorMode = useColorMode();

  const panelDetalleFondo = useColorModeValue(undefined, "darkMode.700");
  const textColor = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
  const textDestacadoColor = useColorModeValue("blackAlpha.900", "whiteAlpha.700");
  const sec500Color = useColorModeValue("blackAlpha.900", "whiteAlpha.700");
  const sec700Color = useColorModeValue("blackAlpha.900", "whiteAlpha.700");

  const precio = product.price.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
  const cuotas = (product.price * 1.5) / 12;
  //const cuotas_dec = cuotas % 1;
  const cuotas_ent = cuotas;
  const cuotas_show = cuotas_ent.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
  });

  return (
    <>
      <Stack
        backgroundColor={panelDetalleFondo}
        borderColor="blackAlpha.300"
        borderRadius="lg"
        borderWidth={1}
        direction="row"
        paddingX={4}
        paddingY={4}
        width="31%"
      >
        <Stack spacing={0}>
          <Text color={textColor} fontSize="sm">
            Nuevo | {product.sold_quantity} vendidos
          </Text>
          <Stack direction="row" paddingY={4}>
            <Text color={textDestacadoColor} fontSize="22" fontWeight="600" lineHeight="1.2">
              {product.title}
            </Text>
            <Icon as={AiOutlineHeart} color="secondary.500" height={8} paddingX={1} width={8} />
          </Stack>
          <Stack direction="row" paddingY={3}>
            <Stack direction="row" spacing={1}>
              <Puntuacion puntaje="3.5" ubicacion="opiniones" />
            </Stack>
            <Stack>
              <Text color={textColor} fontSize="sm">
                5 opiniones
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Text color={textDestacadoColor} fontSize="4xl" fontWeight="200" lineHeight="1">
              {precio}
            </Text>
          </Stack>
          <Stack direction="row">
            <Text color={textDestacadoColor} fontSize="lg" fontWeight="200">
              en
            </Text>
            <Text fontSize="lg">12 x {cuotas_show}</Text>
          </Stack>
          <Stack>
            <Link>
              <Text fontSize="sm">Ver los medios de pago</Text>
            </Link>
          </Stack>
          <Stack direction="row" paddingY={3}>
            <Icon as={FaShippingFast} color="secondary.700" height={6} paddingY={1} width={6} />
            <Stack spacing={0}>
              <Stack direction="row">
                <Text color="secondary.700">
                  Llega gratis <b>mañana</b>
                </Text>
              </Stack>
              <Stack direction="row">
                <Text color={textColor} fontSize="sm">
                  Beneficio Mercado Puntos
                </Text>
              </Stack>
              <Stack direction="row">
                <Link>
                  <Text fontSize="sm">Ver más formas de entrega</Text>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" paddingY={3}>
            <Icon
              as={IoArrowRedoSharp}
              color="secondary.700"
              height={7}
              paddingY={1}
              transform="rotate(180deg)"
              width={7}
            />
            <Stack spacing={0}>
              <Text color={textColor} fontSize="sm">
                Tenés 30 días desde que lo recibís.
              </Text>
              <Stack direction="row">
                <Text color="secondary.700">Devolución gratis</Text>
              </Stack>
              <Stack direction="row" />
              <Stack direction="row">
                <Link>
                  <Text fontSize="sm">Conocer más</Text>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          {product.available_quantity > 0 ? (
            <>
              <Text fontWeight="900" paddingY={4}>
                Stock disponible
              </Text>
              <Stack direction="row">
                <Text>
                  Cantidad: <b>1 unidad</b>
                </Text>
                <Icon as={IoChevronDown} color="secondary.500" height={6} paddingY={1} width={4} />
                <Text color={textColor} fontSize="sm">
                  {"( "}
                  {product.available_quantity}
                  {" disponibles)"}
                </Text>
              </Stack>
            </>
          ) : (
            <Text fontWeight="900" paddingY={4}>
              Sin Stock
            </Text>
          )}
          <Stack paddingY={4} spacing={2}>
            <Button
              _hover={{backgroundColor: "secondary.800"}}
              backgroundColor="secondary.900"
              color="whiteAlpha.900"
              size="lg"
            >
              Comprar ahora
            </Button>
            <Button
              _hover={{backgroundColor: "secondary.50"}}
              backgroundColor="secondary.50"
              color="secondary.900"
              size="lg"
            >
              Agregar al carrito
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PanelDetalle;
