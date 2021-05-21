import React, {useState} from "react";
import {Stack, Text} from "@chakra-ui/react";

const DetailPageBreadcrumb = () => {
  return (
    <>
      <Stack direction="row" paddingY={3}>
        <Stack direction="row">
          <Text fontSize="sm" fontWeight="600">
            También puede interesarte:{" "}
          </Text>
        </Stack>
        <Stack direction="row">
          <Text fontSize="sm">trendy dogspeluche stitchpeluches gigantespeluches</Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        divider={
          <Text color="blackAlpha.400" fontSize="md" paddingX={3}>
            |
          </Text>
        }
      >
        <Stack direction="row">
          <Text color="blackAlpha.800" fontSize="sm">
            Volver al listado
          </Text>
        </Stack>
        <Stack direction="row" flex="1" justifyContent="space-between">
          <Stack
            direction="row"
            divider={
              <Text color="blackAlpha.700" paddingX={2}>
                {">"}
              </Text>
            }
          >
            <Text color="secondary.900" fontSize="sm">
              Juegos y Juguetes
            </Text>
            <Text color="secondary.900" fontSize="sm">
              Peluches
            </Text>
            <Text color="secondary.900" fontSize="sm">
              Stitch
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <Text color="blackAlpha.400" fontSize="md" paddingX={3}>
                |
              </Text>
            }
          >
            <Text color="secondary.900" fontSize="sm">
              Compartir
            </Text>
            <Text color="secondary.900" fontSize="sm">
              Vender uno igual
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default DetailPageBreadcrumb;
