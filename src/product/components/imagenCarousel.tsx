import React, {useState} from "react";
import {Stack, Image} from "@chakra-ui/react";

import mock from "../mock";
import {Product} from "../types";

interface Props {
  product?: Product;
}
const ImagenCarousel: React.FC<Props> = ({product = mock.product}) => {
  let selectedPicture = 0;
  const [imagenDestacada, setImagenDestacada] = useState<string>(
    product.pictures[selectedPicture].secure_url,
  );
  const [idSelectedPicture, setIdSelectedPicture] = useState<number>();
  let bordeImagen = "blackAlpha.300"; //index == selectedPicture ? "secondary.900" :"secondary.300"
  let bordeImagenSelected = "secondary.900"; //index == selectedPicture ? "secondary.900" :"secondary.300"

  function handleImageClick(e: any) {
    selectedPicture = e.target.dataset.id;
    setImagenDestacada(product.pictures[selectedPicture].secure_url);
    setIdSelectedPicture(selectedPicture);
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack spacing={2}>
          {product.pictures.map((pict, index) => (
            <Stack
              key={pict.id}
              _hover={{borderColor: "secondary.900", cursor: "pointer"}}
              borderColor={index == idSelectedPicture ? bordeImagenSelected : bordeImagen}
              borderRadius="md"
              borderWidth={2}
              padding="1px"
            >
              <Image
                key={pict.id}
                data-id={index}
                height={12}
                objectFit="contain"
                src={pict.secure_url}
                width={12}
                onClick={(e) => handleImageClick(e)}
              />
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" justifyContent="center" width="100%">
          <Image height={480} src={imagenDestacada} />
        </Stack>
      </Stack>
    </>
  );
};

export default ImagenCarousel;
