import React, {useState} from "react";
import {Link, Stack, Text, useColorModeValue} from "@chakra-ui/react";

const DetailPageBreadcrumb = () => {
  const breadcrumbColor = useColorModeValue("blackAlpha.900", "whiteAlpha.700");
  const breadcrumbLinksColor = useColorModeValue("secondary.500", "whiteAlpha.500");
  const separadoresColor = useColorModeValue("blackAlpha.900", "whiteAlpha.700");

  return (
    <>
      <Stack direction="row" paddingY={3}>
        <Stack direction="row">
          <Text color={breadcrumbColor} fontSize="sm" fontWeight="600">
            También puede interesarte:{" "}
          </Text>
        </Stack>
        <Stack direction="row">
          <Text color={breadcrumbColor} fontSize="sm">
            trendy dogspeluche stitchpeluches gigantespeluches
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        divider={
          <Text color={separadoresColor} fontSize="md" paddingX={3}>
            |
          </Text>
        }
      >
        <Stack direction="row">
          <Text /*color="blackAlpha.800"*/ color={breadcrumbColor} fontSize="sm">
            Volver al listado
          </Text>
        </Stack>
        <Stack direction="row" flex="1" justifyContent="space-between">
          <Stack
            direction="row"
            divider={
              <Text color={separadoresColor} paddingX={2}>
                {">"}
              </Text>
            }
          >
            <Link to="/">
              <Text color={breadcrumbLinksColor} fontSize="sm">
                Juegos y Juguetes
              </Text>
            </Link>
            <Link to="/">
              <Text color={breadcrumbLinksColor} fontSize="sm">
                Peluches
              </Text>
            </Link>
            <Link to="/">
              <Text color={breadcrumbLinksColor} fontSize="sm">
                Stitch
              </Text>
            </Link>
          </Stack>
          <Stack
            direction="row"
            divider={
              <Text color={separadoresColor} fontSize="md" paddingX={3}>
                |
              </Text>
            }
          >
            <Link to="/">
              <Text color={breadcrumbLinksColor} fontSize="sm">
                Compartir
              </Text>
            </Link>
            <Link to="/">
              <Text color={breadcrumbLinksColor} fontSize="sm">
                Vender uno igual
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default DetailPageBreadcrumb;
