import React from "react";
import {Box, Image, Link, Stack, Text} from "@chakra-ui/react";

import ImageSlider from "../../landing/ImageSlider";
import {SliderData} from "../../landing/SliderData";
const HomeScreen: React.FC = () => {
  return (
    <Stack spacing={0}>
      <ImageSlider slides={SliderData} />
      {/*<Link href="/productId">
        <Image
          alt="Productos destacados"
          objectFit="cover"
          src="https://http2.mlstatic.com/D_NQ_985609-MLA46118974446_052021-OO.webp"
        />
      </Link>
      */}

      {/*<div>
      <Text>{`<HomeScreen />`}</Text>
      <br />
      <Link href="/productId">Ver página de detalle de producto</Link>
      </div>*/}
    </Stack>
  );
};

export default HomeScreen;
